'use client'

import { useEffect, useRef, useState } from 'react'
import { siteConfig } from '@/lib/config/site'
import { useLanguage } from '@/lib/context/LanguageContext'

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return { ref, inView }
}

export default function StatsSection() {
  const { t } = useLanguage()
  const { ref, inView } = useInView(0.2)

  return (
    <section aria-label={t('Chỉ số', 'Statistics')} className="bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {siteConfig.stats.map((stat, i) => (
            <div
              key={stat.value}
              className={`text-center reveal ${inView ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="font-heading font-bold text-4xl md:text-5xl text-primary tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted font-medium">
                {t(stat.labelVi, stat.labelEn)}
              </div>
              <div
                className={`mx-auto mt-3 h-0.5 bg-accent rounded-full transition-all duration-700 ${
                  inView ? 'w-10' : 'w-0'
                }`}
                style={{ transitionDelay: `${i * 0.08 + 0.3}s` }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
