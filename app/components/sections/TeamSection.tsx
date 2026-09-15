'use client'

import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import { Users } from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import { teamMembers } from '@/data/team'

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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
}

export default function TeamSection() {
  const { t } = useLanguage()

  return (
    <section
      id="team"
      aria-label={t('Đội ngũ chuyên gia nòng cốt', 'Core Technology Experts')}
      className="py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-colors duration-300"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200/80 dark:border-blue-500/20 bg-blue-50/60 dark:bg-blue-950/30 text-xs font-semibold text-blue-700 dark:text-blue-300 mb-4 shadow-sm font-heading">
          <Users className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          <span>{t('Đội ngũ DANTECH', 'The DANTECH Team')}</span>
        </div>
      </div>

      {/* Grid Danh sách thành viên */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8"
      >
        {teamMembers.map((member, index) => {
          return (
            <motion.div
              key={member.name}
              variants={cardVariants}
              className="group relative rounded-2xl sm:rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-[#0f1117]/80 backdrop-blur-md p-5 sm:p-6 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/40 hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Viền sáng nhẹ trên đỉnh card khi hover */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl sm:rounded-t-3xl" />

              {/* Ảnh đại diện: Component <Image /> Next.js, rounded-full, w-28 h-28 */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-blue-600 via-cyan-400 to-blue-500 mx-auto mb-4 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={112}
                    height={112}
                    priority={index < 3}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Tên nhân sự: Font đậm, kích thước vừa phải, căn giữa */}
              <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                {member.name}
              </h3>

              {/* Chức danh / Nơi công tác: Font nhỏ hơn, màu sắc nhẹ hơn (text-slate-600) */}
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                {member.role}
              </p>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
