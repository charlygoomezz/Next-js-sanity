import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function AboutStory() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <Badge variant="outline" className="w-fit">Our Story</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              From humble beginnings to industry leadership
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Founded in 2019 with a simple mission: to create technology that empowers people and businesses to achieve more.</p>
              <p>Our journey hasn’t always been easy, but every challenge has made us stronger and more committed to our vision.</p>
              <p>Today, we’re proud to be at the forefront of innovation, pushing boundaries and setting new standards.</p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Company journey and growth"
              width={600}
              height={500}
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
