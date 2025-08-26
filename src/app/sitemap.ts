import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mukilteotech.com';
  const now = new Date();

  const routes: MetadataRoute.Sitemap = ['', '/services', '/about', '/contact', '/contact-success', '/portfolio'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));

  return routes;
}
