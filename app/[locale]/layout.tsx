import './globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from '@/components/theme-provider'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n/routing'
import FooterSection from '@/components/footer'
import { Header } from '@/components/header'

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  if (!locales.includes(locale)) {
    notFound()
  }

  const messages = (await import(`@/messages/${locale}.json`)).default


  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Header
        />
        <div className="min-h-screen">
          {children}
        </div>
        <FooterSection />
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}