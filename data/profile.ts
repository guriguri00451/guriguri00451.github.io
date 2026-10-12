type SkillLevel = "master" | "good" | "learning";
type Skill = { name: string; logo?: string; level?: SkillLevel };

export const skillLevels: Record<SkillLevel, { emoji: string; label: string }> = {
  master: { emoji: "😻", label: "マスター or 好き" },
  good: { emoji: "☺️", label: "いい感じ" },
  learning: { emoji: "🧐", label: "勉強中" },
};

export const profile: {
  name: string;
  role: string;
  bio: string;
  skillCategories: { label: string; items: Skill[] }[];
  hobbies: string[];
  links: { label: string; url: string }[];
} = {
  name: "t.そーま",
  role: "ゲームエンジニア",
  bio: "福岡大学 商学部 / 福大ピアプロ / じょぎ",
  skillCategories: [
    {
      label: "ゲームエンジン",
      items: [
        { name: "Unreal Engine", logo: "/logos/unrealengine.svg", level: "master" },
        { name: "Unity", logo: "/logos/unity.svg", level: "master" },
        { name: "Godot", logo: "/logos/godotengine.svg", level: "learning" },
      ],
    },
    {
      label: "プログラミング",
      items: [
        { name: "C#", logo: "/logos/csharp.svg", level: "good" },
        { name: "TypeScript", logo: "/logos/typescript.svg", level: "learning" },
      ],
    },
    {
      label: "DCCツール",
      items: [
        { name: "Blender", logo: "/logos/blender.svg", level: "good" },
        { name: "Maya", logo: "/logos/maya.svg", level: "learning" },
        { name: "Substance 3D Painter", logo: "/logos/substance3dpainter.svg", level: "learning" },
      ],
    },
    {
      label: "画像編集",
      items: [
        { name: "Affinity", logo: "/logos/affinity.png", level: "good" },
        { name: "Illustrator", logo: "/logos/illustrator.svg", level: "good" },
        { name: "Photoshop", logo: "/logos/photoshop.svg", level: "good" },
        { name: "Figma", logo: "/logos/figma.svg", level: "good" },
        { name: "Aseprite", logo: "/logos/aseprite.svg", level: "learning" },
      ],
    },
    {
      label: "画像生成",
      items: [
        { name: "ComfyUI", logo: "/logos/comfyui.svg", level: "good" },
      ],
    },
  ],
  hobbies: ["ゲーム", "カラオケ","映画","アニメ"],
  links: [
    { label: "X (@guriguri00451)", url: "https://x.com/guriguri00451" },
    { label: "Email", url: "mailto:guriguri00451@gmail.com" },
  ],
};
