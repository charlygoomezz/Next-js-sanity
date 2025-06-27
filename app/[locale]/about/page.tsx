import AboutHero from "@/components/aboutPage/AboutHero"
import AboutStory from "@/components/aboutPage/AboutStory"
import AboutMantra from "@/components/aboutPage/AboutMantra"
import AboutTeam from "@/components/aboutPage/AboutTeam"
import AboutFinancing from "@/components/aboutPage/AboutFinancing"
import { getAboutHeroSection } from "@/sanity/lib/fetchers"
import { getAboutStorySection } from "@/sanity/lib/fetchers"
import { getAboutMantraSection } from "@/sanity/lib/fetchers"



type Props = {
  params: {
    locale: string
  }
}

export default async function AboutPage({ params }: Props) {
  const locale = params.locale
  const [aboutHeroData, aboutStoryData,aboutMantraData] = await Promise.all([
    getAboutHeroSection(locale),
    getAboutStorySection(locale),
    getAboutMantraSection(locale)
  ])
  
  return (
    <div className="min-h-screen">
      <AboutHero title={aboutHeroData.title} description={aboutHeroData.description} />
      <AboutStory
        badge={aboutStoryData?.badge}
        title={aboutStoryData?.title}
        description={aboutStoryData?.description}
        image={aboutStoryData?.image}
        alt={aboutStoryData?.alt}
      />
      <AboutMantra badge={aboutMantraData.badge} title={aboutMantraData.title} items={aboutMantraData?.items || []} />
      <AboutTeam />
      <AboutFinancing />
    </div>
  )
}
