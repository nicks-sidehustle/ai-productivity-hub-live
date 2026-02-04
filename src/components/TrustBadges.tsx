export default function TrustBadges() {
  const badges = [
    { icon: '\ud83d\udcca', label: '50+ Tools Reviewed' },
    { icon: '\ud83d\udd04', label: 'Updated Monthly' },
    { icon: '\ud83d\udee1\ufe0f', label: 'No Sponsored Rankings' },
    { icon: '\u2705', label: 'Real-World Tested' },
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
