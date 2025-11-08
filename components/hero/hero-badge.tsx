interface HeroBadgeProps {
  text: string;
}

export function HeroBadge({ text }: HeroBadgeProps) {
  return (
    <div className="mb-6 md:mb-8 inline-block">
      <div className="bg-[#525b66] border border-slate-700/50 rounded-xl px-4 py-2 backdrop-blur-sm">
        <p className="text-[12px] md:text-[18px] font-medium text-white">
          {text}
        </p>
      </div>
    </div>
  );
}
