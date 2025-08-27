
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { questions, Answers } from '@/lib/quiz';

export default function QuizPage() {
  const [answers, setAnswers] = useState<Answers>({});
  const router = useRouter();

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.keys(answers).length < questions.length) {
      alert('Please answer all questions.');
      return;
    }
    
    const query = new URLSearchParams(answers as Record<string, string>).toString();
    router.push(`/quiz/results?${query}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="text-2xl text-blue-600 mr-3">📈</div>
                <span className="text-xl font-bold text-gray-800">Smart Money Moves</span>
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/#start" className="text-gray-700 hover:text-blue-600 transition">Start Here</Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition">Blog</Link>
              <Link href="/#tools" className="text-gray-700 hover:text-blue-600 transition">Budget Tools</Link>
              <Link href="/#calculator" className="text-gray-700 hover:text-blue-600 transition">Debt Calculator</Link>
              <Link href="/#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Quiz Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <>
              <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
                What&apos;s Your Financial Health Score?
              </h1>
              <p className="text-center text-gray-600 mb-8">
                This quick 5-minute quiz will help you understand your financial strengths and weaknesses.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="space-y-8 text-gray-800">
                  {questions.map((q) => (
                    <div key={q.id}>
                      <h2 className="text-xl font-semibold mb-4">{q.text}</h2>
                      <div className="space-y-2">
                        {q.options.map((option) => (
                          <label
                            key={option.value}
                            className={`flex items-center p-4 border rounded-lg hover:bg-gray-100 cursor-pointer ${
                              answers[q.id as keyof Answers] === option.value ? 'bg-blue-100 border-blue-400' : ''
                            }`}
                          >
                            <input
                              type="radio"
                              name={q.id}
                              value={option.value}
                              checked={answers[q.id as keyof Answers] === option.value}
                              onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                              className="mr-4"
                            />
                            <span>{option.text}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-12">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
                  >
                    Get My Score
                  </button>
                </div>
              </form>
            </>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 Smart Money Moves. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
