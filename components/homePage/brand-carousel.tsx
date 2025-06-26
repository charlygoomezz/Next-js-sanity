'use client'
import { InfiniteSlider } from "../ui/infinite-slider"
import { ProgressiveBlur } from "../ui/progressive-blur"

export type Brand = {
  logoUrl: string
  alt: string
  href?: string
  height?: number
}

type BrandCarouselProps = {
  introText: string
  brands: Brand[]
}

export function BrandCarousel({ introText, brands }: BrandCarouselProps) {
  return (
    <section className="bg-background pb-16 md:pb-32">
      <div className="group relative m-auto max-w-6xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm">{introText}</p>
          </div>

          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
              {brands.map((brand, index) => (
                <div key={index} className="flex">
                  <a href={brand.href ?? '#'} target="_blank" rel="noopener noreferrer">
                    <img
                      className="mx-auto h-10 w-auto dark:invert brightness-0 "
                      src={brand.logoUrl}
                      alt={brand.alt}
                      height={brand.height ?? 40}
                    />
                  </a>
                </div>
              ))}
            </InfiniteSlider>

            {/* Gradients + blur */}
            <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20" />
            <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20" />
            <ProgressiveBlur className="pointer-events-none absolute left-0 top-0 h-full w-20" direction="left" blurIntensity={1} />
            <ProgressiveBlur className="pointer-events-none absolute right-0 top-0 h-full w-20" direction="right" blurIntensity={1} />
          </div>
        </div>
      </div>
    </section>
  )
}