'use client'

import Image from 'next/image'
import { projects } from '@/data/projects'
import { useLanguage } from '@/lib/context/LanguageContext'
import SectionHeader from '@/app/components/ui/SectionHeader'
import { CardSpotlight } from '@/components/ui/card-spotlight'
import { ArrowUpRight } from 'lucide-react'

export default function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <section
      id="projects"
      aria-label={t('Dự án tiêu biểu', 'Featured Projects')}
      className="bg-background py-24 md:py-32 relative overflow-hidden transition-colors duration-300"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full bg-blue-600/[0.03] dark:bg-blue-600/[0.05] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge={t('Dự án', 'Projects')}
          title={t('Những gì chúng tôi đã xây dựng', 'What We Have Built')}
          subtitle={t(
            'Mỗi dự án là một giải pháp tùy chỉnh — được thiết kế và phát triển để đáp ứng mục tiêu kinh doanh thực tế.',
            'Each project is a custom solution — designed and developed to meet real business goals.'
          )}
        />

        {/* ── Project Showcase Cards (Smooth Zoom & Card Elevation) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 pb-12 items-stretch">
          {projects.map((project, i) => (
            <a
              key={project.id}
              href="#contact"
              className="block h-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl"
              aria-label={t(`Xem chi tiết: ${project.titleVi}`, `Explore: ${project.titleEn}`)}
            >
              <CardSpotlight className="h-full">
                {/* 1. Image Mockup Container with Smooth Zoom */}
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-white/[0.08] mb-5">
                  <Image
                    src={project.image}
                    alt={t(project.titleVi, project.titleEn)}
                    fill
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    {...(i === 0 ? { priority: true } : { loading: 'lazy' })}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 dark:from-[#0F1117]/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* 2. Category & Action Icon */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-semibold font-heading uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                    {t(project.categoryVi, project.categoryEn)}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-cyan-400 group-hover:border-blue-400/40 transition-colors">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* 3. Title */}
                <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-2.5 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-1">
                  {t(project.titleVi, project.titleEn)}
                </h3>

                {/* 4. Description */}
                <p className="text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed mb-6 line-clamp-3">
                  {t(project.descVi, project.descEn)}
                </p>

                {/* 5. Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-200/80 dark:border-white/[0.06]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardSpotlight>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
