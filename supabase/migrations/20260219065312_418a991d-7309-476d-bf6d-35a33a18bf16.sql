
-- Drop all overly permissive policies
DROP POLICY IF EXISTS "Anyone can delete unresolved feedback" ON unresolved_feedback;
DROP POLICY IF EXISTS "Anyone can read unresolved feedback" ON unresolved_feedback;
DROP POLICY IF EXISTS "Anyone can insert unresolved feedback" ON unresolved_feedback;

DROP POLICY IF EXISTS "Anyone can delete learned answers" ON learned_answers;
DROP POLICY IF EXISTS "Anyone can insert learned answers" ON learned_answers;
DROP POLICY IF EXISTS "Anyone can update learned answers" ON learned_answers;
DROP POLICY IF EXISTS "Anyone can read learned answers" ON learned_answers;

DROP POLICY IF EXISTS "Anyone can insert helpful feedback" ON helpful_feedback;
DROP POLICY IF EXISTS "Anyone can read helpful feedback" ON helpful_feedback;

-- unresolved_feedback: public INSERT (chatbot submissions), authenticated SELECT/DELETE
CREATE POLICY "Public can insert unresolved feedback"
ON unresolved_feedback FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated can read unresolved feedback"
ON unresolved_feedback FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Authenticated can delete unresolved feedback"
ON unresolved_feedback FOR DELETE
TO authenticated
USING (true);

-- helpful_feedback: public INSERT, authenticated SELECT
CREATE POLICY "Public can insert helpful feedback"
ON helpful_feedback FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated can read helpful feedback"
ON helpful_feedback FOR SELECT
TO authenticated
USING (true);

-- learned_answers: public SELECT (needed by chatbot client), authenticated INSERT/UPDATE/DELETE
CREATE POLICY "Public can read learned answers"
ON learned_answers FOR SELECT
TO anon, authenticated
USING (true);

CREATE POLICY "Authenticated can insert learned answers"
ON learned_answers FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated can update learned answers"
ON learned_answers FOR UPDATE
TO authenticated
USING (true);

CREATE POLICY "Authenticated can delete learned answers"
ON learned_answers FOR DELETE
TO authenticated
USING (true);
