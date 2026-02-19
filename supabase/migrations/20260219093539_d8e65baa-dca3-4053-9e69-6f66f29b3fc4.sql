
-- Drop and recreate policies as PERMISSIVE for unresolved_feedback
DROP POLICY IF EXISTS "Authenticated can delete unresolved feedback" ON public.unresolved_feedback;
DROP POLICY IF EXISTS "Authenticated can read unresolved feedback" ON public.unresolved_feedback;
DROP POLICY IF EXISTS "Public can insert unresolved feedback" ON public.unresolved_feedback;

CREATE POLICY "Public can insert unresolved feedback"
  ON public.unresolved_feedback FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Public can read unresolved feedback"
  ON public.unresolved_feedback FOR SELECT
  USING (true);

CREATE POLICY "Public can delete unresolved feedback"
  ON public.unresolved_feedback FOR DELETE
  USING (true);

-- Drop and recreate policies as PERMISSIVE for helpful_feedback
DROP POLICY IF EXISTS "Authenticated can read helpful feedback" ON public.helpful_feedback;
DROP POLICY IF EXISTS "Public can insert helpful feedback" ON public.helpful_feedback;

CREATE POLICY "Public can insert helpful feedback"
  ON public.helpful_feedback FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Public can read helpful feedback"
  ON public.helpful_feedback FOR SELECT
  USING (true);

-- Drop and recreate policies as PERMISSIVE for learned_answers
DROP POLICY IF EXISTS "Authenticated can delete learned answers" ON public.learned_answers;
DROP POLICY IF EXISTS "Authenticated can insert learned answers" ON public.learned_answers;
DROP POLICY IF EXISTS "Authenticated can update learned answers" ON public.learned_answers;
DROP POLICY IF EXISTS "Public can read learned answers" ON public.learned_answers;

CREATE POLICY "Public can read learned answers"
  ON public.learned_answers FOR SELECT
  USING (true);

CREATE POLICY "Public can insert learned answers"
  ON public.learned_answers FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Public can update learned answers"
  ON public.learned_answers FOR UPDATE
  USING (true);

CREATE POLICY "Public can delete learned answers"
  ON public.learned_answers FOR DELETE
  USING (true);
