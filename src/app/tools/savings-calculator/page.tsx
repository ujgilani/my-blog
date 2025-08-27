"use client";

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

const CalculatorClient = dynamic(() => import('./CalculatorClient'), { ssr: false });

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Savings Calculator</h1>
        <p className="text-gray-700 mb-6">A simple calculator to help you plan an emergency fund.</p>
        <Suspense fallback={<div>Loading calculator…</div>}>
          <CalculatorClient />
        </Suspense>
      </div>
    </div>
  );
}
