import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Sparkles, Zap } from "lucide-react"

type MantraItem = {
  iconUrl?: string
  title: string
  description: string
}

type AboutMantraProps = {
  badge: string
  title: string
  items: MantraItem[]
}

const defaultIcons = [Sparkles, Zap]

export default function AboutMantra({ badge, title, items }: AboutMantraProps) {
  return (
    <section className="py-20 lg:py-32 bg-slate-50 dark:bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="w-fit mx-auto">{badge}</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {items.map((item, index) => {
            const FallbackIcon = defaultIcons[index % defaultIcons.length]
            return (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {item.iconUrl ? (
                      <Image
                        src={item.iconUrl}
                        alt={item.title}
                        width={32}
                        height={32}
                      />
                    ) : (
                      <FallbackIcon className="w-8 h-8" />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}