import HeroSection from '@/components/hero-section'
import Features from '@/components/homePage/features-1'
import StatsSection from '@/components/homePage/stats'
import { getStatsSection } from '@/sanity/lib/fetchers'
import { getHeroSection } from '@/sanity/lib/fetchers'
import { getBrandCarousel } from '@/sanity/lib/fetchers'
import { getFeaturesSection } from '@/sanity/lib/fetchers'

type Props = {
  params: {
    locale: string
  }
}

export default async function Home({ params }: Props) {
  const locale = params.locale
  const [statsData, heroData, brandCarouselData, featuresData] = await Promise.all([
    getStatsSection(locale),
    getHeroSection(locale),
    getBrandCarousel(locale),
    getFeaturesSection(locale),
  ])
  if (!statsData || !heroData) {
    return <div>Error loading data</div>
  }

  return (
    <>
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
    </>
  )
} 