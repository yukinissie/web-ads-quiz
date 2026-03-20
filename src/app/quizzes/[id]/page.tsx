import Link from "next/link";
import { notFound } from "next/navigation";

type QuizDetail = {
  id: number;
  title: string;
  category: string;
  question: string;
  choices: { label: string; text: string }[];
  answer: string;
  explanation: string;
};

async function getQuiz(id: string): Promise<QuizDetail | null> {
  // TODO: Replace with actual API call
  const quizzes: QuizDetail[] = [
    {
      id: 1,
      title: "CPCとCPMの違いとは？",
      category: "基礎知識",
      question: "CPC（Cost Per Click）とCPM（Cost Per Mille）の説明として正しいものはどれですか？",
      choices: [
        { label: "A", text: "CPCはクリックごとに課金、CPMは1,000インプレッションごとに課金" },
        { label: "B", text: "CPCは1,000インプレッションごとに課金、CPMはクリックごとに課金" },
        { label: "C", text: "どちらもクリックごとに課金される" },
        { label: "D", text: "どちらも1,000インプレッションごとに課金される" },
      ],
      answer: "A",
      explanation:
        "CPCはクリック単価で、広告がクリックされるたびに費用が発生します。CPMはインプレッション単価で、広告が1,000回表示されるごとに費用が発生します。",
    },
  ];

  const quiz = quizzes.find((q) => q.id === parseInt(id, 10));
  return quiz ?? null;
}

export default async function QuizDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const quiz = await getQuiz(id);

  if (!quiz) {
    notFound();
  }

  return (
    <main className="min-h-screen p-8 max-w-3xl mx-auto">
      <Link href="/quizzes" className="text-blue-600 dark:text-blue-400 hover:underline text-sm mb-6 inline-block">
        ← 問題一覧に戻る
      </Link>

      <div className="mb-2">
        <span className="text-sm text-gray-500 dark:text-gray-400">{quiz.category}</span>
      </div>
      <h1 className="text-2xl font-bold mb-6">{quiz.title}</h1>

      <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-6">
        <p className="font-medium text-gray-900 dark:text-white mb-4">{quiz.question}</p>
        <ul className="space-y-3">
          {quiz.choices.map((choice) => (
            <li
              key={choice.label}
              className="rounded-md border border-gray-200 dark:border-gray-700 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors"
            >
              <span className="font-semibold mr-2">{choice.label}.</span>
              {choice.text}
            </li>
          ))}
        </ul>
      </div>

      <details className="rounded-lg border border-blue-100 dark:border-blue-900 bg-blue-50 dark:bg-blue-950 p-5">
        <summary className="font-semibold text-blue-700 dark:text-blue-300 cursor-pointer">解答と解説を見る</summary>
        <div className="mt-4">
          <p className="font-bold text-blue-800 dark:text-blue-200 mb-2">正解：{quiz.answer}</p>
          <p className="text-gray-700 dark:text-gray-300">{quiz.explanation}</p>
        </div>
      </details>
    </main>
  );
}
