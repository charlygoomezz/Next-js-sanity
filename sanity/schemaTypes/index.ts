import { type SchemaTypeDefinition } from 'sanity'
import { heroSection } from './home/heroSection'
import { statsSection } from './home/statsSection'
import { localeString } from './localeString'
import { localeText } from './localeText'
import { brandCarousel } from './home/brandCarousel'
import { featuresSection } from './home/featuresSection'
import { aboutHeroSection } from './about/aboutHeroSection'
import { aboutStory } from './about/aboutStorySection'
import { aboutMantra } from './about/aboutMantraSection'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroSection,brandCarousel,statsSection,featuresSection, localeString, localeText,aboutHeroSection,aboutStory,aboutMantra],
}
