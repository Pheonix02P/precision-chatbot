
-- Table for storing learned Q&A pairs
CREATE TABLE public.learned_answers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  source_feedback_id UUID REFERENCES public.unresolved_feedback(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.learned_answers ENABLE ROW LEVEL SECURITY;

-- Public read (edge function needs to read these)
CREATE POLICY "Anyone can read learned answers"
ON public.learned_answers FOR SELECT USING (true);

-- Public insert/update (protected by password in UI)
CREATE POLICY "Anyone can insert learned answers"
ON public.learned_answers FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can update learned answers"
ON public.learned_answers FOR UPDATE USING (true);

CREATE POLICY "Anyone can delete learned answers"
ON public.learned_answers FOR DELETE USING (true);

-- Allow deleting resolved feedback entries
CREATE POLICY "Anyone can delete unresolved feedback"
ON public.unresolved_feedback FOR DELETE USING (true);
