import { tools } from '@/data/tools';

export default function TrustBadges() {
  const badges = [
    { icon: '📊', label: `${tools.length} AI Tools Reviewed` },
    { icon: '🔄', label: 'Updated Monthly' },
    { icon: '🛡️', label: 'No Sponsored Rankings' },
    { icon: '✅', label: 'Real-World Tested' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-10">
      {badges.map((badge) => (
        <div key={badge.label} className="flex items-center gap-2 text-sm font-medium text-gray-500">
          <span className="text-xl">{badge.icon}</span>
          <span>{badge.label}</span>
        </div>
      ))}
    </div>
  );
}
