'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { navLinks, siteConfig } from '@/lib/config/site'
import { useLanguage } from '@/lib/context/LanguageContext'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const { lang, setLang, t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on outside click
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) document.addEventListener('click', onClickOutside)
    return () => document.removeEventListener('click', onClickOutside)
  }, [menuOpen])

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 dark:bg-[#08090C]/85 backdrop-blur-xl shadow-sm dark:shadow-xl dark:shadow-black/40 border-b border-slate-200/80 dark:border-white/[0.08]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="/"
            aria-label="DANTECH — Trang chủ"
            className="relative flex items-center h-full py-1 sm:py-1.5 overflow-visible flex-shrink-0"
          >
            {/* Light Mode Logo (màu nguyên bản) */}
            <Image
              src={siteConfig.logoPath}
              alt="DANTECH Technology Solutions"
              width={208}
              height={100}
              className="h-full w-auto object-contain max-h-[56px] md:max-h-[68px] dark:hidden transition-transform duration-200"
              style={{ height: '100%', width: 'auto' }}
              priority
            />
            {/* Dark Mode Logo (chữ DAN chuẩn tone Electric Blue/Cyan đồng bộ với TECH) */}
            <Image
              src={siteConfig.logoDarkPath}
              alt="DANTECH Technology Solutions"
              width={208}
              height={100}
              className="h-full w-auto object-contain max-h-[56px] md:max-h-[68px] hidden dark:block transition-all duration-200 drop-shadow-[0_0_12px_rgba(0,133,255,0.35)]"
              style={{ height: '100%', width: 'auto' }}
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav aria-label="Navigation chính" className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-100/80 dark:text-white/80 dark:hover:text-white dark:hover:bg-white/[0.06] transition-colors duration-150"
              >
                {t(link.labelVi, link.labelEn)}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme toggle */}
            <ThemeToggle />

            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
              aria-label={`Chuyển sang ${lang === 'vi' ? 'English' : 'Tiếng Việt'}`}
              className="text-xs font-semibold font-heading px-2.5 py-1.5 rounded-xl border border-slate-200/80 hover:border-slate-300 text-slate-700 hover:text-slate-900 bg-white/70 hover:bg-slate-100/80 dark:border-white/15 dark:hover:border-white/40 dark:text-white/80 dark:hover:text-white dark:bg-white/[0.03] transition-all duration-150 cursor-pointer shadow-sm"
            >
              {lang === 'vi' ? 'EN' : 'VI'}
            </button>

            <a
              href={siteConfig.phoneHref}
              className="text-sm font-semibold font-heading px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-md shadow-blue-500/20 border border-blue-400/30 transition-all duration-150 hover:scale-[1.02] active:scale-[0.98]"
            >
              {t('Liên hệ ngay', 'Contact Us')}
            </a>
          </div>

          {/* Mobile right items */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 dark:text-white/90 dark:hover:bg-white/10 transition-colors cursor-pointer"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                {menuOpen ? (
                  <path d="M5 5L17 17M17 5L5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                ) : (
                  <>
                    <line x1="2" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="2" y1="11" x2="20" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="2" y1="16" x2="20" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="navigation"
        aria-label="Navigation di động"
        className={`md:hidden bg-white/95 dark:bg-[#0F1117]/95 backdrop-blur-2xl border-b border-slate-200 dark:border-white/[0.08] overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-[500px] opacity-100 shadow-xl' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="px-4 py-3 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-100 dark:text-white/80 dark:hover:text-white dark:hover:bg-white/[0.06] rounded-lg transition-colors"
            >
              {t(link.labelVi, link.labelEn)}
            </a>
          ))}
          <div className="flex items-center gap-3 mt-3 pt-3 border-t border-slate-200 dark:border-white/[0.08]">
            <button
              onClick={() => { setLang(lang === 'vi' ? 'en' : 'vi'); setMenuOpen(false) }}
              className="text-xs font-semibold font-heading px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/15 text-slate-700 dark:text-white/80 hover:border-slate-300 dark:hover:border-white/40 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              {lang === 'vi' ? 'EN' : 'VI'}
            </button>
            <a
              href={siteConfig.phoneHref}
              onClick={handleNavClick}
              className="flex-1 text-center text-sm font-semibold font-heading px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:brightness-110 transition-all"
            >
              {t('Liên hệ ngay', 'Contact Us')}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
