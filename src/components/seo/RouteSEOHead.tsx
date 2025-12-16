import { Helmet } from "react-helmet-async";
import { useLocation, useParams } from "react-router-dom";
import { BRAND } from "@/config/brand";
import { getSeoMeta, SEOMeta, RouteParams } from "@/lib/seoUtils";

interface RouteSEOHeadProps {
  // Override auto-generated SEO with custom values
  override?: Partial<SEOMeta>;
  // Custom OG image
  ogImage?: string;
}

export function RouteSEOHead({ override, ogImage }: RouteSEOHeadProps = {}) {
  const location = useLocation();
  const params = useParams() as RouteParams;

  // Get auto-generated SEO based on current route
  const autoSeo = getSeoMeta(location.pathname, params);

  // Merge with overrides
  const seo: SEOMeta = {
    ...autoSeo,
    ...override,
    // Ensure canonical always uses the generated one unless explicitly overridden
    canonicalUrl: override?.canonicalUrl || autoSeo.canonicalUrl,
  };

  const finalOgImage = ogImage || seo.ogImage || `https://${BRAND.domain}/og/swindonblockeddrains-og.jpg`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />

      {/* Google Search Console verification */}
      <meta name="google-site-verification" content="NsHdtpHnQwP_k83k4Z2-v5NSIDC6qiTuGiSpNkxp3ZU" />

      {/* Canonical URL - CRITICAL: Must be self-referencing */}
      <link rel="canonical" href={seo.canonicalUrl} />

      {/* Robots directive */}
      {seo.noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.canonicalUrl} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:site_name" content={BRAND.brandName} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seo.canonicalUrl} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={finalOgImage} />
    </Helmet>
  );
}
