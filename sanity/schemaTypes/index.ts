import { type SchemaTypeDefinition } from 'sanity'
import { heroSection } from './home/heroSection'
import { statsSection } from './home/statsSection'
import { localeString } from './localeString'
import { localeText } from './localeText'
import { headerSection } from './headerSection'
import { brandCarousel } from './home/brandCarousel'
import { featuresSection } from './home/featuresSection'
import { aboutHeroSection } from './about/aboutHeroSection.'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [headerSection,heroSection,brandCarousel,statsSection,featuresSection, localeString, localeText,aboutHeroSection],
}
