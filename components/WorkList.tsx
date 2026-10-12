import Image from "next/image";
import type { Work } from "@/data/works";

// next/image は basePath を自動付与しないため、公開パスは自分で前置きする
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function WorkList({ items }: { items: Work[] }) {
  return (
    <ul className="work-list">
      {items.map((w) => (
        <li key={w.title}>
          <div className="work-main">
            <h3>
              {w.title}
              {w.pinned && <span className="work-pinned" title="代表作">📌</span>}
            </h3>
            <p className="work-tech">{w.tech.join(" / ")}</p>
            <p>{w.description}</p>
            {w.links.length > 0 && (
              <ul className="work-links">
                {w.links.map((l) => (
                  <li key={l.url}>
                    <a href={l.url}>{l.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {w.thumbnail && (
            <Image
              className="work-thumb"
              src={`${basePath}${w.thumbnail}`}
              alt={w.title}
              width={640}
              height={360}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
