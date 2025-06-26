import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CreditCard } from "lucide-react"

export default function AboutFinancing() {
  return (
    <section className="py-20 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="w-fit mx-auto mb-6">Financing Options</Badge>
          <div className="space-y-6">
            <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-8">
              <CreditCard className="h-10 w-10" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Flexible financing solutions for your business
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We offer flexible payment plans for businesses of all sizes.
            </p>
            <div className="pt-6">
              <Button size="lg" className="text-lg px-8 py-3">
                Explore Financing Options
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
