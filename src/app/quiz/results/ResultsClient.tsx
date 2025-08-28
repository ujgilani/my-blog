"use client";

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { calculateResult, questions, Answers } from '@/lib/quiz';

const getHighlightColor = (questionId: keyof Answers, answer: string) => {
  if (answer === 'a') return 'bg-green-100 border-green-400';
  if (answer === 'b') return 'bg-yellow-100 border-yellow-400';
  if (answer === 'c') return 'bg-red-100 border-red-400';
  return '';
};

export default function ResultsClient() {
  const searchParams = useSearchParams();
  const answers: Answers = {
    q1: searchParams?.get('q1') || undefined,
    q2: searchParams?.get('q2') || undefined,
    q3: searchParams?.get('q3') || undefined,
    q4: searchParams?.get('q4') || undefined,
    q5: searchParams?.get('q5') || undefined,
    q6: searchParams?.get('q6') || undefined,
  };

  const result = calculateResult(answers);

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
          </div>
        </div>
      </nav>

      {/* Results Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md text-gray-800">
          <div>
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Your Financial Snapshot</h1>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-green-600 mb-4">Strengths</h2>
              {result.strengths.length > 0 ? (
                <ul className="list-disc list-inside space-y-2">
                  {result.strengths.map((strength, i) => <li key={i}>{strength}</li>)}
                </ul>
              ) : (
                <p>No significant strengths identified. That&apos;s okay! We&apos;re here to help you build them.</p>
              )}
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-red-600 mb-4">Areas for Improvement</h2>
              {result.weaknesses.length > 0 ? (
              <ul className="list-disc list-inside space-y-2">
                {result.weaknesses.map((weakness, i) => <li key={i}>{weakness}</li>)}
              </ul>
              ) : (
                  <p>No significant weaknesses identified. Keep up the great work!</p>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">Your Action Plan</h2>
              <div className="space-y-4">
                {result.suggestions.map((suggestion, i) => (
                  <div key={i} className="p-4 bg-gray-100 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">{suggestion.title}</h3>
                    <p>{suggestion.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Answers</h2>
                <div className="space-y-4">
                    {questions.map(q => {
                        const answer = answers[q.id as keyof Answers];
                        const selectedOption = q.options.find(opt => opt.value === answer);
                        const colorClass = getHighlightColor(q.id as keyof Answers, answer || '');
                        return (
                            <div key={q.id} className={`p-4 border rounded-lg ${colorClass}`}>
                                <h3 className="font-semibold text-lg mb-2">{q.text}</h3>
                                <p>Your answer: {selectedOption ? selectedOption.text : 'Not answered'}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/quiz" className="bg-gray-200 text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-300 transition">
                Retake Quiz
              </Link>
            </div>
          </div>
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
