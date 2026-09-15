'use client'

import { useLanguage } from '@/lib/context/LanguageContext'
import SectionHeader from '@/app/components/ui/SectionHeader'
import { BentoGrid, BentoCard } from '@/components/ui/bento-grid'
import {
  Monitor,
  ShoppingCart,
  Database,
  Code2,
  Settings2,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Sparkles,
  Server,
  Activity,
} from 'lucide-react'

export default function ServicesSection() {
  const { t } = useLanguage()

  return (
    <section
      id="services"
      aria-label={t('Dịch vụ & Giải pháp', 'Services & Solutions')}
      className="bg-background py-24 md:py-32 relative overflow-hidden transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 rounded-full bg-blue-600/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 rounded-full bg-cyan-500/[0.04] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge={t('Dịch vụ cốt lõi', 'Core Services')}
          title={t('Hệ sinh thái Giải pháp Công nghệ', 'Digital Technology Ecosystem')}
          subtitle={t(
            'Kiến trúc module linh hoạt, chuẩn hóa từ giao diện thương hiệu đỉnh cao đến hạ tầng phần mềm bảo mật quy mô lớn.',
            'Flexible modular architecture, standardized from flagship brand experiences to highly secure enterprise cloud systems.'
          )}
        />

        {/* ── Asymmetric Bento Grid with Cursor Spotlight ── */}
        <BentoGrid className="auto-rows-[auto] gap-5">
          {/* 1. Large Spotlight Hero Card (Spans 4 columns, 2 rows on large screens) */}
          <BentoCard
            className="col-span-1 md:col-span-3 lg:col-span-4 row-span-2 min-h-[440px] flex flex-col justify-between border-blue-500/20 bg-gradient-to-br from-white via-slate-50 to-blue-50/40 dark:from-[#0F1117] dark:via-[#0F1117]/95 dark:to-[#161922]"
            badge={t('Flagship Solution', 'Flagship Solution')}
            icon={<Layers className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />}
            title={t(
              'Giải pháp Chuyển đổi Số & Kiến trúc Hệ thống',
              'Digital Transformation & System Architecture'
            )}
            description={t(
              'Tư vấn chiến lược và xây dựng nền tảng số hóa toàn diện: liên thông dữ liệu đa kênh, tối ưu quy trình nội bộ và sẵn sàng bứt phá mở rộng theo mô hình kinh doanh thế hệ mới.',
              'Strategic consulting and end-to-end platform engineering: unified omnichannel data, internal workflow automation, and cloud-native scalability for hyper-growth enterprises.'
            )}
            spotlightColor="rgba(6, 182, 212, 0.22)"
            header={
              <div className="my-6 p-5 rounded-xl bg-slate-100/80 dark:bg-black/40 border border-slate-200/80 dark:border-white/[0.07] backdrop-blur-md shadow-xs">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200/80 dark:border-white/[0.06] text-xs font-mono">
                  <span className="flex items-center gap-2 text-cyan-700 dark:text-cyan-400 font-semibold">
                    <Activity className="w-3.5 h-3.5 animate-pulse" />
                    SYSTEM_STATUS: OPTIMAL
                  </span>
                  <span className="text-slate-600 dark:text-slate-400 font-medium flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    99.99% Uptime
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-sans">
                  <div className="p-3 rounded-lg bg-white dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/[0.04] shadow-xs">
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Tốc độ API</div>
                    <div className="text-base font-bold text-slate-900 dark:text-white font-mono mt-0.5">&lt; 25ms</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/[0.04] shadow-xs">
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Bảo mật dữ liệu</div>
                    <div className="text-base font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1 mt-0.5">
                      <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                      End-to-End
                    </div>
                  </div>
                  <div className="col-span-2 sm:col-span-1 p-3 rounded-lg bg-white dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/[0.04] shadow-xs">
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Kiến trúc</div>
                    <div className="text-base font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1 mt-0.5">
                      <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      Microservices
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-slate-200/80 dark:border-white/[0.06]">
                  {['Cloud Native', 'Automated CI/CD', 'Realtime Sync', 'Zero Downtime'].map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            }
            action={
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400 group-hover/bento:text-cyan-500 dark:group-hover/bento:text-cyan-300 group-hover/bento:translate-x-1 transition-all duration-200">
                <span>{t('Khám phá kiến trúc chi tiết', 'Explore Full Architecture')}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            }
          />

          {/* 2. Thiết kế Website */}
          <BentoCard
            className="col-span-1 md:col-span-3 lg:col-span-2 min-h-[250px]"
            badge={t('UI/UX Standard', 'UI/UX Standard')}
            icon={<Monitor className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
            title={t('Thiết kế Website Thương hiệu', 'Brand Website Design')}
            description={t(
              'Giao diện độc quyền chuẩn quốc tế, tốc độ tải trang dưới 1 giây, tối ưu SEO Onpage và nâng tầm vị thế thương hiệu trên không gian số.',
              'Custom bespoke UI/UX, sub-second page speeds, Google PageSpeed 98+, and strong brand impact.'
            )}
            spotlightColor="rgba(59, 130, 246, 0.2)"
            action={
              <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover/bento:text-blue-500 dark:group-hover/bento:text-blue-300 transition-colors">
                <span>{t('Xem tiêu chuẩn thiết kế', 'View Design Standard')}</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
            }
          />

          {/* 3. Thương mại Điện tử */}
          <BentoCard
            className="col-span-1 md:col-span-3 lg:col-span-2 min-h-[250px]"
            badge={t('High Conversion', 'High Conversion')}
            icon={<ShoppingCart className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />}
            title={t('Thương mại Điện tử Chuyên sâu', 'Enterprise E-Commerce')}
            description={t(
              'Nền tảng bán hàng trực tuyến hiệu năng cao: quản lý kho hàng, tích hợp cổng thanh toán tự động, cổng vận chuyển và bảo mật giao dịch tuyệt đối.',
              'High-converting commerce platform: automated inventory, payment gateways, seamless shipping, and checkout optimization.'
            )}
            spotlightColor="rgba(99, 102, 241, 0.2)"
            action={
              <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover/bento:text-indigo-500 dark:group-hover/bento:text-indigo-300 transition-colors">
                <span>{t('Tìm hiểu giải pháp bán lẻ', 'Discover Retail Solutions')}</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
            }
          />

          {/* 4. Phần mềm Quản lý */}
          <BentoCard
            className="col-span-1 md:col-span-3 lg:col-span-2 min-h-[250px]"
            badge={t('Custom ERP / CRM', 'Custom ERP / CRM')}
            icon={<Database className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />}
            title={t('Phần mềm Quản trị Doanh nghiệp', 'Business Software Solutions')}
            description={t(
              'Xây dựng phần mềm chuyên biệt theo bài toán riêng: quản trị nhân sự, kho vận, tài chính kế toán và hệ thống dashboard báo cáo thông minh.',
              'Custom enterprise management tailored to unique workflows: HR, warehouse logistics, financial operations, and analytics dashboards.'
            )}
            spotlightColor="rgba(16, 185, 129, 0.2)"
            action={
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 group-hover/bento:text-emerald-500 dark:group-hover/bento:text-emerald-300 transition-colors">
                <span>{t('Tối ưu hóa quy trình', 'Optimize Workflows')}</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
            }
          />

          {/* 5. Ứng dụng Web */}
          <BentoCard
            className="col-span-1 md:col-span-3 lg:col-span-2 min-h-[250px]"
            badge={t('Cloud Scalable', 'Cloud Scalable')}
            icon={<Code2 className="w-5 h-5 text-violet-600 dark:text-violet-400" />}
            title={t('Ứng dụng Web Hiệu năng cao', 'Scalable Web Applications')}
            description={t(
              'Phát triển Web App phức tạp dựa trên Next.js và kiến trúc module hiện đại, đáp ứng hàng trăm nghìn truy cập đồng thời với độ ổn định cao nhất.',
              'Custom SaaS and web applications built on modern stacks, handling concurrent workloads with zero latency bottlenecks.'
            )}
            spotlightColor="rgba(139, 92, 246, 0.2)"
            action={
              <div className="flex items-center gap-1.5 text-xs font-semibold text-violet-600 dark:text-violet-400 group-hover/bento:text-violet-500 dark:group-hover/bento:text-violet-300 transition-colors">
                <span>{t('Xem kiến trúc kỹ thuật', 'View Technical Specs')}</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
            }
          />

          {/* 6. Vận hành & Bảo trì 24/7 */}
          <BentoCard
            className="col-span-1 md:col-span-3 lg:col-span-2 min-h-[250px]"
            badge={t('24/7 SLA Commitment', '24/7 SLA Commitment')}
            icon={<Settings2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />}
            title={t('Vận hành, Tối ưu & Bảo trì 24/7', '24/7 System DevOps & Support')}
            description={t(
              'Giám sát an ninh, sao lưu định kỳ, vá lỗi tự động và đồng hành nâng cấp kỹ thuật liên tục giúp hệ thống luôn trong trạng thái hoàn hảo.',
              'Realtime security monitoring, proactive automated backups, bug patching, and continuous performance tuning.'
            )}
            spotlightColor="rgba(245, 158, 11, 0.2)"
            action={
              <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 group-hover/bento:text-amber-500 dark:group-hover/bento:text-amber-300 transition-colors">
                <span>{t('Xem gói hỗ trợ kỹ thuật', 'Explore Support Tiers')}</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
            }
          />
        </BentoGrid>
      </div>
    </section>
  )
}
