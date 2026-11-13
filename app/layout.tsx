import type { Metadata } from "next";
import { siteDescription, siteName, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteName, template: `%s | ${siteName}` },
  description: siteDescription,
  alternates: { canonical: "/" },
  // Search Console の所有権確認(HTMLタグ方式)。値は "google-site-verification=" を除いたトークン部分
  verification: { google: "ZNzrShjn5drdczIYRE98cJbUDu8Kl7D0X7n5sSkUsQA" },
  openGraph: {
    type: "website",
    siteName,
    title: siteName,
    description: siteDescription,
    url: "/",
    locale: "ja_JP",
  },
  twitter: { card: "summary", title: siteName, description: siteDescription },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
