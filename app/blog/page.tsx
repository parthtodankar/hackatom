import Navigation from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Medical Isotopes: Revolutionizing Healthcare",
      excerpt:
        "Discover how nuclear-produced isotopes like Technetium-99m are transforming medical diagnostics and cancer treatment worldwide.",
      category: "Medicine",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Agricultural Applications: Feeding the Future",
      excerpt:
        "Learn how nuclear techniques are improving crop yields, pest control, and food safety through innovative isotope applications.",
      category: "Agriculture",
      author: "Dr. Aisha Patel",
      date: "2024-01-12",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Industrial Isotopes: Powering Modern Manufacturing",
      excerpt:
        "Explore how isotopes are used in quality control, material testing, and industrial processes across various sectors.",
      category: "Industry",
      author: "Marcus Rodriguez",
      date: "2024-01-10",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Space Technology: Nuclear Power Beyond Earth",
      excerpt:
        "Understanding how radioisotope thermoelectric generators (RTGs) power deep space missions and Mars rovers.",
      category: "Space Technology",
      author: "James Kim",
      date: "2024-01-08",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Economic Impact: The Isotope Market Analysis",
      excerpt:
        "A comprehensive analysis of the global isotope market, economic benefits, and future growth projections.",
      category: "Economics",
      author: "Dr. Elena Volkov",
      date: "2024-01-05",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Environmental Applications: Green Nuclear Solutions",
      excerpt:
        "How nuclear technologies contribute to environmental monitoring, waste management, and climate change mitigation.",
      category: "Environment",
      author: "Dr. Michael Zhang",
      date: "2024-01-03",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Medicine":
        return "bg-red-600/20 text-red-300 border-red-500/30"
      case "Agriculture":
        return "bg-green-600/20 text-green-300 border-green-500/30"
      case "Industry":
        return "bg-blue-600/20 text-blue-300 border-blue-500/30"
      case "Space Technology":
        return "bg-purple-600/20 text-purple-300 border-purple-500/30"
      case "Economics":
        return "bg-yellow-600/20 text-yellow-300 border-yellow-500/30"
      case "Environment":
        return "bg-emerald-600/20 text-emerald-300 border-emerald-500/30"
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
          <Badge className="mb-4 bg-purple-600/20 text-purple-300 border-purple-500/30">Knowledge Hub</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Nuclear Technology Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the fascinating world of nuclear technologies and their applications in medicine, agriculture,
            industry, and beyond.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className={`absolute top-3 right-3 ${getCategoryColor(post.category)}`}>{post.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-white text-lg hover:text-purple-300 transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-sm leading-relaxed">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <span className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                  <Link href={`/blog/${index + 1}`}>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Nuclea</h3>
          <p className="text-gray-400 mb-4">Isotopes Inspire Innovation.</p>
          <p className="text-gray-500 text-sm">Made with  🤍  by team [Matrix]</p>
        </div>
      </footer>
    </div>
  )
}
