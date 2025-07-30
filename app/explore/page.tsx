import Navigation from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Thermometer, Wind, Zap } from "lucide-react"
import Image from "next/image"

export default function ExplorePage() {
  const planets = [
    {
      name: "Kepler-442b",
      type: "Super Earth",
      distance: "1,200 light years",
      temperature: "233K (-40°C)",
      atmosphere: "Potentially habitable",
      image: "/placeholder.svg?height=300&width=400",
      status: "Habitable Zone",
    },
    {
      name: "TRAPPIST-1e",
      type: "Terrestrial",
      distance: "40 light years",
      temperature: "251K (-22°C)",
      atmosphere: "Earth-like potential",
      image: "/placeholder.svg?height=300&width=400",
      status: "High Interest",
    },
    {
      name: "Proxima Centauri b",
      type: "Rocky Planet",
      distance: "4.2 light years",
      temperature: "234K (-39°C)",
      atmosphere: "Unknown",
      image: "/placeholder.svg?height=300&width=400",
      status: "Nearest",
    },
    {
      name: "K2-18b",
      type: "Sub-Neptune",
      distance: "124 light years",
      temperature: "279K (6°C)",
      atmosphere: "Water vapor detected",
      image: "/placeholder.svg?height=300&width=400",
      status: "Water Confirmed",
    },
    {
      name: "TOI-715b",
      type: "Super Earth",
      distance: "137 light years",
      temperature: "260K (-13°C)",
      atmosphere: "Under study",
      image: "/placeholder.svg?height=300&width=400",
      status: "Recently Discovered",
    },
    {
      name: "LHS 1140b",
      type: "Rocky World",
      distance: "49 light years",
      temperature: "230K (-43°C)",
      atmosphere: "Potentially thick",
      image: "/placeholder.svg?height=300&width=400",
      status: "Prime Target",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Habitable Zone":
        return "bg-green-600/20 text-green-300 border-green-500/30"
      case "High Interest":
        return "bg-blue-600/20 text-blue-300 border-blue-500/30"
      case "Nearest":
        return "bg-purple-600/20 text-purple-300 border-purple-500/30"
      case "Water Confirmed":
        return "bg-cyan-600/20 text-cyan-300 border-cyan-500/30"
      case "Recently Discovered":
        return "bg-yellow-600/20 text-yellow-300 border-yellow-500/30"
      case "Prime Target":
        return "bg-red-600/20 text-red-300 border-red-500/30"
      default:
        return "bg-gray-600/20 text-gray-300 border-gray-500/30"
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-purple-600/20 text-purple-300 border-purple-500/30">Explore</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Discover New Worlds
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Browse our catalog of discovered exoplanets and plan your next interstellar mission. Each world offers
            unique opportunities for exploration and discovery.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search planets..."
              className="pl-10 bg-gray-900/50 border-gray-700 text-white placeholder-gray-400"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-900/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">5,000+</div>
              <div className="text-gray-400">Planets Discovered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">127</div>
              <div className="text-gray-400">Potentially Habitable</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">23</div>
              <div className="text-gray-400">Earth-like Candidates</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">8</div>
              <div className="text-gray-400">Water Confirmed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Planets Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">Featured Planets</h2>
            <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800 bg-transparent">
              View All
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {planets.map((planet, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="p-0">
                  <div className="relative">
                    <Image
                      src={planet.image || "/placeholder.svg"}
                      alt={planet.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className={`absolute top-3 right-3 ${getStatusColor(planet.status)}`}>{planet.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-white text-xl mb-2">{planet.name}</CardTitle>
                  <CardDescription className="text-purple-400 mb-4">{planet.type}</CardDescription>

                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-300">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      {planet.distance}
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <Thermometer className="w-4 h-4 mr-2 text-gray-400" />
                      {planet.temperature}
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <Wind className="w-4 h-4 mr-2 text-gray-400" />
                      {planet.atmosphere}
                    </div>
                  </div>

                  <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white">
                    <Zap className="w-4 h-4 mr-2" />
                    Plan Mission
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Planning CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Mission?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Use our advanced mission planning tools to chart your course to any of these incredible worlds.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
            Launch Mission Planner
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Nuclea</h3>
          <p className="text-gray-400 mb-4">One Isotope can change a life.</p>
          <p className="text-gray-500 text-sm">Made with 🤍 by team [Matrix]</p>
        </div>
      </footer>
    </div>
  )
}
