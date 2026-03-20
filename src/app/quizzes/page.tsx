import Link from "next/link";

type Quiz = {
  id: number;
  title: string;
  category: string;
  difficulty: "easy" | "medium" | "hard";
};

async function getQuizzes(): Promise<Quiz[]> {
  // TODO: Replace with actual API call
  return [
    { id: 1, title: "CPCとCPMの違いとは？", category: "基礎知識", difficulty: "easy" },
    { id: 2, title: "Google広告のスマートビディングとは？", category: "Google広告", difficulty: "medium" },
    { id: 3, title: "アトリビューションモデルの種類と特徴", category: "計測・分析", difficulty: "hard" },
  ];
}

const difficultyLabel = {
  easy: { label: "初級", className: "bg-green-100 text-green-800" },
  medium: { label: "中級", className: "bg-yellow-100 text-yellow-800" },
  hard: { label: "上級", className: "bg-red-100 text-red-800" },
};

export default async function QuizzesPage() {
  const quizzes = await getQuizzes();

  return (
    <main className="min-h-screen p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">問題一覧</h1>
      <p className="text-gray-600 mb-8">カテゴリ別のWeb広告問題に挑戦しよう</p>

      <ul className="space-y-4">
        {quizzes.map((quiz) => {
          const diff = difficultyLabel[quiz.difficulty];
          return (
            <li key={quiz.id}>
              <Link
                href={`/quizzes/${quiz.id}`}
                className="block rounded-lg border border-gray-200 p-5 hover:border-blue-400 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{quiz.category}</span>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${diff.className}`}>
                    {diff.label}
                  </span>
                </div>
                <p className="mt-2 font-semibold text-gray-900">{quiz.title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
