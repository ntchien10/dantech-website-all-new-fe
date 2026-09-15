'use client'

import { PhoneCall } from 'lucide-react'
import { siteConfig } from '@/lib/config/site'
import { useLanguage } from '@/lib/context/LanguageContext'

export default function FloatingContact() {
  const { t } = useLanguage()

  const zaloUrl = siteConfig.zaloUrl || 'https://zalo.me/0981397246'
  const phoneHref = siteConfig.phoneHref || 'tel:+84981397246'

  return (
    <aside
      aria-label="Floating Contact Quick Actions"
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3.5 items-end pointer-events-auto"
    >
      {/* ── 1. Nút Zalo ── */}
      <div className="relative group flex items-center justify-end">
        {/* Tooltip hiển thị khi hover */}
        <div
          role="tooltip"
          className="absolute right-full mr-3 px-3.5 py-1.5 rounded-full bg-slate-900/90 dark:bg-white/95 text-white dark:text-slate-900 text-xs font-semibold whitespace-nowrap shadow-xl backdrop-blur-md opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 flex items-center gap-1.5"
        >
          <span>{t('Chat qua Zalo', 'Chat on Zalo')}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#0068FF]" />
        </div>

        {/* Nút chính */}
        <a
          href={zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat Zalo với DANTECH"
          className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#0068FF] text-white shadow-xl shadow-blue-500/30 hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer"
        >
          {/* Lớp sóng loang 1: Ping xa */}
          <span
            className="absolute inset-0 rounded-full bg-[#0068FF] opacity-60 animate-ping pointer-events-none"
            aria-hidden="true"
          />

          {/* Lớp sóng loang 2: Pulse nhẹ bao quanh */}
          <span
            className="absolute -inset-1 rounded-full bg-[#0068FF]/30 animate-pulse pointer-events-none"
            aria-hidden="true"
          />

          {/* Icon / Chữ Zalo */}
          <span className="relative z-10 font-extrabold text-[13px] tracking-tight select-none">
            Zalo
          </span>
        </a>
      </div>

      {/* ── 2. Nút Hotline ── */}
      <div className="relative group flex items-center justify-end">
        {/* Tooltip hiển thị khi hover */}
        <div
          role="tooltip"
          className="absolute right-full mr-3 px-3.5 py-1.5 rounded-full bg-slate-900/90 dark:bg-white/95 text-white dark:text-slate-900 text-xs font-semibold whitespace-nowrap shadow-xl backdrop-blur-md opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 flex items-center gap-1.5"
        >
          <span>{t('Gọi hotline ngay', 'Call Hotline')}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
        </div>

        {/* Nút chính */}
        <a
          href={phoneHref}
          aria-label={`Gọi hotline: ${siteConfig.phone}`}
          className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 via-blue-500 to-cyan-500 text-white shadow-xl shadow-blue-500/35 hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer"
        >
          {/* Lớp sóng loang 1: Ping xa */}
          <span
            className="absolute inset-0 rounded-full bg-blue-500 opacity-60 animate-ping pointer-events-none"
            aria-hidden="true"
          />

          {/* Lớp sóng loang 2: Pulse nhẹ bao quanh */}
          <span
            className="absolute -inset-1 rounded-full bg-cyan-400/30 animate-pulse pointer-events-none"
            aria-hidden="true"
          />

          {/* Icon PhoneCall */}
          <PhoneCall className="relative z-10 w-5 h-5 text-white animate-pulse" />
        </a>
      </div>
    </aside>
  )
}
