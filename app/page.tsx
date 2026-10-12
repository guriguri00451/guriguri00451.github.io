import Image from "next/image";
import Link from "next/link";
import { profile, skillLevels } from "@/data/profile";
import { works } from "@/data/works";
import { songs } from "@/data/songs";
import { WorkList } from "@/components/WorkList";
import { SongList } from "@/components/SongList";
import { getPosts } from "@/lib/posts";

// next/image は basePath を自動付与しないため、公開パスは自分で前置きする
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Home() {
  return (
    <main>
      <header>
        <h1>{profile.name}</h1>
        <p>{profile.role}</p>
      </header>
      <section id="about">
        <h2>About</h2>
        <p>{profile.bio}</p>
      </section>
      <section id="works">
        <h2>Works</h2>
        <WorkList items={works.slice(0, 2)} />
        <p><Link href="/works">すべての作品 →</Link></p>
      </section>
      <section id="skills">
        <h2>
          Skills
          <span className="skill-legend">
            {Object.values(skillLevels)
              .map((l) => `${l.emoji} ${l.label}`)
              .join(" / ")}
          </span>
        </h2>
        {profile.skillCategories.map((c) => (
          <section key={c.label}>
            <h3>{c.label}</h3>
            <ul>
              {c.items.map((s) => (
                <li key={s.name}>
                  {s.logo ? (
                    <Image
                      className="skill-logo"
                      src={`${basePath}${s.logo}`}
                      alt=""
                      width={24}
                      height={24}
                    />
                  ) : (
                    <span className="skill-logo" aria-hidden />
                  )}
                  {s.name}
                  {s.level && (
                    <span title={skillLevels[s.level].label}>
                      {skillLevels[s.level].emoji}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </section>
      <section id="hobbies">
        <h2>Hobbies</h2>
        <ul>
          {profile.hobbies.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </section>
      <section id="music">
        <h2>Music</h2>
        <SongList items={songs} />
      </section>
      <section id="blog">
        <h2>Blog</h2>
        <ul>
          {getPosts()
            .slice(0, 5)
            .map((p) => (
              <li key={p.slug}>
                {p.date} <Link href={`/blog/${p.slug}`}>{p.title}</Link>
              </li>
            ))}
        </ul>
        <p><Link href="/blog">記事一覧へ →</Link></p>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <ul>
          {profile.links.map((l) => (
            <li key={l.label}>
              <a href={l.url}>{l.label}</a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
