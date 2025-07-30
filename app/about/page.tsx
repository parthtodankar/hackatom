import Navigation from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter, Github } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Space Officer",
      bio: "Former NASA astronaut with 15 years of space exploration experience.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead Engineer",
      bio: "Quantum propulsion specialist and rocket science innovator.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. Aisha Patel",
      role: "Research Director",
      bio: "Astrophysicist specializing in exoplanet discovery and analysis.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "James Kim",
      role: "Mission Control Lead",
      bio: "Expert in space navigation systems and mission planning.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-purple-600/20 text-purple-300 border-purple-500/30">About Us</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Our Mission
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are pioneers in space exploration technology, dedicated to making the universe accessible to everyone.
            Our team of experts combines cutting-edge science with innovative engineering to push the boundaries of
            what's possible.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Founded in 2020, Cosmos began as a dream to democratize space exploration. What started as a small team
                of passionate scientists and engineers has grown into a leading force in the space technology industry.
              </p>
              <p className="text-gray-300 mb-4">
                We believe that the future of humanity lies among the stars, and we're committed to making that future
                accessible to everyone. Through innovative technology and unwavering dedication, we're breaking down the
                barriers that have traditionally limited space exploration to a select few.
              </p>
              <p className="text-gray-300">
                Today, we're proud to serve explorers, researchers, and dreamers from around the world, providing them
                with the tools they need to reach for the stars.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Space exploration"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gray-900/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The brilliant minds behind our space exploration technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-colors">
                <CardHeader className="text-center">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <CardTitle className="text-white">{member.name}</CardTitle>
                  <CardDescription className="text-purple-400 font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <Linkedin className="w-5 h-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
                    <Twitter className="w-5 h-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
                    <Github className="w-5 h-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that guide our mission to explore the cosmos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 text-center">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Innovation</CardTitle>
                <CardDescription className="text-gray-400">
                  We constantly push the boundaries of what's possible in space technology
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 text-center">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Accessibility</CardTitle>
                <CardDescription className="text-gray-400">
                  Making space exploration available to everyone, not just the privileged few
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 text-center">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Sustainability</CardTitle>
                <CardDescription className="text-gray-400">
                  Responsible exploration that preserves the cosmos for future generations
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Cosmos</h3>
          <p className="text-gray-400 mb-4">Exploring the universe, one planet at a time.</p>
          <p className="text-gray-500 text-sm">© 2024 Cosmos. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
