import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Web広告 問題集</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Web広告に関する知識をクイズ形式で学ぼう
      </p>
      <Link
        href="/quizzes"
        className="rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors"
      >
        問題一覧を見る
      </Link>
    </main>
  );
}
