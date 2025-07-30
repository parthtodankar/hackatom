import Navigation from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ShoppingCart, Filter, Star, Shield, Zap } from "lucide-react"
import Image from "next/image"

export default function BuyPage() {
  const products = [
    {
      id: 1,
      name: "Ionization Smoke Detector",
      description: "Uses Americium-241 to detect smoke particles. Essential for home and office safety.",
      category: "Safety",
      isotope: "Americium-241",
      technology: "Alpha Radiation",
      price: 2999,
      originalPrice: 3999,
      rating: 4.8,
      reviews: 1247,
      image: "/smokedetector.png?height=300&width=400&text=Smoke+Detector",
      features: ["10+ Year Lifespan", "Battery Backup", "Test Button", "Low Battery Alert"],
      inStock: true,
      bestseller: true,
    },
    {
      id: 2,
      name: "Gamma Sterilization Unit",
      description: "Professional-grade sterilizer using Cobalt-60 gamma radiation for medical instruments.",
      category: "Medical",
      isotope: "Cobalt-60",
      technology: "Gamma Radiation",
      price: 1249900,
      originalPrice: null,
      rating: 4.9,
      reviews: 89,
      image: "/sterilization.png?height=300&width=400&text=Medical+Sterilizer",
      features: ["50L Chamber", "99.99% Efficiency", "Digital Controls", "Safety Interlocks"],
      inStock: true,
      bestseller: false,
    },
    {
      id: 3,
      name: "Isotope-Enhanced Fertilizer",
      description: "Advanced fertilizer with radioactive tracers for precision agriculture and crop optimization.",
      category: "Agriculture",
      isotope: "Phosphorus-32",
      technology: "Isotope Tracing",
      price: 18999,
      originalPrice: 22999,
      rating: 4.6,
      reviews: 342,
      image: "/fertilizer.png?height=300&width=400&text=Nuclear+Fertilizer",
      features: ["5 Acre Coverage", "+25% Yield Increase", "Precision Tracking", "Eco-Friendly"],
      inStock: true,
      bestseller: false,
    },
    {
      id: 4,
      name: "Nuclear Density Gauge",
      description: "Precision measurement tool using Cesium-137 for construction and quality control.",
      category: "Industrial",
      isotope: "Cesium-137",
      technology: "Gamma Backscatter",
      price: 875000,
      originalPrice: null,
      rating: 4.7,
      reviews: 156,
      image: "/densitygauge.png?height=300&width=400&text=Industrial+Gauge",
      features: ["±0.1% Accuracy", "Digital Display", "Data Logging", "Rugged Design"],
      inStock: false,
      bestseller: false,
    },
    {
      id: 5,
      name: "Food Irradiation System",
      description: "Commercial food preservation system using gamma radiation to eliminate pathogens.",
      category: "Food Safety",
      isotope: "Cobalt-60",
      technology: "Gamma Irradiation",
      price: 4500000,
      originalPrice: null,
      rating: 4.8,
      reviews: 23,
      image: "/fodirri.png?height=300&width=400&text=Food+Irradiator",
      features: ["1000 kg/hr Throughput", "+300% Shelf Life", "Automated System", "FDA Approved"],
      inStock: true,
      bestseller: false,
    },
    {
      id: 6,
      name: "Medical Imaging Tracer Kit",
      description: "Technetium-99m generator for nuclear medicine imaging and diagnostic procedures.",
      category: "Medical",
      isotope: "Technetium-99m",
      technology: "Gamma Emission",
      price: 285000,
      originalPrice: null,
      rating: 4.9,
      reviews: 67,
      image: "/medical.png?height=300&width=400&text=Medical+Tracer",
      features: ["6 Hour Half-life", "50+ Scans", "High Resolution", "Safe for Patients"],
      inStock: true,
      bestseller: true,
    },
  ]

  const categories = ["All", "Safety", "Medical", "Agriculture", "Industrial", "Food Safety"]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Safety":
        return "bg-red-600/20 text-red-300 border-red-500/30"
      case "Medical":
        return "bg-blue-600/20 text-blue-300 border-blue-500/30"
      case "Agriculture":
        return "bg-green-600/20 text-green-300 border-green-500/30"
      case "Industrial":
        return "bg-purple-600/20 text-purple-300 border-purple-500/30"
      case "Food Safety":
        return "bg-orange-600/20 text-orange-300 border-orange-500/30"
      default:
        return "bg-gray-600/20 text-gray-300 border-gray-500/30"
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
    }).format(price)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-green-600/20 text-green-300 border-green-500/30">🛒 Nuclear Tech Store</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Nuclear Technology Products
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover everyday products powered by nuclear technology. From safety devices to medical equipment, explore
            how nuclear applications make our lives safer and better.
          </p>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search products..."
                className="pl-10 bg-gray-900/50 border-gray-700 text-white placeholder-gray-400"
              />
            </div>
            <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800 bg-transparent">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 bg-gray-900/30">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant="outline"
                className="border-gray-700 text-white hover:bg-purple-600/20 hover:border-purple-500 bg-transparent"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 overflow-hidden relative"
              >
                {product.bestseller && (
                  <Badge className="absolute top-3 left-3 z-10 bg-yellow-600/20 text-yellow-300 border-yellow-500/30">
                    ⭐ Bestseller
                  </Badge>
                )}
                {!product.inStock && (
                  <Badge className="absolute top-3 right-3 z-10 bg-red-600/20 text-red-300 border-red-500/30">
                    Out of Stock
                  </Badge>
                )}

                <div className="relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className={`absolute bottom-3 right-3 ${getCategoryColor(product.category)}`}>
                    {product.category}
                  </Badge>
                  <Badge className="absolute bottom-3 left-3 bg-cyan-600/20 text-cyan-300 border-cyan-500/30">
                    {product.isotope}
                  </Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-white text-lg">{product.name}</CardTitle>
                  <CardDescription className="text-gray-300 text-sm">{product.description}</CardDescription>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                </CardHeader>

                <CardContent>
                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Shield className="w-3 h-3 mr-1 text-green-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology */}
                  <div className="flex justify-between text-xs text-gray-400 mb-4">
                    <span>Technology:</span>
                    <span className="text-purple-400">{product.technology}</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-2xl font-bold text-white">{formatPrice(product.price)}</div>
                      {product.originalPrice && (
                        <div className="text-sm text-gray-400 line-through">{formatPrice(product.originalPrice)}</div>
                      )}
                    </div>
                    {product.originalPrice && (
                      <Badge className="bg-green-600/20 text-green-300 border-green-500/30">
                        Save {formatPrice(product.originalPrice - product.price)}
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <Button
                      className={`w-full ${
                        product.inStock
                          ? "bg-purple-600 hover:bg-purple-700 text-white"
                          : "bg-gray-600 cursor-not-allowed text-gray-400"
                      }`}
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {product.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-gray-700 text-white hover:bg-gray-800 bg-transparent"
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Note */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto">
          <Card className="bg-gray-900/50 border-purple-500/30 max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Educational Purpose</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                These products showcase real-world applications of nuclear technology beyond energy production. From
                household safety devices to advanced medical equipment, nuclear isotopes play a crucial role in
                improving our daily lives. Each product demonstrates the economic value and practical benefits of
                non-energy nuclear applications.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold text-white mb-2">Safety First</h4>
                  <p className="text-gray-400">All products meet strict safety standards and regulations</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Proven Technology</h4>
                  <p className="text-gray-400">Decades of research and development behind each application</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Economic Value</h4>
                  <p className="text-gray-400">Cost-effective solutions with significant ROI</p>
                </div>
              </div>
            </CardContent>
          </Card>
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
