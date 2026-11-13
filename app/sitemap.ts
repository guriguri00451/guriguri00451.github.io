import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/posts";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts().map((p) => ({
    url: `${siteUrl}/blog/${p.slug}`,
    lastModified: p.date || undefined,
  }));
  return [
    { url: siteUrl },
    { url: `${siteUrl}/works` },
    { url: `${siteUrl}/blog` },
    ...posts,
  ];
}
