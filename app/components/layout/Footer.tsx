'use client'

import Image from 'next/image'
import { siteConfig } from '@/lib/config/site'
import { useLanguage } from '@/lib/context/LanguageContext'

const footerServices = [
  { vi: 'Thiết kế Website', en: 'Website Design' },
  { vi: 'Thương mại Điện tử', en: 'E-Commerce' },
  { vi: 'Phần mềm Quản lý', en: 'Business Software' },
  { vi: 'Ứng dụng Web', en: 'Web Applications' },
  { vi: 'Vận hành & Bảo trì', en: 'Maintenance' },
]

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-100 dark:bg-[#08090C] text-slate-800 dark:text-white border-t border-slate-200 dark:border-white/[0.08] transition-colors duration-300" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-14 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src={siteConfig.logoPath}
              alt="DANTECH Technology Solutions"
              width={150}
              height={42}
              className="h-10 w-auto mb-5 dark:hidden"
            />
            <Image
              src={siteConfig.logoDarkPath}
              alt="DANTECH Technology Solutions"
              width={150}
              height={42}
              className="h-10 w-auto mb-5 hidden dark:block drop-shadow-[0_0_10px_rgba(0,133,255,0.3)]"
            />
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 max-w-xs">
              {t(
                'Đồng hành cùng doanh nghiệp trong hành trình chuyển đổi số toàn diện.',
                'Partnering with businesses on their complete digital transformation journey.',
              )}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DANTECH Facebook"
                className="w-9 h-9 rounded-lg bg-slate-200/80 hover:bg-blue-600 hover:text-white dark:bg-white/8 dark:hover:bg-blue-600 text-slate-700 dark:text-white flex items-center justify-center transition-colors duration-150"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href={siteConfig.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DANTECH Zalo"
                className="w-9 h-9 rounded-lg bg-slate-200/80 hover:bg-blue-600 hover:text-white dark:bg-white/8 dark:hover:bg-blue-600 text-slate-700 dark:text-white flex items-center justify-center transition-colors duration-150"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold font-heading uppercase tracking-widest text-slate-400 dark:text-white/50 mb-5">
              {t('Dịch vụ', 'Services')}
            </h3>
            <ul className="flex flex-col gap-3">
              {footerServices.map((s) => (
                <li key={s.vi}>
                  <a
                    href="#services"
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors duration-150"
                  >
                    {t(s.vi, s.en)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold font-heading uppercase tracking-widest text-slate-400 dark:text-white/50 mb-5">
              {t('Công ty', 'Company')}
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { href: '#about', vi: 'Về DANTECH', en: 'About Us' },
                { href: '#projects', vi: 'Dự án', en: 'Projects' },
                { href: '#process', vi: 'Quy trình', en: 'Process' },
                { href: '#why', vi: 'Tại sao chọn chúng tôi', en: 'Why Choose Us' },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors duration-150">
                    {t(l.vi, l.en)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold font-heading uppercase tracking-widest text-slate-400 dark:text-white/50 mb-5">
              {t('Liên hệ', 'Contact')}
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.2 2 2 0 012.03 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="leading-relaxed">{t(siteConfig.address, siteConfig.addressEn)}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200 dark:border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 dark:text-white/40">
            © {year} {siteConfig.fullName}. {t('Bảo lưu mọi quyền.', 'All rights reserved.')}
          </p>
          <p className="text-xs text-slate-400 dark:text-white/30">
            {t('Thiết kế & phát triển bởi DANTECH', 'Designed & developed by DANTECH')}
          </p>
        </div>
      </div>
    </footer>
  )
}
