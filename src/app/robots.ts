import type { MetadataRoute } from 'next';

const SITE_URL = 'https://blythapp.com';

export default function robots(): MetadataRoute.Robots {
  const deployContext = process.env.VERCEL_ENV ?? process.env.CONTEXT;
  const isProduction = deployContext
    ? deployContext === 'production'
    : process.env.NODE_ENV === 'production';

  if (!isProduction) {
    return { rules: { userAgent: '*', disallow: '/' } };
  }

  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
