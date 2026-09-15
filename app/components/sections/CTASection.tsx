'use client'

import { useLanguage } from '@/lib/context/LanguageContext'
import { siteConfig } from '@/lib/config/site'
import { motion } from 'framer-motion'
import { Phone, Mail, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Clock } from 'lucide-react'

export default function CTASection() {
  const { t } = useLanguage()

  return (
    <section
      id="contact"
      aria-label={t('Liên hệ hợp tác', 'Get in Touch')}
      className="bg-background py-16 sm:py-24 relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── High-Conversion Hero Banner Container ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-900 dark:from-blue-900 dark:via-blue-800 dark:to-indigo-950 p-8 sm:p-12 lg:p-16 text-center text-white shadow-2xl shadow-blue-600/20 border border-blue-400/30"
        >
          {/* Digital Dot Grid Pattern Overlay */}
          <div
            className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"
            aria-hidden="true"
          />

          {/* Glowing Gradient Ambient Lights inside banner */}
          <div
            className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-cyan-400/20 blur-[90px] pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-indigo-500/30 blur-[90px] pointer-events-none"
            aria-hidden="true"
          />

          {/* Content Wrapper */}
          <div className="relative z-10 max-w-3xl mx-auto">
            {/* High-contrast Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-md mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span className="text-xs font-semibold uppercase tracking-widest text-cyan-100 font-heading">
                {t('Khởi đầu Chuyển đổi Số cùng DANTECH', 'Start Your Digital Transformation')}
              </span>
            </div>

            {/* High-Contrast Main Heading */}
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-6">
              {t('Sẵn sàng kiến tạo ', 'Ready to Build Your ')}
              <span className="bg-gradient-to-r from-cyan-200 via-white to-blue-200 bg-clip-text text-transparent">
                {t('Dự án Đột phá', 'Next Innovation')}
              </span>
              {t(' cùng chúng tôi?', '?')}
            </h2>

            {/* High-Contrast Subtitle */}
            <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              {t(
                'Kết nối ngay cùng đội ngũ chuyên gia công nghệ DANTECH để nhận tư vấn kiến trúc giải pháp miễn phí và lộ trình triển khai tối ưu ngân sách.',
                'Connect directly with DANTECH solution engineers for a free technical blueprint and a cost-optimized execution roadmap.'
              )}
            </p>

            {/* High-Conversion CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
              {/* Primary Action: White button with rich blue text */}
              <a
                href={siteConfig.phoneHref}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-heading font-semibold text-sm sm:text-base bg-white text-blue-700 hover:bg-slate-100 shadow-xl shadow-blue-950/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <Phone className="w-4 h-4 text-blue-700" />
                <span>
                  {t('Gọi Hotline:', 'Call Hotline:')} {siteConfig.phone}
                </span>
                <ArrowRight className="w-4 h-4 text-blue-700 group-hover:translate-x-1 transition-transform duration-200" />
              </a>

              {/* Secondary Action: Glass border button */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-heading font-semibold text-sm sm:text-base hover:border-white/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md"
              >
                <Mail className="w-4 h-4 text-white" />
                <span>{siteConfig.email}</span>
              </a>
            </div>

            {/* Trust Proof Points */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-6 border-t border-white/15 text-xs sm:text-sm text-blue-100 font-sans">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0" />
                <span>{t('Tư vấn kỹ thuật 1:1 miễn phí', '1-on-1 Free Tech Consult')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-300 shrink-0" />
                <span>{t('Phản hồi báo giá trong 24h', '24h Fast Proposal Response')}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-300 shrink-0" />
                <span>{t('Cam kết bảo mật dự án (NDA)', 'Strict NDA & IP Protection')}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
