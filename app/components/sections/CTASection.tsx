'use client'

import { useLanguage } from '@/lib/context/LanguageContext'
import { siteConfig } from '@/lib/config/site'
import { LampContainer } from '@/components/ui/lamp'
import { motion } from 'framer-motion'
import { Phone, Mail, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'

export default function CTASection() {
  const { t } = useLanguage()

  return (
    <section
      id="contact"
      aria-label={t('Liên hệ hợp tác', 'Get in Touch')}
      className="bg-background relative overflow-hidden pt-12 transition-colors duration-300"
    >
      {/* ── 21st.dev Lamp Effect Container ── */}
      <LampContainer className="pt-24 sm:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="flex flex-col items-center text-center"
        >
          {/* Glowing Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md mb-6 shadow-lg shadow-cyan-500/10">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-700 dark:text-cyan-300 font-heading">
              {t('Khởi đầu Hành trình Chuyển đổi Số', 'Start Your Digital Journey')}
            </span>
          </div>

          {/* Heading with Extended Horizontal Elliptical Radial Glow */}
          <div className="relative w-full flex items-center justify-center">
            {/* Ultra-wide Extended Horizontal Glow Background */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] max-w-[95vw] h-[320px] bg-gradient-to-r from-blue-600/0 via-blue-500/25 to-blue-600/0 rounded-[100%] blur-[120px] pointer-events-none -z-10"
            />

            <h2 className="relative z-10 font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 dark:text-white leading-tight tracking-tight mb-6 max-w-3xl">
              {t('Sẵn sàng kiến tạo ', 'Ready to Build Your ')}
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-500 dark:from-cyan-300 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                {t('Dự án Công nghệ Đột phá', 'Next-Gen Technology')}
              </span>
              {t('?', '?')}
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300/90 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
            {t(
              'Kết nối ngay cùng đội ngũ kỹ sư giải pháp DANTECH để nhận tư vấn kiến trúc công nghệ miễn phí và lộ trình triển khai chi tiết cho doanh nghiệp của bạn.',
              'Connect with DANTECH solution architects for a free technical consultation and a tailored engineering roadmap for your business.'
            )}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
            {/* Primary Phone / Call CTA */}
            <a
              href={siteConfig.phoneHref}
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-heading font-semibold text-sm text-white overflow-hidden bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-500 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              <Phone className="w-4 h-4 text-cyan-200 relative z-10" />
              <span className="relative z-10">
                {t('Gọi Hotline:', 'Call Us:')} {siteConfig.phone}
              </span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            {/* Email CTA */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl border border-slate-300 dark:border-white/20 bg-white/90 dark:bg-white/[0.04] backdrop-blur-md text-slate-800 dark:text-white font-heading font-semibold text-sm hover:bg-slate-50 dark:hover:bg-white/[0.08] hover:border-cyan-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md shadow-slate-200/50 dark:shadow-lg dark:shadow-black/40"
            >
              <Mail className="w-4 h-4 text-slate-600 dark:text-slate-300" />
              <span>{siteConfig.email}</span>
            </a>
          </div>

          {/* Social Proof Trust Points */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-4 text-xs text-slate-600 dark:text-slate-400 font-sans">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>{t('Tư vấn kỹ thuật 1:1 miễn phí', '1-on-1 Free Technical Consult')}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>{t('Phản hồi báo giá trong 24h', '24h Fast Proposal Turnaround')}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>{t('Bảo mật ý tưởng dự án (NDA)', 'Strict NDA & IP Protection')}</span>
            </div>
          </div>
        </motion.div>
      </LampContainer>
    </section>
  )
}
