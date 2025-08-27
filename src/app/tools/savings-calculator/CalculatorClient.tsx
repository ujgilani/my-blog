"use client";

import React, { useState } from 'react';

export default function CalculatorClient() {
  const [monthly, setMonthly] = useState<number | "">("");
  const [months, setMonths] = useState<number>(3);
  const [current, setCurrent] = useState<number | "">("");

  const parse = (v: number | "") => (typeof v === "number" ? v : 0);
  const target = parse(monthly) * months;
  const needed = Math.max(0, target - parse(current));
  const perMonth = Math.ceil(needed / Math.max(1, months));
  const perWeek = Math.ceil(perMonth / 4);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Emergency Fund Savings Calculator</h2>
      <p className="mb-4 text-gray-600">Estimate how much you need and how quickly you can get there.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <label className="flex flex-col">
          <span className="text-sm text-gray-700">Your essential monthly expenses ($)</span>
          <input
            type="number"
            value={monthly}
            onChange={(e) => setMonthly(e.target.value === "" ? "" : Number(e.target.value))}
            className="mt-1 p-2 border rounded"
            placeholder="e.g. 2300"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm text-gray-700">Goal (months)</span>
          <select value={months} onChange={(e) => setMonths(Number(e.target.value))} className="mt-1 p-2 border rounded">
            <option value={1}>1 month</option>
            <option value={3}>3 months</option>
            <option value={6}>6 months</option>
            <option value={12}>12 months</option>
          </select>
        </label>

        <label className="flex flex-col sm:col-span-2">
          <span className="text-sm text-gray-700">Current savings for emergencies ($)</span>
          <input
            type="number"
            value={current}
            onChange={(e) => setCurrent(e.target.value === "" ? "" : Number(e.target.value))}
            className="mt-1 p-2 border rounded"
            placeholder="e.g. 400"
          />
        </label>
      </div>

      <div className="bg-gray-50 p-4 rounded border">
        <p className="text-sm text-gray-700">Target emergency fund: <strong>${target.toLocaleString()}</strong></p>
        <p className="text-sm text-gray-700">Amount still needed: <strong>${needed.toLocaleString()}</strong></p>
        <p className="text-sm text-gray-700">Required per month: <strong>${perMonth.toLocaleString()}</strong></p>
        <p className="text-sm text-gray-700">Required per week: <strong>${perWeek.toLocaleString()}</strong></p>
      </div>

      <div className="mt-4 flex gap-2">
        <a href="/worksheets/emergency-fund-worksheet.csv" className="inline-block bg-blue-600 text-white px-4 py-2 rounded">Download Worksheet</a>
        <button
          onClick={() => { setMonthly(""); setMonths(3); setCurrent(""); }}
          className="inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
