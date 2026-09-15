'use client'

import { useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { processSteps } from '@/data/process'
import { useLanguage } from '@/lib/context/LanguageContext'
import SectionHeader from '@/app/components/ui/SectionHeader'
import {
  Search,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
  Headphones,
} from 'lucide-react'

const stepIcons = [Search, Palette, Code2, ShieldCheck, Rocket, Headphones]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
}

export default function ProcessSection() {
  const { t } = useLanguage()
  const [activeStep, setActiveStep] = useState<number>(0)

  return (
    <section
      id="process"
      aria-label={t('Quy trình làm việc', 'Work Process')}
      className="bg-background py-20 md:py-28 relative overflow-hidden transition-colors duration-300 border-t border-slate-200/70 dark:border-white/[0.06]"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-blue-600/[0.04] dark:bg-blue-600/[0.05] blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-cyan-500/[0.04] dark:bg-cyan-500/[0.05] blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge={t('Quy trình', 'Process')}
          title={t('Cách chúng tôi làm việc', 'How We Work')}
          subtitle={t(
            'Quy trình 6 bước chuẩn hóa — đảm bảo dự án hoàn thành đúng tiến độ, tối ưu chi phí và bàn giao chất lượng cao.',
            'A standardized 6-step process — delivering on schedule, optimizing cost, and ensuring enterprise-grade quality.'
          )}
        />

        {/* ── DESKTOP HORIZONTAL STEPPER TIMELINE (Visible on lg/xl) ── */}
        <div className="hidden lg:block mt-12 mb-10">
          <div className="relative">
            {/* Continuous Horizontal Connector Track (Exact center of col 1 to center of col 6) */}
            <div
              className="absolute top-5 left-[calc(100%/12)] right-[calc(100%/12)] h-0.5 bg-slate-200 dark:bg-slate-800 pointer-events-none z-0"
              aria-hidden="true"
            >
              {/* Active highlight line up to current hovered step */}
              <div
                className="h-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 transition-all duration-300 ease-out shadow-[0_0_12px_rgba(37,99,235,0.5)]"
                style={{ width: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
              />
            </div>

            {/* Stepper Node Indicators */}
            <div className="grid grid-cols-6 gap-4 text-center relative z-10">
              {processSteps.map((step, idx) => {
                const isActive = activeStep === idx
                const isPassed = idx <= activeStep

                return (
                  <button
                    key={step.step}
                    onClick={() => setActiveStep(idx)}
                    onMouseEnter={() => setActiveStep(idx)}
                    onFocus={() => setActiveStep(idx)}
                    className="flex flex-col items-center group cursor-pointer focus:outline-none"
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-xs transition-all duration-300 ${
                        isPassed
                          ? isActive
                            ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)] ring-4 ring-blue-100 dark:ring-blue-950 scale-110'
                            : 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)] scale-100'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      {step.step}
                    </div>
                    <span
                      className={`mt-2 text-xs font-semibold font-heading transition-colors line-clamp-1 ${
                        isActive
                          ? 'text-blue-600 dark:text-cyan-400'
                          : isPassed
                          ? 'text-slate-800 dark:text-slate-200'
                          : 'text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200'
                      }`}
                    >
                      {t(step.titleVi, step.titleEn)}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* ── RESPONSIVE PROCESS CARDS GRID (1 col mobile -> 2 cols sm -> 3 cols lg -> 6 cols xl) ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5 mt-8 lg:mt-0"
        >
          {processSteps.map((step, idx) => {
            const Icon = stepIcons[idx] || Search
            const isActive = activeStep === idx

            return (
              <motion.div
                key={step.step}
                variants={itemVariants}
                onClick={() => setActiveStep(idx)}
                onMouseEnter={() => setActiveStep(idx)}
                className={`group relative rounded-2xl p-5 sm:p-6 border flex flex-col justify-between h-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-white dark:bg-[#0F172A] border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.15)] ring-1 ring-blue-500/40 -translate-y-1'
                    : 'bg-white/80 dark:bg-surface border-slate-200/90 dark:border-white/[0.12] shadow-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-blue-400 dark:hover:border-blue-500/50 hover:bg-white dark:hover:bg-surface-2 hover:-translate-y-0.5'
                }`}
              >
                <div>
                  {/* Icon SVG minh họa gọn gàng ở header */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 shadow-sm ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-105'
                          : 'bg-blue-50 dark:bg-white/[0.06] border border-blue-100 dark:border-white/[0.1] text-blue-600 dark:text-cyan-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3
                    className={`font-heading font-bold text-base mb-2.5 transition-colors ${
                      isActive
                        ? 'text-blue-600 dark:text-cyan-400'
                        : 'text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400'
                    }`}
                  >
                    {t(step.titleVi, step.titleEn)}
                  </h3>

                  {/* Step Description: Display full 3-4 natural lines (No line-clamp) */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {t(step.descVi, step.descEn)}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
