export default function AffiliateButton({
  url,
  name,
  variant = 'primary',
  size = 'md',
  className = '',
}: {
  url: string;
  name: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const sizeClass = size === 'sm' ? 'px-4 py-2 text-sm' : size === 'lg' ? 'px-8 py-4 text-lg' : 'px-6 py-3 text-base';
  const variantClass =
    variant === 'primary'
      ? 'bg-[#4361ee] text-white hover:bg-[#3651d4] shadow-md hover:shadow-lg'
      : 'bg-[#1a1a2e] text-white hover:bg-[#2a2a4e]';

  return (
    <a
      href={url}
      target="_blank"
      rel="nofollow sponsored noopener"
      className={`inline-flex items-center justify-center font-semibold rounded-lg transition-all ${sizeClass} ${variantClass} ${className}`}
    >
      {name}
      <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  );
}
