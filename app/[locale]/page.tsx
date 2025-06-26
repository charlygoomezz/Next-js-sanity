import HeroSection from '@/components/hero-section'
import Features from '@/components/homePage/features-1'
import FooterSection from '@/components/footer'
import StatsSection from '@/components/homePage/stats'
import { getStatsSection } from '@/sanity/lib/fetchers'
import { getHeroSection } from '@/sanity/lib/fetchers'
import { getHeaderSection } from '@/sanity/lib/fetchers'
import { HeroHeader } from '@/components/header'
import { getBrandCarousel } from '@/sanity/lib/fetchers'
import { getFeaturesSection } from '@/sanity/lib/fetchers'

type Props = {
  params: {
    locale: string
  }
}

type MenuItem = { label: string; href: string }

export default async function Home({ params }: Props) {
  const locale = params.locale
  const [statsData, heroData, headerData,brandCarouselData,featuresData] = await Promise.all([
    getStatsSection(locale),
    getHeroSection(locale),
    getHeaderSection(locale),
    getBrandCarousel(locale),
    getFeaturesSection(locale),

  ])
  if (!statsData || !heroData) {
    return <div>Error loading data</div>
  }
  const adaptedMenuItems = headerData.menuItems.map((item: MenuItem) => ({
    name: item.label,
    href: item.href,
  }))

  return (
    <>
    <HeroHeader
        logo={headerData.logo}
        menuItems={adaptedMenuItems}
        loginText={headerData.loginText}
        signupText={headerData.signupText}
      />
       <HeroSection
    title={heroData.title}
    description={heroData.description}
    buttonPrimaryText={heroData.buttonPrimaryText}
    buttonPrimaryLink={heroData.buttonPrimaryLink}
    buttonSecondaryText={heroData.buttonSecondaryText}
    buttonSecondaryLink={heroData.buttonSecondaryLink}
    brandCarousel={brandCarouselData} 
   
  />
      <Features
        title={featuresData.title}
        description={featuresData.description}
        features={featuresData.features}
      />
      <StatsSection
        title={statsData.title}
        description={statsData.description}
        stats={statsData.stats}
      />
      <FooterSection />
    </>
  )
} 