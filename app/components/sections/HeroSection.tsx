'use client'

import { motion, type Variants } from 'framer-motion'
import { ArrowRight, Sparkles, TrendingUp, Zap, FolderGit2, Star } from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import { BackgroundBeams } from '@/components/ui/background-beams'
import HeroTerminal from '@/components/hero/HeroTerminal'

const statsData = [
  {
    value: '98%',
    labelVi: 'Hiệu suất tối ưu',
    labelEn: 'Optimal Performance',
    subVi: 'Tốc độ tải trang chuẩn Google PageSpeed',
    subEn: 'Google PageSpeed verified speed',
    icon: Zap,
    color: 'text-blue-400',
  },
  {
    value: '+120%',
    labelVi: 'Tăng trưởng chuyển đổi',
    labelEn: 'Conversion Growth',
    subVi: 'Tối ưu hoá hành trình trải nghiệm người dùng',
    subEn: 'UX flow & customer journey optimization',
    icon: TrendingUp,
    color: 'text-cyan-400',
  },
  {
    value: '50+',
    labelVi: 'Dự án bàn giao',
    labelEn: 'Delivered Projects',
    subVi: 'Đa dạng quy mô cho doanh nghiệp',
    subEn: 'Enterprise & SME digital solutions',
    icon: FolderGit2,
    color: 'text-indigo-400',
  },
  {
    value: '5.0★',
    labelVi: 'Khách hàng hài lòng',
    labelEn: 'Client Satisfaction',
    subVi: 'Đồng hành hỗ trợ kỹ thuật 24/7',
    subEn: '24/7 dedicated engineering support',
    icon: Star,
    color: 'text-amber-400',
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const statContainerVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1,
      delayChildren: 0.35,
    },
  },
}

const statItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section
      aria-label="Hero"
      className="relative bg-background overflow-hidden transition-colors duration-300 h-screen max-h-screen flex flex-col justify-between pt-20 pb-4 md:pb-6"
    >
      {/* ── 21st.dev Background Beams ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <BackgroundBeams className="z-0 opacity-30 dark:opacity-60" />

        {/* Ambient atmospheric vignettes */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* ── In-flow Hero Container ── */}
      <div className="relative z-10 w-full flex-1 flex flex-col justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* ── Cụm giữa: Text + Terminal ── */}
        <div className="flex-1 flex items-center w-full my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
            {/* Cột trái: Nội dung */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 flex flex-col items-start text-left w-full"
            >
              {/* 1. Pill Badge */}
              <motion.div variants={itemVariants} className="mb-3 sm:mb-4 inline-block">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200/60 dark:border-blue-500/20 bg-blue-50/50 dark:bg-blue-950/30 text-xs font-semibold text-blue-700 dark:text-blue-300 backdrop-blur-md shadow-sm hover:border-blue-500/40 transition-colors">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="tracking-wide font-sans">
                    {t('Công ty TNHH Giải pháp công nghệ DANTECH', 'DANTECH Technology Solutions Co., Ltd.')}
                  </span>
                </div>
              </motion.div>

              {/* 2. Tiêu đề H1: Responsive font linh hoạt */}
              <motion.h1
                variants={itemVariants}
                className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight text-slate-900 dark:text-white"
              >
                <span>{t('Kiến tạo', 'Crafting')}</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 dark:from-blue-400 dark:via-cyan-300 dark:to-blue-500 bg-clip-text text-transparent inline-block">
                  {t('Thành công Số', 'Digital Success')}
                </span>
                <br />
                <span>{t('của Doanh nghiệp', 'for Your Enterprise')}</span>
              </motion.h1>

              {/* 3. Đoạn mô tả */}
              <motion.p
                variants={itemVariants}
                className="text-sm sm:text-base lg:text-lg max-w-xl text-slate-600 dark:text-slate-400 mt-3 sm:mt-5 leading-relaxed font-normal"
              >
                {t(
                  'DANTECH đồng hành cùng doanh nghiệp trong hành trình chuyển đổi số — từ website thương hiệu, ứng dụng web hiệu năng cao đến hệ sinh thái phần mềm quản lý toàn diện.',
                  'DANTECH partners with businesses on their digital transformation journey — from high-impact brand websites to comprehensive cloud management ecosystems.',
                )}
              </motion.p>

              {/* 4. Cụm nút CTA */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-3 sm:gap-4 mt-5 sm:mt-7 w-full sm:w-auto"
              >
                <a
                  href="#contact"
                  className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-sans font-semibold text-sm text-white overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/45 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                  <span className="relative z-10 flex items-center gap-2">
                    {t('Bắt đầu dự án ngay', 'Start Your Project')}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </a>

                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-sans font-semibold text-sm text-slate-800 dark:text-white/90 border border-slate-300 dark:border-white/15 bg-white/80 dark:bg-white/[0.04] backdrop-blur-md hover:bg-slate-100 dark:hover:bg-white/[0.09] hover:border-slate-400 dark:hover:border-white/30 hover:text-slate-900 dark:hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-sm dark:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  {t('Khám phá dự án', 'Explore Projects')}
                </a>
              </motion.div>
            </motion.div>

            {/* Cột phải: Terminal */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-5 w-full flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-[540px]">
                <HeroTerminal />
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Dải Thống kê (Stats Strip) ── */}
        <motion.div
          variants={statContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full mt-auto mb-2 sm:mb-4"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/60 dark:bg-[#0f1117]/60 backdrop-blur-md shadow-sm">
            {statsData.map((stat) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.value}
                  variants={statItemVariants}
                  className="flex flex-col items-center sm:items-start text-center sm:text-left"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="p-1 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.06]">
                      <Icon className={`w-3.5 h-3.5 ${stat.color}`} />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium font-sans">
                      {t(stat.labelVi, stat.labelEn)}
                    </span>
                  </div>

                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-mono">
                    <span className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-600 dark:from-white dark:via-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                  </div>

                  <p className="hidden md:block text-xs text-slate-500 dark:text-[#94A3B8]/80 leading-relaxed mt-0.5">
                    {t(stat.subVi, stat.subEn)}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
