import { MetadataRoute } from 'next';
import { trends } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://dorsetcreative.com';

  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/portfolio',
    '/services',
    '/trends',
    '/ai-tool',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const trendRoutes = trends.map((trend) => ({
    url: `${siteUrl}/trends/${trend.slug}`,
    lastModified: new Date(trend.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...trendRoutes];
}
