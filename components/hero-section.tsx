import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { BrandCarousel, Brand } from '@/components/homePage/brand-carousel'

type HeroSectionProps = {
  title: string
  description: string
  buttonPrimaryText: string
  buttonPrimaryLink: string
  buttonSecondaryText: string
  buttonSecondaryLink: string
  brandCarousel?: {
    introText: string
    brands: Brand[]
  }
}

export default function HeroSection({
  title,
  description,
  buttonPrimaryText,
  buttonPrimaryLink,
  buttonSecondaryText,
  buttonSecondaryLink,
  brandCarousel,
}: HeroSectionProps) {
  return (
    <>
      <main className="overflow-x-hidden">
        <section>
          <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">{title}</h1>
                <p className="mt-8 max-w-2xl text-pretty text-lg">{description}</p>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button asChild size="lg" className="px-5 text-base">
                    <Link href={buttonPrimaryLink} target={buttonPrimaryLink.startsWith('http') ? '_blank' : '_self'}>
                      <span className="text-nowrap">{buttonPrimaryText}</span>
                    </Link>
                  </Button>
                  <Button key={2} asChild size="lg" variant="ghost" className="px-5 text-base">
                    <Link href={buttonSecondaryLink} target={buttonSecondaryLink.startsWith('http') ? '_blank' : '_self'}>
                      <span className="text-nowrap">{buttonSecondaryText}</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Aquí insertamos el BrandCarousel si viene */}
        {brandCarousel && brandCarousel.brands.length > 0 && (
          <BrandCarousel introText={brandCarousel.introText} brands={brandCarousel.brands} />
        )}
      </main>
    </>
  )
}