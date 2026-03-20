import Link from "next/link";
import { quizzes, type Difficulty } from "@/data/quizzes";

const difficultyLabel: Record<Difficulty, { label: string; className: string }> = {
  easy: { label: "初級", className: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
  medium: { label: "中級", className: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" },
  hard: { label: "上級", className: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" },
};

export default function QuizzesPage() {
  return (
    <main className="min-h-screen p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">問題一覧</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        カテゴリ別のWeb広告問題に挑戦しよう（全{quizzes.length}問）
      </p>

      <ul className="space-y-4">
        {quizzes.map((quiz) => {
          const diff = difficultyLabel[quiz.difficulty];
          return (
            <li key={quiz.id}>
              <Link
                href={`/quizzes/${quiz.id}`}
                className="block rounded-lg border border-gray-200 dark:border-gray-700 p-5 hover:border-blue-400 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{quiz.category}</span>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${diff.className}`}>
                    {diff.label}
                  </span>
                </div>
                <p className="mt-2 font-semibold text-gray-900 dark:text-white">{quiz.title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
