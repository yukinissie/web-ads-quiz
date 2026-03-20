import { NextResponse } from "next/server";

const quizzes = [
  {
    id: 1,
    title: "CPCとCPMの違いとは？",
    category: "基礎知識",
    difficulty: "easy",
  },
  {
    id: 2,
    title: "Google広告のスマートビディングとは？",
    category: "Google広告",
    difficulty: "medium",
  },
  {
    id: 3,
    title: "アトリビューションモデルの種類と特徴",
    category: "計測・分析",
    difficulty: "hard",
  },
];

export function GET() {
  return NextResponse.json(quizzes);
}
