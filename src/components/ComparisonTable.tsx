import type { AITool } from '@/data/tools';

export default function ComparisonTable({
  toolA,
  toolB,
  features,
}: {
  toolA: AITool;
  toolB: AITool;
  features: { feature: string; toolA: string; toolB: string }[];
}) {
  return (
    <div className="overflow-x-auto rounded-xl border">
      <table className="w-full">
        <thead>
          <tr className="bg-[#1a1a2e] text-white">
            <th className="px-6 py-4 text-left text-sm font-semibold">Feature</th>
            <th className="px-6 py-4 text-center text-sm font-semibold">{toolA.name}</th>
            <th className="px-6 py-4 text-center text-sm font-semibold">{toolB.name}</th>
          </tr>
        </thead>
        <tbody>
          {features.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.feature}</td>
              <td className="px-6 py-4 text-center text-sm text-gray-600">{row.toolA}</td>
              <td className="px-6 py-4 text-center text-sm text-gray-600">{row.toolB}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
