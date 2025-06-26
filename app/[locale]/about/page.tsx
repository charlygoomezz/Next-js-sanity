import AboutHero from "@/components/aboutPage/AboutHero"
import AboutStory from "@/components/aboutPage/AboutStory"
import AboutMantra from "@/components/aboutPage/AboutMantra"
import AboutTeam from "@/components/aboutPage/AboutTeam"
import AboutFinancing from "@/components/aboutPage/AboutFinancing"
import { getAboutHeroSection } from "@/sanity/lib/fetchers"


type Props = {
  params: {
    locale: string
  }
}

export default async function AboutPage({ params }: Props) {
  const locale = params.locale
  const [aboutHeroData] = await Promise.all([
    getAboutHeroSection(locale),
  ])
  
  return (
    <div className="min-h-screen">
      <AboutHero title={aboutHeroData.title} description={aboutHeroData.description} />
      <AboutStory />
      <AboutMantra />
      <AboutTeam />
      <AboutFinancing />
    </div>
  )
}
