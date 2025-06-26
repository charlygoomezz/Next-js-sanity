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
export const headerSectionQuery = (locale: string) => `
  *[_type == "headerSection"][0]{
    "logo": logo.asset->url,
    menuItems[]{
      "label": label.${locale},
      href
    },
    "loginText": loginText.${locale},
    "signupText": signupText.${locale}
  }`
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