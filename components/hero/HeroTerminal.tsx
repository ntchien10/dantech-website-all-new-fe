'use client'

import { Terminal, TypingAnimation, AnimatedSpan } from '@/components/ui/terminal'
import { useLanguage } from '@/lib/context/LanguageContext'

export default function HeroTerminal() {
  const { t } = useLanguage()

  return (
    <div className="relative w-full max-w-[540px] mx-auto group">
      {/* Ambient background soft glow for depth */}
      <div
        className="absolute -inset-2 sm:-inset-3 rounded-3xl bg-gradient-to-tr from-blue-600/25 via-cyan-500/20 to-indigo-600/20 blur-2xl opacity-75 dark:opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Decorative Outer Glass Border Wrap */}
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-slate-300/60 via-slate-400/20 to-slate-200/40 dark:from-white/15 dark:via-white/[0.04] dark:to-white/[0.08] shadow-2xl shadow-slate-900/20 dark:shadow-blue-500/5 backdrop-blur-xl overflow-hidden">
        <Terminal
          sequence={true}
          startOnView={true}
          className="bg-slate-900/95 dark:bg-[#0c0e14]/90 text-slate-100 border-0 shadow-2xl font-mono text-xs sm:text-[13px] leading-relaxed"
        >
          {/* Line 1: CLI Init Command with Typing Animation */}
          <div className="flex items-center gap-2 text-slate-200 font-semibold overflow-hidden">
            <span className="text-cyan-400 font-bold select-none">$</span>
            <TypingAnimation
              duration={38}
              className="text-white font-mono font-medium truncate"
            >
              dantech init --solution=&quot;web-ecosystem&quot;
            </TypingAnimation>
          </div>

          {/* Line 2: Infrastructure Analysis */}
          <AnimatedSpan delay={220} className="text-emerald-400 font-mono flex items-start sm:items-center gap-2 leading-relaxed break-words whitespace-normal">
            <span className="text-emerald-400 font-bold shrink-0 select-none">✔</span>
            <span className="break-words whitespace-normal">
              {t(
                'Đang phân tích hạ tầng doanh nghiệp... Hoàn tất (0.2s)',
                'Analyzing enterprise infrastructure... Complete (0.2s)'
              )}
            </span>
          </AnimatedSpan>

          {/* Line 3: Architecture Setup */}
          <AnimatedSpan delay={260} className="text-emerald-400 font-mono flex items-start sm:items-center gap-2 leading-relaxed break-words whitespace-normal">
            <span className="text-emerald-400 font-bold shrink-0 select-none">✔</span>
            <span className="break-words whitespace-normal">
              {t(
                'Thiết lập kiến trúc Cloud & Next.js Core... Sẵn sàng',
                'Configuring Cloud & Next.js Core architecture... Ready'
              )}
            </span>
          </AnimatedSpan>

          {/* Line 4: Performance & SEO audit */}
          <AnimatedSpan delay={260} className="text-emerald-400 font-mono flex items-start sm:items-center gap-2 leading-relaxed break-words whitespace-normal">
            <span className="text-emerald-400 font-bold shrink-0 select-none">✔</span>
            <span className="break-words whitespace-normal">
              {t(
                'Kiểm tra hiệu năng & SEO Score: 100/100',
                'Performance & SEO Score audit: 100/100'
              )}
            </span>
          </AnimatedSpan>

          {/* Line 5: Divider */}
          <AnimatedSpan delay={140} className="text-slate-600 dark:text-slate-600 select-none py-0.5 overflow-hidden">
            <span className="tracking-widest opacity-60 block truncate">--------------------------------------------------</span>
          </AnimatedSpan>

          {/* Line 6: Engine Greeting */}
          <AnimatedSpan delay={240} className="text-amber-300 dark:text-amber-200 font-mono font-semibold flex items-center gap-2 leading-relaxed break-words whitespace-normal">
            <span className="shrink-0">✨</span>
            <span className="break-words whitespace-normal">
              [DANTECH ENGINE]: {t('Chào mừng bạn!', 'Welcome aboard!')}
            </span>
          </AnimatedSpan>

          {/* Line 7: Value Proposition with Electric Cyan Glow */}
          <AnimatedSpan
            delay={280}
            className="text-cyan-300 font-mono font-medium leading-relaxed drop-shadow-[0_0_12px_rgba(6,182,212,0.45)] break-words whitespace-normal"
          >
            <span className="break-words whitespace-normal">
              {t('Sẵn sàng kiến tạo giải pháp số', 'Ready to engineer digital breakthroughs')}
            </span>
            <br />
            <span className="break-words whitespace-normal">
              {t('đột phá cùng doanh nghiệp.', 'tailored for your enterprise.')}
            </span>
          </AnimatedSpan>

          {/* Line 8: Ready cursor pulse */}
          <AnimatedSpan delay={320} className="text-slate-400 font-mono flex items-center gap-2 pt-1 text-[11px] sm:text-xs">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="text-emerald-400 font-medium shrink-0">status: active</span>
            <span className="text-slate-500 shrink-0">—</span>
            <span className="text-slate-400">ready for deployment</span>
            <span className="animate-pulse text-cyan-400 font-bold shrink-0">▋</span>
          </AnimatedSpan>
        </Terminal>
      </div>
    </div>
  )
}
