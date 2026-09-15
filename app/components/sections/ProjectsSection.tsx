'use client'

import Image from 'next/image'
import { projects } from '@/data/projects'
import { useLanguage } from '@/lib/context/LanguageContext'
import SectionHeader from '@/app/components/ui/SectionHeader'
import { ArrowRight } from 'lucide-react'

export default function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <section
      id="projects"
      aria-label={t('Dự án tiêu biểu', 'Featured Projects')}
      className="bg-background py-20 md:py-28 relative overflow-hidden transition-colors duration-300 border-t border-slate-200/70 dark:border-white/[0.06]"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full bg-blue-600/[0.03] dark:bg-blue-600/[0.05] blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge={t('Dự án tiêu biểu', 'Featured Portfolio')}
          title={t('Những gì chúng tôi đã xây dựng', 'What We Have Built')}
          subtitle={t(
            'Mỗi dự án là một giải pháp may đo — kết hợp thiết kế tinh tế và kiến trúc phần mềm chuẩn mực để tối ưu hóa hiệu quả kinh doanh.',
            'Each project is a tailored solution — combining refined UI/UX design with robust software architecture to maximize ROI.'
          )}
        />

        {/* ── Project Showcase Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 pb-12 items-stretch">
          {projects.map((project, i) => (
            <a
              key={project.id}
              href="#contact"
              className="group relative flex flex-col h-full rounded-2xl bg-white dark:bg-surface border border-slate-200/90 dark:border-white/[0.12] overflow-hidden shadow-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/50 hover:-translate-y-1.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label={t(`Xem Case Study: ${project.titleVi}`, `View Case Study: ${project.titleEn}`)}
            >
              {/* 1. Thumbnail image 16:9 aspect ratio with overflow-hidden & rounded-t-xl */}
              <div className="relative w-full aspect-video overflow-hidden rounded-t-xl bg-slate-100 dark:bg-slate-900 border-b border-slate-200/60 dark:border-white/[0.06]">
                <Image
                  src={project.image}
                  alt={t(project.titleVi, project.titleEn)}
                  fill
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  {...(i === 0 ? { priority: true } : { loading: 'lazy' })}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Category Badge overlay on image */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-[11px] font-semibold font-heading text-cyan-300 uppercase tracking-wider shadow-sm">
                  {t(project.categoryVi, project.categoryEn)}
                </div>
              </div>

              {/* 2. Card Content Body */}
              <div className="p-6 flex flex-col flex-1">
                {/* Project Title */}
                <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-1">
                  {t(project.titleVi, project.titleEn)}
                </h3>

                {/* Tech Stack Tags (pill format) positioned directly under the title */}
                <div className="flex flex-wrap gap-1.5 mt-3 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium px-2.5 py-1 rounded-full border border-blue-200/50 dark:border-blue-700/30 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Description (WCAG AA Contrast) */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 line-clamp-2">
                  {t(project.descVi, project.descEn)}
                </p>

                {/* 3. Bottom CTA Link: "Xem Case Study →" */}
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-600 dark:text-cyan-400 inline-flex items-center gap-1.5">
                    {t('Xem Case Study', 'View Case Study')}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300 ease-out" />
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    DANTECH Studio
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* ── Mid-Page CTA (Conversion Touchpoint) ── */}
        <div className="mt-4 pt-2 flex flex-col items-center justify-center text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-blue-600/10 dark:bg-blue-500/10 border border-blue-500/30 text-blue-700 dark:text-blue-400 font-semibold text-sm hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white hover:border-blue-600 shadow-sm hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group cursor-pointer"
          >
            <span>{t('Thảo luận về dự án của bạn', 'Discuss Your Project')}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  )
}
