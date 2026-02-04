export default function PricingBadge({ pricing }: { pricing: { plan: string; price: string; period: string } }) {
  return (
    <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-700 border border-green-200">
      {pricing.price}<span className="text-green-500 font-normal">/{pricing.period}</span>
    </span>
  );
}
