import { Zap, Settings2, Sparkles } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import { ReactNode } from 'react'
import React from 'react'

// Array de iconos por defecto (como componentes, no JSX)
const defaultIcons = [Zap, Settings2, Sparkles]

type Feature = {
  iconUrl?: string
  title: string
  description: string
}

type FeaturesSectionProps = {
  title: string
  description: string
  features?: Feature[] // Marcado como opcional
}

export default function FeaturesSection({
  title,
  description,
  features = [], // Valor por defecto
}: FeaturesSectionProps) {
  return (
    <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-semibold lg:text-5xl">{title}</h2>
          <p className="mt-4">{description}</p>
        </div>

        <div className="mx-auto mt-8 grid grid-cols-1 gap-6 *:text-center md:mt-16 md:grid-cols-3 max-w-5xl">

          {features.map((feature, i) => (
            <Card key={feature.title ?? i} className="group shadow-zinc-950/5">
              <CardHeader className="pb-3">
                <CardDecorator>
                  {feature.iconUrl ? (
                    <Image
                      src={feature.iconUrl}
                      alt={feature.title}
                      width={24}
                      height={24}
                    />
                  ) : (
                    React.createElement(defaultIcons[i % defaultIcons.length], {
                      className: 'size-6',
                      'aria-hidden': true,
                    })
                  )}
                </CardDecorator>
                <h3 className="mt-6 font-medium">{feature.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="mt-3 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    <div
      aria-hidden
      className="bg-radial to-background absolute inset-0 from-transparent to-75%"
    />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
)
