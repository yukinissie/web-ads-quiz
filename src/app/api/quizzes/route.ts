import { NextResponse } from "next/server";
import { quizzes } from "@/data/quizzes";

export function GET() {
  const list = quizzes.map(({ id, title, category, difficulty }) => ({
    id,
    title,
    category,
    difficulty,
  }));
  return NextResponse.json(list);
}
