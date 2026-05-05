import type { MetadataRoute } from "next";
import { posts } from "@/lib/newsData";

export const dynamic = "force-static";

const BASE = "https://acloudsol.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: BASE, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE}/managed-it`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE}/cybersecurity`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE}/cloud`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE}/it-consulting`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE}/ai-solutions`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE}/minneapolis`, priority: 0.85, changeFrequency: "monthly" as const },
    { url: `${BASE}/st-paul`, priority: 0.85, changeFrequency: "monthly" as const },
    { url: `${BASE}/bloomington`, priority: 0.85, changeFrequency: "monthly" as const },
    { url: `${BASE}/minnetonka`, priority: 0.85, changeFrequency: "monthly" as const },
    { url: `${BASE}/maple-grove`, priority: 0.85, changeFrequency: "monthly" as const },
    { url: `${BASE}/edina`, priority: 0.85, changeFrequency: "monthly" as const },
    { url: `${BASE}/eagan`, priority: 0.85, changeFrequency: "monthly" as const },
    { url: `${BASE}/woodbury`, priority: 0.85, changeFrequency: "monthly" as const },
    { url: `${BASE}/chicago`, priority: 0.85, changeFrequency: "monthly" as const },
    { url: `${BASE}/about`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/news`, priority: 0.75, changeFrequency: "weekly" as const },
    { url: `${BASE}/privacy`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${BASE}/terms`, priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const blogRoutes = posts.map((post) => ({
    url: `${BASE}/news/${post.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...blogRoutes];
}
