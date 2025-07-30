import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Shield, Zap, Globe, Star, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-bg.jpg" alt="Space background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-purple-600/20 text-purple-300 border-purple-500/30">🚀 Team [Matrix] presents</Badge>
          <h1 className="text-5xl md:text-6.9xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            {/* Isotopes Inspire Innovation. */}
            One Isotope can change your life.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Discover the economic power and impact of nuclear isotopes beyond energy – learn and explore the future of innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
              Start Exploring
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-3 bg-transparent"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to explore, discover, and conquer the atom
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <Rocket className="w-12 h-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Personalized Learning Experience</CardTitle>
                <CardDescription className="text-gray-400">
                  Tailored content based on user interests
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <Shield className="w-12 h-12 text-blue-400 mb-4" />
                <CardTitle className="text-white">Security & Compliance</CardTitle>
                <CardDescription className="text-gray-400">
                  Adherence to nuclear education standards
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <Zap className="w-12 h-12 text-yellow-400 mb-4" />
                <CardTitle className="text-white">AI-Powered Features</CardTitle>
                <CardDescription className="text-gray-400">
                  Chatbot for answering nuclear science questions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <Globe className="w-12 h-12 text-green-400 mb-4" />
                <CardTitle className="text-white">Mobile-First Design</CardTitle>
                <CardDescription className="text-gray-400">
                  Seamless experience across all devices
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <Star className="w-12 h-12 text-orange-400 mb-4" />
                <CardTitle className="text-white">Gamification Elements</CardTitle>
                <CardDescription className="text-gray-400">
                  Compare knowledge with other learners
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <CheckCircle className="w-12 h-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Interactive Data Visualization</CardTitle>
                <CardDescription className="text-gray-400">
                  Real-time charts of isotope market trends
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Fellowship Programme Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-purple-600/20 text-purple-300 border-purple-500/30">🚀 Exclusive Opportunity</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Fellowship Programme</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join a distinguished community of innovators dedicated to advancing nuclear technology education. Our fellowship program provides exclusive access to cutting-edge research, expert mentorship, and practical experience developing interactive applications that bring nuclear science to life.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Advanced Training</h3>
              <p className="text-gray-400 text-sm">Access to exclusive workshops and training sessions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Expert Mentorship</h3>
              <p className="text-gray-400 text-sm">One-on-one guidance from industry leaders</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Global Network</h3>
              <p className="text-gray-400 text-sm">Connect with fellow innovators worldwide</p>
            </div>
          </div>

          <a href="https://forms.gle/u53qq1CojRp1sTrS9" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg">
              Apply for Fellowship
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>

          <p className="text-gray-400 text-sm mt-4">Limited spots available • Applications reviewed monthly</p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Mission</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Select the perfect plan for your space exploration needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Explorer</CardTitle>
                <CardDescription className="text-gray-400">Perfect for individual explorers</CardDescription>
                <div className="text-4xl font-bold text-white mt-4">
                  $29<span className="text-lg text-gray-400">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Basic propulsion systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />5 planet scans per month
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Standard support
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gray-700 hover:bg-gray-600 text-white">Start Exploring</Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-purple-900/50 to-gray-900/50 border-purple-500 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white">
                Most Popular
              </Badge>
              <CardHeader>
                <CardTitle className="text-white text-2xl">Commander</CardTitle>
                <CardDescription className="text-gray-400">For serious space missions</CardDescription>
                <div className="text-4xl font-bold text-white mt-4">
                  $99<span className="text-lg text-gray-400">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Advanced propulsion systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Unlimited planet scans
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Quantum shields included
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Priority support
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white">Launch Mission</Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Admiral</CardTitle>
                <CardDescription className="text-gray-400">For galactic enterprises</CardDescription>
                <div className="text-4xl font-bold text-white mt-4">
                  $299<span className="text-lg text-gray-400">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    All features included
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Fleet management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Custom integrations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    24/7 dedicated support
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gray-700 hover:bg-gray-600 text-white">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Nuclea</h3>
          <p className="text-gray-400 mb-4">Isotopes Inspire Innovation.</p>
          <p className="text-gray-500 text-sm"> Made with  🤍  by team [Matrix]</p>
        </div>
      </footer>
    </div>
  )
}
