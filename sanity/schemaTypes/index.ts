import { type SchemaTypeDefinition } from 'sanity'
import { heroSection } from './heroSection'
import { statsSection } from './statsSection'
import { localeString } from './localeString'
import { localeText } from './localeText'
import { headerSection } from './headerSection'
import { brandCarousel } from './brandCarousel'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [headerSection,heroSection,brandCarousel,statsSection, localeString, localeText],
}
