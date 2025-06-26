import './globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from '@/components/theme-provider'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n/routing'
import { getHeaderSection } from '@/sanity/lib/fetchers'
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
  const headerData = await getHeaderSection(locale)
  const adaptedMenuItems = headerData.menuItems.map((item: { label: string; href: string }) => ({
    name: item.label,
    href: item.href,
  }))

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Header
          logo={headerData.logo}
          menuItems={adaptedMenuItems}
          loginText={headerData.loginText}
          signupText={headerData.signupText}
        />
        <div className="min-h-screen">
          {children}
        </div>
        <FooterSection />
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}