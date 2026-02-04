export default function RatingStars({ rating, size = 'md' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClass = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-2xl' : 'text-lg';
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.3;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className={`flex items-center gap-0.5 ${sizeClass}`} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <span key={`full-${i}`} className="text-yellow-400">&#9733;</span>
      ))}
      {hasHalf && <span className="text-yellow-400">&#9733;</span>}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <span key={`empty-${i}`} className="text-gray-300">&#9733;</span>
      ))}
      <span className="ml-1.5 text-sm font-semibold text-gray-900">{rating.toFixed(1)}</span>
    </div>
  );
}
