import type { Song } from "@/data/songs";

// Spotify 埋め込みの推奨高さ。トラックは1行表示、プレイリスト等は一覧が見える高さ
const embedHeight = (type: string) => (type === "track" ? 152 : 352);

// id には素のIDのほか、共有URL丸ごとや "?si=..." 付きも許容する
function parseSpotify(s: Song): { type: string; id: string } {
  const m = s.id.match(/open\.spotify\.com\/(track|playlist|album|artist)\/([A-Za-z0-9]+)/);
  if (m) return { type: m[1], id: m[2] };
  return { type: s.type ?? "track", id: s.id.split("?")[0] };
}

export function SongList({ items }: { items: Song[] }) {
  return (
    <ul className="song-list">
      {items.map((s) => {
        const { type, id } = parseSpotify(s);
        return (
          <li key={s.id}>
            {s.note && <p className="song-note">{s.note}</p>}
            <iframe
              src={`https://open.spotify.com/embed/${type}/${id}?utm_source=generator`}
              width="100%"
              height={embedHeight(type)}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify player"
            />
          </li>
        );
      })}
    </ul>
  );
}
