import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// output: "export" では静的に書き出せるよう明示が必要
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
