export const statsSectionQuery = (locale: string) => `
  *[_type == "statsSection"][0]{
    "title": title.${locale},
    "description": description.${locale},
    stats[]{
      value,
      "label": label.${locale}
    }
  }
`
export const heroSectionQuery = (locale: string) => `
  *[_type == "heroSection"][0]{
    "title": title.${locale},
    "description": description.${locale},
    "buttonPrimaryText": ctaPrimaryText.${locale},
    "buttonPrimaryLink": ctaPrimaryLink,
    "buttonSecondaryText": ctaSecondaryText.${locale},
    "buttonSecondaryLink": ctaSecondaryLink
  }
`

  export const brandCarouselQuery = (locale: string) => `
  *[_type == "brandCarousel"][0]{
    "introText": introText.${locale},
    brands[]{
      "logoUrl": logo.asset->url,
      alt,
      href,
      height
    }
  }
`
export const featuresSectionQuery = (locale: string) => `
  *[_type == "featuresSection"][0]{
    "title": title.${locale},
    "description": description.${locale},
    features[]{
      "iconUrl": iconImage.asset->url,
      "title": title.${locale},
      "description": description.${locale}
    }
  }
`
export const aboutHeroSectionQuery = (locale: string) => `
  *[_type == "aboutHeroSection"][0]{
    "title": title.${locale},
    "description": description.${locale}
  }
`
export const aboutStorySectionQuery = (locale: string) => `
  *[_type == "aboutStory"][0]{
    "badge": badge.${locale},
    "title": title.${locale},
    "description": description.${locale},   
    "image": image.asset->url,
    "alt": alt.${locale}
  }
`
export const aboutMantraSectionQuery = (locale: string) => `
  *[_type == "aboutMantra"][0]{
    "badge": badge.${locale},
    "title": title.${locale},
    items[]{
      "iconUrl": iconImage.asset->url,
      "title": title.${locale},
      "description": description.${locale}
    }
  }
`