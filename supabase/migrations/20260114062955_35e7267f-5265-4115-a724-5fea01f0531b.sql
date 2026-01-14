-- Create table to store unresolved feedback/questions
CREATE TABLE public.unresolved_feedback (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  question TEXT NOT NULL,
  message_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.unresolved_feedback ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public chatbot, no auth required)
CREATE POLICY "Anyone can insert unresolved feedback" 
ON public.unresolved_feedback 
FOR INSERT 
WITH CHECK (true);

-- Only allow reading via service role (for admin/reporting purposes)
CREATE POLICY "Service role can read all feedback" 
ON public.unresolved_feedback 
FOR SELECT 
USING (false);