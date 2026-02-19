import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash2, BookOpen, ArrowLeft, MessageSquareWarning, CheckCircle2, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

type UnresolvedFeedback = {
  id: string;
  question: string;
  created_at: string;
};

type LearnedAnswer = {
  id: string;
  question: string;
  answer: string;
  created_at: string;
};

export default function Learn() {
  const { isAuthenticated, loading: authLoading, signOut } = useAdminAuth();
  const [unresolvedQuestions, setUnresolvedQuestions] = useState<UnresolvedFeedback[]>([]);
  const [learnedAnswers, setLearnedAnswers] = useState<LearnedAnswer[]>([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [answeringId, setAnsweringId] = useState<string | null>(null);
  const [answerText, setAnswerText] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      navigate("/admin-login?redirect=/learn");
    }
  }, [authLoading, isAuthenticated, navigate]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  const fetchData = async () => {
    setLoading(true);
    const [feedbackRes, learnedRes] = await Promise.all([
      supabase.from("unresolved_feedback").select("*").order("created_at", { ascending: false }),
      supabase.from("learned_answers").select("*").order("created_at", { ascending: false }),
    ]);
    if (feedbackRes.data) setUnresolvedQuestions(feedbackRes.data);
    if (learnedRes.data) setLearnedAnswers(learnedRes.data);
    setLoading(false);
  };

  const handleProvideAnswer = async (feedbackId: string, question: string) => {
    if (!answerText.trim()) return;
    const { error } = await supabase.from("learned_answers").insert({
      question,
      answer: answerText.trim(),
      source_feedback_id: feedbackId,
    });
    if (error) {
      toast({ title: "Error", description: "Failed to save answer.", variant: "destructive" });
      return;
    }
    await supabase.from("unresolved_feedback").delete().eq("id", feedbackId);
    setAnsweringId(null);
    setAnswerText("");
    toast({ title: "Learned!", description: "The bot will now use this answer." });
    fetchData();
  };

  const handleAddManual = async () => {
    if (!newQuestion.trim() || !newAnswer.trim()) return;
    const { error } = await supabase.from("learned_answers").insert({
      question: newQuestion.trim(),
      answer: newAnswer.trim(),
    });
    if (error) {
      toast({ title: "Error", description: "Failed to save.", variant: "destructive" });
      return;
    }
    setNewQuestion("");
    setNewAnswer("");
    toast({ title: "Added!", description: "New Q&A pair saved." });
    fetchData();
  };

  const handleDeleteLearned = async (id: string) => {
    await supabase.from("learned_answers").delete().eq("id", id);
    toast({ title: "Deleted", description: "Q&A pair removed." });
    fetchData();
  };

  const handleDismissFeedback = async (id: string) => {
    await supabase.from("unresolved_feedback").delete().eq("id", id);
    toast({ title: "Dismissed", description: "Feedback entry removed." });
    fetchData();
  };

  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-background">
      <header className="flex items-center gap-3 px-4 py-3 border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-20">
        <Button variant="ghost" size="icon" onClick={() => navigate("/")} className="h-8 w-8">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <BookOpen className="h-5 w-5 text-primary" />
        <h1 className="font-semibold text-sm flex-1">Learning Mode</h1>
        <Button variant="ghost" size="sm" onClick={signOut} className="text-xs gap-1">
          <LogOut className="h-3.5 w-3.5" /> Sign Out
        </Button>
      </header>

      <div className="max-w-3xl mx-auto p-4 space-y-6">
        {/* Add new Q&A manually */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <Plus className="h-4 w-4" /> Add New Q&A Pair
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Input
              placeholder="Question (e.g. 'How to reactivate a slot?')"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
            />
            <Textarea
              placeholder="Answer the bot should give..."
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
              rows={3}
            />
            <Button onClick={handleAddManual} disabled={!newQuestion.trim() || !newAnswer.trim()} size="sm">
              Add to Knowledge
            </Button>
          </CardContent>
        </Card>

        {/* Unresolved questions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <MessageSquareWarning className="h-4 w-4 text-orange-500" />
              Unanswered Questions ({unresolvedQuestions.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p className="text-sm text-muted-foreground">Loading...</p>
            ) : unresolvedQuestions.length === 0 ? (
              <p className="text-sm text-muted-foreground">No unanswered questions! 🎉</p>
            ) : (
              <div className="space-y-3">
                {unresolvedQuestions.map((q) => (
                  <div key={q.id} className="border rounded-lg p-3 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium">{q.question}</p>
                      <div className="flex gap-1 shrink-0">
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-7 text-xs"
                          onClick={() => {
                            setAnsweringId(answeringId === q.id ? null : q.id);
                            setAnswerText("");
                          }}
                        >
                          {answeringId === q.id ? "Cancel" : "Answer"}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-7 text-xs text-muted-foreground"
                          onClick={() => handleDismissFeedback(q.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {new Date(q.created_at).toLocaleDateString()}
                    </p>
                    {answeringId === q.id && (
                      <div className="space-y-2 pt-1">
                        <Textarea
                          placeholder="Provide the correct answer..."
                          value={answerText}
                          onChange={(e) => setAnswerText(e.target.value)}
                          rows={3}
                        />
                        <Button
                          size="sm"
                          onClick={() => handleProvideAnswer(q.id, q.question)}
                          disabled={!answerText.trim()}
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 mr-1" /> Save Answer
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Existing learned answers */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              Learned Answers ({learnedAnswers.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {learnedAnswers.length === 0 ? (
              <p className="text-sm text-muted-foreground">No learned answers yet.</p>
            ) : (
              <div className="space-y-3">
                {learnedAnswers.map((la) => (
                  <div key={la.id} className="border rounded-lg p-3 space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium">{la.question}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 text-xs text-muted-foreground shrink-0"
                        onClick={() => handleDeleteLearned(la.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground whitespace-pre-wrap">{la.answer}</p>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
