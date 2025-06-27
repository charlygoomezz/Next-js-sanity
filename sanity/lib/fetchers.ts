import { client } from './client'
import { statsSectionQuery } from './queries'
import { heroSectionQuery } from './queries'
import { brandCarouselQuery } from './queries'
import { featuresSectionQuery } from './queries'
import { aboutHeroSectionQuery } from './queries'
import { aboutStorySectionQuery } from './queries'
import { aboutMantraSectionQuery } from './queries'

//Home Page Fetchers
export async function getStatsSection(locale: string) {
  return await client.fetch(statsSectionQuery(locale), { locale })
}

export async function getHeroSection(locale: string) {
  return await client.fetch(heroSectionQuery(locale), { locale })
}


export async function getBrandCarousel(locale: string) {
  return await client.fetch(brandCarouselQuery(locale), { locale })
}

export async function getFeaturesSection(locale: string) {
  return await client.fetch(featuresSectionQuery(locale), { locale })
}

//About Page Fetchers
export async function getAboutHeroSection(locale: string) {
  return await client.fetch(aboutHeroSectionQuery(locale), { locale })
}

export async function getAboutStorySection(locale: string) {
  return await client.fetch(aboutStorySectionQuery(locale), { locale })
}

export async function getAboutMantraSection(locale: string) {
  return await client.fetch(aboutMantraSectionQuery(locale), { locale })
}

