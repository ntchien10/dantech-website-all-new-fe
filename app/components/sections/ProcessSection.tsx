'use client'

import { processSteps } from '@/data/process'
import { useLanguage } from '@/lib/context/LanguageContext'
import SectionHeader from '@/app/components/ui/SectionHeader'
import { Timeline, type TimelineEntry } from '@/components/ui/timeline'
import { CheckCircle2 } from 'lucide-react'

const deliverables: Record<string, { vi: string[]; en: string[] }> = {
  '01': {
    vi: ['Bản phân tích yêu cầu kỹ thuật', 'Kiến trúc giải pháp đề xuất', 'Kế hoạch tiến độ & ngân sách'],
    en: ['Technical specification spec', 'Proposed architecture roadmap', 'Milestone & budget schedule'],
  },
  '02': {
    vi: ['Wireframe & Luồng trải nghiệm UX', 'Thiết kế giao diện UI Design System', 'Bản mẫu Prototype tương tác'],
    en: ['Wireframes & UX user journeys', 'UI Design System kit', 'Interactive clickable prototype'],
  },
  '03': {
    vi: ['Source code chuẩn Clean Architecture', 'Báo cáo tiến độ Sprint hàng tuần', 'Môi trường Staging xem thử'],
    en: ['Clean Architecture codebase', 'Weekly Sprint progress review', 'Live staging demo access'],
  },
  '04': {
    vi: ['Kiểm thử chức năng End-to-End', 'Đo đạc tốc độ & Core Web Vitals', 'Rà soát an ninh bảo mật'],
    en: ['Automated End-to-End QA', 'Core Web Vitals load auditing', 'Security vulnerability audit'],
  },
  '05': {
    vi: ['Cấu hình Production Cloud Server', 'Bàn giao Source Code & Bản quyền', 'Tài liệu hướng dẫn vận hành'],
    en: ['Production cloud provisioning', 'Full IP & source code transfer', 'Admin operating documentation'],
  },
  '06': {
    vi: ['Giám sát Uptime & An ninh 24/7', 'Sao lưu Database định kỳ tự động', 'Hỗ trợ xử lý kỹ thuật ưu tiên'],
    en: ['24/7 Uptime & threat watch', 'Automated database backups', 'Priority SLA technical support'],
  },
}

export default function ProcessSection() {
  const { t, lang } = useLanguage()

  const timelineData: TimelineEntry[] = processSteps.map((step) => {
    const items = deliverables[step.step] || { vi: [], en: [] }
    const deliverableList = lang === 'vi' ? items.vi : items.en

    return {
      step: `BƯỚC ${step.step}`,
      title: t(step.titleVi, step.titleEn),
      subtitle: t('Quy trình kiểm soát chất lượng cao', 'Strict Quality Assurance Pipeline'),
      content: (
        <div>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-5 font-normal">
            {t(step.descVi, step.descEn)}
          </p>

          <div className="pt-4 border-t border-slate-200/80 dark:border-white/[0.08]">
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-3 font-sans">
              {t('Kết quả bàn giao then chốt:', 'Key Deliverables:')}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {deliverableList.map((deliv, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2 rounded-lg bg-slate-100/90 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.05] text-xs text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span className="truncate">{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    }
  })

  return (
    <section
      id="process"
      aria-label={t('Quy trình làm việc', 'Work Process')}
      className="bg-background py-24 md:py-32 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-blue-600/[0.02] dark:bg-blue-600/[0.03] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-cyan-500/[0.02] dark:bg-cyan-500/[0.03] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge={t('Quy trình', 'Process')}
          title={t('Cách chúng tôi làm việc', 'How We Work')}
          subtitle={t(
            'Quy trình 6 bước được chuẩn hóa — đảm bảo mỗi dự án được thực hiện đúng tiến độ, đúng chất lượng và đúng ngân sách.',
            'A standardized 6-step process — ensuring every project is delivered on time, to quality, and within budget.'
          )}
        />

        {/* ── 21st.dev Interactive Timeline with Scroll Beam ── */}
        <div className="mt-8">
          <Timeline data={timelineData} />
        </div>
      </div>
    </section>
  )
}
