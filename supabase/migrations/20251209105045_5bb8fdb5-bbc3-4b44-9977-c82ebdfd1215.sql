-- Create sitemap_status table to track generation
CREATE TABLE public.sitemap_status (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  last_generated_at timestamp with time zone NOT NULL DEFAULT now(),
  url_count integer NOT NULL DEFAULT 0,
  generated_by text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.sitemap_status ENABLE ROW LEVEL SECURITY;

-- Only admins can read/write sitemap status
CREATE POLICY "Admins can view sitemap status"
ON public.sitemap_status
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update sitemap status"
ON public.sitemap_status
FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

-- Insert initial record
INSERT INTO public.sitemap_status (last_generated_at, url_count, generated_by)
VALUES (now(), 0, 'initial');

-- Create function to check if sitemap needs regeneration
CREATE OR REPLACE FUNCTION public.check_sitemap_stale()
RETURNS boolean
LANGUAGE sql
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.blog_posts bp
    CROSS JOIN public.sitemap_status ss
    WHERE bp.updated_at > ss.last_generated_at
    LIMIT 1
  );
$$;