export type Work = {
  title: string;
  tech: string[];
  description: string;
  links: { label: string; url: string }[];
  // public/ からのパス。画像は public/works/ に置く。未設定ならサムネ無しで表示
  thumbnail?: string;
  // true にすると📌バッジが付く（表示順には影響しない）
  pinned?: boolean;
};

// 新しいものを先頭に追加していく。ホームには先頭2件が表示される
export const works: Work[] = [
  {
    title: "ざこのあひる",
    thumbnail: "/works/zako.jpg",
    pinned: true,
    tech: ["Unity", "C#"],
    description: "メスガキに煽られながら登る、登山ゲーム",
    links: [
      { label: "Steam", url: "https://store.steampowered.com/app/2879980" },
      { label: "X", url: "https://x.com/fukuokafighters?s=20" },
    ],
  },
  {
    title: "じいや！巨大ロボで紅茶を注ぎなさい！",
    thumbnail: "/works/jiiya.jpg",
    tech: ["Unity", "C#"],
    description: "巨大お嬢様のために巨大ロボで紅茶を注ぐ、VRゲームです",
    links: [{ label: "GitHub", url: "https://github.com/mofurune/GiantRobotTeaParty" }],
  },
  {
    title: "ふんばれ！ブリュレイド！！",
    thumbnail: "/works/burureido.png",
    tech: ["Next.js", "TS"],
    description: "うんちのゲミフィケーションです",
    links: [
      { label: "GitHub", url: "https://github.com/KOU050223/PoopBattler" },
      { label: "Topa'z", url: "https://topaz.dev/projects/78fefb2559fd33307122" },
    ],
  },
  {
    title: "ほりこれ",
    thumbnail: "/works/horikore.png",
    tech: ["React", "TS", "Theree.js"],
    description: "堀大輔コレクション,略してほりこれ",
    links: [
      { label: "GitHub", url: "https://github.com/guriguri00451/Horikore" },
      { label: "Topa'z", url: "https://topaz.dev/projects/f817b1d867af7fb5cd60" },
    ],
  },
];
