-- Fix function search path for check_sitemap_stale
CREATE OR REPLACE FUNCTION public.check_sitemap_stale()
RETURNS boolean
LANGUAGE sql
STABLE
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.blog_posts bp
    CROSS JOIN public.sitemap_status ss
    WHERE bp.updated_at > ss.last_generated_at
    LIMIT 1
  );
$$;