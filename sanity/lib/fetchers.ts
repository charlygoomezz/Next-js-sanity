import { client } from './client'
import { statsSectionQuery } from './queries'
import { heroSectionQuery } from './queries'
import { headerSectionQuery } from './queries'
import { brandCarouselQuery } from './queries'

export async function getStatsSection(locale: string) {
  return await client.fetch(statsSectionQuery(locale), { locale })
}
export async function getHeroSection(locale: string) {
  return await client.fetch(heroSectionQuery(locale), { locale })
}
export async function getHeaderSection(locale: string) {
  return await client.fetch(headerSectionQuery(locale), { locale })
}
export async function getBrandCarousel(locale: string) {
  return await client.fetch(brandCarouselQuery(locale), { locale })
}