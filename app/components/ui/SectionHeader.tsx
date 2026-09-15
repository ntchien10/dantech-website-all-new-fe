interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeader({ badge, title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      {badge && (
        <span
          className="inline-flex items-center mb-4 text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full font-heading text-blue-600 dark:text-blue-300 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 shadow-sm"
        >
          {badge}
        </span>
      )}
      <h2
        className="font-heading font-bold text-3xl md:text-4xl lg:text-[2.6rem] leading-tight tracking-tight mb-4 text-slate-900 dark:text-white"
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''} text-slate-600 dark:text-[#94A3B8]`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
