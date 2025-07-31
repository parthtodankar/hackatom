import Navigation from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter, Github } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Parth Todankar",
      role: "Computer Science",
      bio: "Tech Enthusiast from India",
      image: "/parth.svg?height=300&width=300",
    },
    {
      name: "Akbarkhujaeva Diyorakhon",
      role: "Economics and Business",
      bio: "International Relations expert from Uzbekistan",
      image: "/diyora2.png?height=300&width=300",
    },
    {
      name: "Nazik Samarova",
      role: "Food Biotechnology",
      bio: "Expert in Food Biotechnology from Kyrgyzstan",
      image: "/nazik.jpg?height=300&width=300",
    },
    {
      name: "Amey Shete",
      role: "Computer Science",
      bio: "ML expert from India",
      image: "/amey.jpeg?height=300&width=300",
    },
     {
      name: "Mandeep Singh",
      role: "Computer Science",
      bio: "Software Developer from India",
      image: "/mandeep.jpeg?height=300&width=300",
    },
    {
      name: "Ulukbek Kyzy Medina",
      role: "Food Biotechnology",
      bio: "Expert in Food Biotechnology from Kyrgyzstan",
      image: "/pinkie2.png?height=300&width=300",
    },
    {
      name: "Zokirova Dilsuz",
      role: "Economics and Business",
      bio: "International Relations expert from Uzbekistan",
      image: "/dilsuz2.png?height=300&width=300",
    },
    {
      name: "Khushi Thakur",
      role: "Economics and Business",
      bio: "Architect from India",
      image: "/khushi.png?height=300&width=300",
    }
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
            We are pioneers in the economic analysis and interactive education of non-energy nuclear technologies. Our mission is to make the world of isotope production and its vital applications in medicine, industry, agriculture, and beyond accessible to everyone. 
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
                Founded in 2025, our journey began at the HackAtom hackathon in Ekaterinburg, organized by Rosatom, where a group of passionate scientists and engineers united over a shared vision: to make the benefits of nuclear technology accessible to everyone. What started as a small, driven team has grown into a leading force in promoting innovative applications of nuclear energy and isotope technology.
              </p>
              <p className="text-gray-300 mb-4">
                We believe the future depends on understanding and harnessing nuclear science—not just for electricity, but for its powerful potential in medicine, industry, agriculture, and beyond. By developing interactive tools and educational resources, we’re breaking down barriers and empowering people worldwide to explore the economic and societal value of nuclear technologies.
              </p>
              <p className="text-gray-300">
                Today, we proudly support students, researchers, and innovators, helping them unlock new possibilities with nuclear science.
              </p>
            </div>
            <div className="relative">
              <Image
                // src="/placeholder.svg?height=400&width=600"
                src="/group_picture.jpg?height=400&width=600"
                alt="Group Picture"
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
              The brilliant minds behind our nuclear technology
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
              The principles that guide our mission to explore the nucleus
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 text-center">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Innovation</CardTitle>
                <CardDescription className="text-gray-400">
                  We constantly push the boundaries of what&apos;s possible in nuclear technology
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 text-center">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Accessibility</CardTitle>
                <CardDescription className="text-gray-400">
                  Making nuclear energy available to everyone, not just the privileged few
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 text-center">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Sustainability</CardTitle>
                <CardDescription className="text-gray-400">
                  Responsible exploration that preserves the nucleus for future generations
                </CardDescription>
              </CardHeader>
            </Card>
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
