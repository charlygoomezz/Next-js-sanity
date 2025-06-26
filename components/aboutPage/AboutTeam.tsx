import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const teamMembers = [
    {
        name: "Sarah Johnson",
        role: "CEO & Founder",
        image: "/placeholder.svg?height=300&width=300",
        bio: "10+ years in tech leadership, passionate about building products that make a difference.",
        social: {
          linkedin: "#",
          twitter: "#",
          email: "sarah@company.com",
        },
      },
      {
        name: "Michael Chen",
        role: "CTO",
        image: "/placeholder.svg?height=300&width=300",
        bio: "Full-stack engineer with expertise in scalable architecture and team building.",
        social: {
          linkedin: "#",
          twitter: "#",
          email: "michael@company.com",
        },
      },
      {
        name: "Emily Rodriguez",
        role: "Head of Design",
        image: "/placeholder.svg?height=300&width=300",
        bio: "Award-winning designer focused on creating intuitive and beautiful user experiences.",
        social: {
          linkedin: "#",
          twitter: "#",
          email: "emily@company.com",
        },
      },
      {
        name: "David Kim",
        role: "VP of Engineering",
        image: "/placeholder.svg?height=300&width=300",
        bio: "Engineering leader with a track record of scaling teams and delivering quality products.",
        social: {
          linkedin: "#",
          twitter: "#",
          email: "david@company.com",
        },
      },
]

export default function AboutTeam() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="w-fit mx-auto">Our Team</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet the people behind our success</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our diverse team brings together expertise from across the industry.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center space-y-4">
                <div className="relative w-24 h-24 mx-auto">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <Link href={member.social.linkedin}><Linkedin className="h-4 w-4" /></Link>
                  <Link href={member.social.twitter}><Twitter className="h-4 w-4" /></Link>
                  <Link href={`mailto:${member.social.email}`}><Mail className="h-4 w-4" /></Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
