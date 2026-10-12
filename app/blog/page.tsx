import Link from "next/link";
import { getPosts } from "@/lib/posts";

export const metadata = { title: "Blog" };

export default function Blog() {
  return (
    <main>
      <p><Link href="/">← Home</Link></p>
      <h1>Blog</h1>
      <ul>
        {getPosts().map((p) => (
          <li key={p.slug}>
            {p.date} <Link href={`/blog/${p.slug}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
