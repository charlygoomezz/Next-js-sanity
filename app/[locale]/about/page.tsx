import AboutHero from "@/components/aboutPage/AboutHero"
import AboutStory from "@/components/aboutPage/AboutStory"
import AboutMantra from "@/components/aboutPage/AboutMantra"
import AboutTeam from "@/components/aboutPage/AboutTeam"
import AboutFinancing from "@/components/aboutPage/AboutFinancing"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AboutStory />
      <AboutMantra />
      <AboutTeam />
      <AboutFinancing />
    </div>
  )
}
