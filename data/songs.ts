export type Song = {
  // 「共有 → リンクをコピー」で得られるURLを丸ごと貼ってもOK。IDだけでも可
  // 例: "https://open.spotify.com/track/XXXX?si=..." でも "XXXX" でも動く
  id: string;
  type?: "track" | "playlist" | "album" | "artist"; // 省略時は track
  note?: string;
};

export const songs: Song[] = [
  {
    id: "7Mt2nP2EmZxlyGTZWaxnDg?si=ca56c6a16ac24301",
    note: "最近のお気に入り",
  },
];
