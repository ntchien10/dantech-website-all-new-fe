import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import { LanguageProvider } from '@/lib/context/LanguageContext'
import { ThemeProvider } from '@/components/theme-provider'
import FloatingContact from '@/components/FloatingContact'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'DANTECH',
  description:
    'DANTECH cung cấp giải pháp công nghệ toàn diện: thiết kế website, thương mại điện tử, phần mềm quản lý và ứng dụng web tùy chỉnh cho doanh nghiệp Việt Nam.',
  keywords:
    'thiết kế website, thương mại điện tử, phần mềm quản lý, ứng dụng web, công ty công nghệ Hà Nội, DANTECH',
  authors: [{ name: 'DANTECH Technology Solutions' }],
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://dantech.com.vn',
    siteName: 'DANTECH',
    title: 'DANTECH',
    description:
      'Đồng hành cùng doanh nghiệp trong hành trình chuyển đổi số — từ website thương hiệu đến hệ thống quản lý toàn diện.',
    images: [{ url: '/images/logo/logo_DANTECH_PNG.png', width: 1200, height: 630, alt: 'DANTECH' }],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <link rel="canonical" href="https://dantech.com.vn" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Công ty Giải pháp Công nghệ DANTECH',
              url: 'https://dantech.com.vn',
              telephone: '+84981397246',
              email: 'chiennt@dantech.com.vn',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Số 7 Liền kề 7, Tổng cục V Yên Xá',
                addressLocality: 'Thanh Liệt, Hà Nội',
                addressCountry: 'VN',
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-body selection:bg-blue-500/30 selection:text-white transition-colors duration-200">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            {children}
            <FloatingContact />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
