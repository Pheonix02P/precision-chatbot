
CREATE TABLE public.helpful_feedback (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  question TEXT NOT NULL,
  message_id TEXT
);

ALTER TABLE public.helpful_feedback ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert helpful feedback" ON public.helpful_feedback FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can read helpful feedback" ON public.helpful_feedback FOR SELECT USING (true);
