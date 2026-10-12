import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const dir = path.join(process.cwd(), "content/posts");

export type PostMeta = { slug: string; title: string; date: string };

// gray-matter が frontmatter の日付を Date に変換するので YYYY-MM-DD に揃える
function formatDate(v: unknown): string {
  return v instanceof Date ? v.toISOString().slice(0, 10) : String(v ?? "");
}

export function getPosts(): PostMeta[] {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const slug = f.replace(/\.md$/, "");
      const { data } = matter(fs.readFileSync(path.join(dir, f), "utf8"));
      return { slug, title: String(data.title ?? slug), date: formatDate(data.date) };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string) {
  const { data, content } = matter(fs.readFileSync(path.join(dir, `${slug}.md`), "utf8"));
  return {
    title: String(data.title ?? slug),
    date: formatDate(data.date),
    html: marked.parse(content, { async: false, breaks: true }),
  };
}
