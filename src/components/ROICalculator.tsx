'use client';

import { useState } from 'react';

export default function ROICalculator() {
  const [hoursSaved, setHoursSaved] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [toolCost, setToolCost] = useState(20);

  const monthlySavings = hoursSaved * 4.33 * hourlyRate;
  const monthlyROI = monthlySavings - toolCost;
  const annualROI = monthlyROI * 12;
  const roiMultiple = toolCost > 0 ? (monthlySavings / toolCost).toFixed(1) : '0';

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8">
      <h3 className="mb-6 text-2xl font-bold text-gray-900">AI Tool ROI Calculator</h3>
      <p className="mb-8 text-gray-500">Estimate how much an AI tool is really worth to your business.</p>

      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-900">Hours Saved Per Week</label>
          <input
            type="range"
            min={1}
            max={20}
            value={hoursSaved}
            onChange={(e) => setHoursSaved(Number(e.target.value))}
            className="w-full accent-accent"
          />
          <div className="mt-1 text-center text-2xl font-bold text-[#4361ee]">{hoursSaved}h</div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-900">Your Hourly Rate ($)</label>
          <input
            type="range"
            min={15}
            max={200}
            step={5}
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Number(e.target.value))}
            className="w-full accent-accent"
          />
          <div className="mt-1 text-center text-2xl font-bold text-[#4361ee]">${hourlyRate}</div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-900">Monthly Tool Cost ($)</label>
          <input
            type="range"
            min={0}
            max={100}
            step={5}
            value={toolCost}
            onChange={(e) => setToolCost(Number(e.target.value))}
            className="w-full accent-accent"
          />
          <div className="mt-1 text-center text-2xl font-bold text-[#4361ee]">${toolCost}</div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-[#4361ee]-light p-4 text-center">
          <div className="text-sm font-medium text-gray-500">Monthly Value</div>
          <div className="text-2xl font-bold text-[#4361ee]">${monthlySavings.toLocaleString()}</div>
        </div>
        <div className="rounded-xl bg-green-50 p-4 text-center">
          <div className="text-sm font-medium text-gray-500">Annual Net ROI</div>
          <div className="text-2xl font-bold text-green-600">${annualROI.toLocaleString()}</div>
        </div>
        <div className="rounded-xl bg-gray-100 p-4 text-center">
          <div className="text-sm font-medium text-gray-500">ROI Multiple</div>
          <div className="text-2xl font-bold text-gray-900">{roiMultiple}x</div>
        </div>
      </div>
    </div>
  );
}
