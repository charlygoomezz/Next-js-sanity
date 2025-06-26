import { Badge } from "@/components/ui/badge"
import Image from "next/image"

type AboutStoryProps = {
  badge: string
  title: string
  description: string
  image: string
  alt: string
}

export default function AboutStory({ badge, title, description, image, alt }: AboutStoryProps) {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <Badge variant="outline" className="w-fit">{badge}</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {description.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
             ))}
            </div>
          </div>
          <div className="relative">
            <Image
              src={image}
              alt={alt}
              width={600}
              height={500}
              className="rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}