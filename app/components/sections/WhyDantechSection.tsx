'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import Image from 'next/image'
import { whyReasons } from '@/data/technologies'
import { teamMembers } from '@/data/team'
import { useLanguage } from '@/lib/context/LanguageContext'

const icons: Record<string, ReactNode> = {
  users: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  'check-circle': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  zap: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  shield: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
}

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

export default function WhyDantechSection() {
  const { t } = useLanguage()
  const { ref, visible } = useReveal()

  return (
    <section
      id="about"
      aria-label={t('Về DANTECH — Tại sao chọn chúng tôi & Đội ngũ', 'About DANTECH — Why Choose Us & Core Team')}
      className="bg-background py-20 md:py-28 transition-colors duration-300 relative border-t border-slate-200/70 dark:border-white/[0.06]"
    >
      <div id="why" className="absolute -top-20" />
      <div id="team" className="absolute -top-20" />
      <div id="about-section" className="absolute -top-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. KHỐI CŨ GIỮ NGUYÊN 100% BỐ CỤC 2 CỘT */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Cột trái: Nội dung text + CTA */}
          <div className="mb-12 lg:mb-0">
            <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full text-blue-700 dark:text-blue-300 bg-blue-500/10 border border-blue-500/20 font-heading">
              {t('Về chúng tôi', 'About Us')}
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[2.5rem] text-slate-900 dark:text-white leading-tight tracking-tight mb-6">
              {t(
                'Cam kết chất lượng\ntừ dòng code đầu tiên',
                'Quality commitment\nfrom the first line of code',
              ).split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-lg">
              {t(
                'Không chỉ xây dựng phần mềm — DANTECH xây dựng mối quan hệ đối tác dài hạn, đồng hành cùng doanh nghiệp qua từng giai đoạn phát triển.',
                'Not just building software — DANTECH builds long-term partnerships, accompanying businesses through every stage of growth.',
              )}
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold font-heading text-blue-600 dark:text-cyan-400 hover:underline underline-offset-4 transition-colors"
            >
              {t('Bắt đầu hợp tác', 'Start collaboration')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Cột phải: 4 Cards cam kết */}
          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whyReasons.map((reason, i) => (
              <div
                key={reason.icon}
                className={`p-6 rounded-2xl bg-surface border border-slate-200/90 dark:border-white/[0.12] shadow-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-blue-500/40 hover:bg-surface-2 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-0.5 transition-all duration-300 reveal ${visible ? 'is-visible' : ''} reveal-delay-${Math.min(i + 1, 4)}`}
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                  {icons[reason.icon]}
                </div>
                <h3 className="font-heading font-semibold text-base text-slate-900 dark:text-white mb-2">
                  {t(reason.titleVi, reason.titleEn)}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t(reason.descVi, reason.descEn)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. DẢI DANH SÁCH NHÂN SỰ (NẰM NGAY BÊN DƯỚI, KHÔNG CÓ TIÊU ĐỀ THỪA) */}
        <div className="mt-10 sm:mt-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group relative rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-white/[0.12] bg-surface hover:bg-surface-2 p-5 sm:p-6 flex flex-col items-center text-center shadow-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/40 hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Viền sáng nhẹ trên đỉnh card khi hover */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl sm:rounded-t-3xl" />

                {/* Ảnh đại diện: Image Next.js, rounded-full, kích thước cố định w-28 h-28 */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-blue-600 via-cyan-400 to-blue-500 mx-auto mb-4 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Tên: Font đậm */}
                <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {member.name}
                </h3>

                {/* Chức danh: Font nhỏ hơn, màu sắc nhẹ hơn (text-slate-600 dark:text-slate-300) */}
                <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
