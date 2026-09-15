'use client'

import { useEffect, useRef, useState } from 'react'
import { techCategories } from '@/data/technologies'
import { useLanguage } from '@/lib/context/LanguageContext'
import SectionHeader from '@/app/components/ui/SectionHeader'

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return { ref, visible }
}

export default function TechSection() {
  const { t } = useLanguage()
  const { ref, visible } = useReveal()

  return (
    <section
      id="tech"
      aria-label={t('Công nghệ', 'Technology')}
      className="bg-background py-20 md:py-28 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t('Công nghệ', 'Technology')}
          title={t('Nền tảng kỹ thuật hiện đại', 'Modern Technical Foundation')}
          subtitle={t(
            'Chúng tôi sử dụng các công nghệ được kiểm chứng, phù hợp với từng loại dự án và quy mô doanh nghiệp.',
            'We use proven technologies, matched to each project type and business scale.',
          )}
        />

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((cat, i) => (
            <div
              key={cat.id}
              className={`p-6 rounded-2xl bg-surface border border-slate-200/80 dark:border-white/[0.08] shadow-sm dark:shadow-none hover:border-blue-500/40 hover:bg-surface-2 transition-all duration-300 reveal ${visible ? 'is-visible' : ''} reveal-delay-${Math.min(i + 1, 4)}`}
            >
              <h3 className="font-heading font-semibold text-sm uppercase tracking-widest text-accent mb-5">
                {t(cat.labelVi, cat.labelEn)}
              </h3>
              <ul className="flex flex-col gap-3">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-secondary font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
