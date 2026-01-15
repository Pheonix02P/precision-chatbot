-- Drop the restrictive SELECT policy
DROP POLICY IF EXISTS "Service role can read all feedback" ON public.unresolved_feedback;

-- Create a new policy that allows anyone to read feedback (for admin export)
CREATE POLICY "Anyone can read unresolved feedback"
ON public.unresolved_feedback
FOR SELECT
USING (true);