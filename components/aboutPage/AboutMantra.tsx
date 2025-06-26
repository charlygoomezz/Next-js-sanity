import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Target } from "lucide-react"

export default function AboutMantra() {
  return (
    <section className="py-20 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="w-fit mx-auto">Our Vision & Mission</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Guiding principles that drive everything we do
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the world’s most trusted technology partner, enabling businesses and individuals to unlock their full potential.
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                We create cutting-edge technology solutions that empower our clients to achieve extraordinary results.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
