'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/lib/context/LanguageContext'
import { TechIcon } from '@/app/components/ui/TechIcons'
import { Cpu, Layers, Database, Cloud, Sparkles } from 'lucide-react'

const allTechItems = [
  // Frontend
  { name: 'Next.js', category: 'frontend', desc: 'App Router & SSR' },
  { name: 'React', category: 'frontend', desc: 'Interactive UI Components' },
  { name: 'TypeScript', category: 'frontend', desc: 'Type-safe Reliability' },
  { name: 'Tailwind CSS', category: 'frontend', desc: 'Modern Design System' },
  { name: 'Three.js', category: 'frontend', desc: '3D Web Experiences' },
  // Backend
  { name: 'Java Spring Boot', category: 'backend', desc: 'Enterprise Architecture' },
  { name: 'Node.js', category: 'backend', desc: 'Scalable Microservices' },
  { name: 'Python', category: 'backend', desc: 'Data & High-perf Backend' },
  { name: 'Apache Kafka', category: 'backend', desc: 'Event Streaming & Messaging' },
  // Database
  { name: 'PostgreSQL', category: 'database', desc: 'Relational & Vector DB' },
  { name: 'Oracle', category: 'database', desc: 'Enterprise Relational DB' },
  { name: 'MySQL', category: 'database', desc: 'High-availability SQL' },
  { name: 'Redis', category: 'database', desc: 'In-memory Cache & Queue' },
  // DevOps & Cloud
  { name: 'AWS', category: 'devops', desc: 'Cloud Infrastructure' },
  { name: 'Docker', category: 'devops', desc: 'Containerization' },
  { name: 'Kubernetes', category: 'devops', desc: 'Orchestration & Scale' },
  { name: 'Vercel', category: 'devops', desc: 'Edge Deployment' },
  { name: 'Nginx', category: 'devops', desc: 'Reverse Proxy & Load Balancing' },
]

export default function TechSection() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState<string>('all')

  const filteredTech = activeTab === 'all'
    ? allTechItems
    : allTechItems.filter((item) => item.category === activeTab)

  const tabs = [
    { id: 'all', labelVi: 'Tất cả công nghệ', labelEn: 'All Technologies', icon: Sparkles },
    { id: 'frontend', labelVi: 'Frontend', labelEn: 'Frontend', icon: Layers },
    { id: 'backend', labelVi: 'Backend & API', labelEn: 'Backend & API', icon: Cpu },
    { id: 'database', labelVi: 'Cơ sở dữ liệu', labelEn: 'Database', icon: Database },
    { id: 'devops', labelVi: 'Cloud & DevOps', labelEn: 'Cloud & DevOps', icon: Cloud },
  ]

  return (
    <section
      id="tech"
      aria-label={t('Công nghệ', 'Technology')}
      className="bg-slate-50 dark:bg-slate-900/40 py-20 md:py-28 relative overflow-hidden transition-colors duration-300 border-t border-slate-200/80 dark:border-white/[0.06]"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-500/[0.04] dark:bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-cyan-500/[0.04] dark:bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200/80 dark:border-blue-500/20 bg-blue-50/80 dark:bg-blue-950/30 text-xs font-semibold text-blue-700 dark:text-blue-300 mb-4 shadow-sm font-heading">
            <Cpu className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
            <span>{t('Nền tảng kỹ thuật', 'Tech Stack & Architecture')}</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            {t('Công nghệ hiện đại cho ', 'Modern Tech Stack for ')}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-300 bg-clip-text text-transparent">
              {t('Hiệu năng Vượt trội', 'Peak Performance')}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {t(
              'Chúng tôi lựa chọn những công nghệ tiêu chuẩn toàn cầu, đảm bảo tốc độ, an ninh và khả năng mở rộng hàng triệu người dùng.',
              'We curate industry-standard technologies to ensure high throughput, enterprise security, and seamless scalability.'
            )}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium font-heading transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 border border-blue-600'
                    : 'bg-white dark:bg-[#0F172A] text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800 border border-slate-200/90 dark:border-white/[0.08] shadow-sm'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`} />
                <span>{t(tab.labelVi, tab.labelEn)}</span>
              </button>
            )
          })}
        </div>

        {/* Tech Icon Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className="group relative rounded-xl bg-white dark:bg-surface border border-slate-200/90 dark:border-white/[0.12] p-5 flex flex-col items-center justify-center text-center shadow-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-400 dark:hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Subtle top border glow on hover */}
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl" />

                {/* Tech Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-white/[0.06] flex items-center justify-center mb-3 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <TechIcon name={tech.name} className="w-7 h-7 transition-transform duration-300" />
                </div>

                {/* Tech Name Label */}
                <h3 className="font-heading font-semibold text-sm sm:text-base text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                  {tech.name}
                </h3>

                {/* Short capability descriptor (WCAG AA Contrast) */}
                <p className="text-[11px] text-slate-500 dark:text-slate-300 mt-1 line-clamp-1">
                  {tech.desc}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Trust Highlight */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 dark:border-white/[0.08] flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium text-slate-700 dark:text-slate-300">99.9% Uptime SLA</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="font-medium text-slate-700 dark:text-slate-300">Microservices & Clean Architecture</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500" />
            <span className="font-medium text-slate-700 dark:text-slate-300">CI/CD Automated Deployment</span>
          </div>
        </div>
      </div>
    </section>
  )
}
