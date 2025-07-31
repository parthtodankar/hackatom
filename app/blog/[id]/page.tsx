import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowLeft, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const blogData = [
  {
    id: 1,
    title: "Medical Isotopes: Revolutionizing Healthcare",
    excerpt:
      "Discover how nuclear-produced isotopes like Technetium-99m are transforming medical diagnostics and cancer treatment worldwide.",
    category: "Medicine",
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <h2>The Revolution in Medical Diagnostics</h2>
      <p>Nuclear medicine has transformed healthcare through the use of radioisotopes for both diagnostic and therapeutic purposes. Medical isotopes are radioactive forms of elements that emit radiation, which can be detected by special cameras to create images of organs and tissues inside the body.</p>
      
      <h3>Technetium-99m: The Workhorse of Nuclear Medicine</h3>
      <p>Technetium-99m (Tc-99m) is the most widely used medical isotope in the world, accounting for about 80% of all nuclear medicine procedures. This isotope is ideal for medical imaging because:</p>
      <ul>
        <li>It has a short half-life of 6 hours, minimizing radiation exposure to patients</li>
        <li>It emits gamma rays that are easily detected by imaging equipment</li>
        <li>It can be chemically attached to various compounds to target specific organs</li>
        <li>It produces high-quality images with minimal patient discomfort</li>
      </ul>
      
      <h3>Applications in Modern Medicine</h3>
      <p>Medical isotopes are used in various diagnostic procedures:</p>
      <ul>
        <li><strong>Cardiac Imaging:</strong> Detecting heart disease and blood flow problems</li>
        <li><strong>Bone Scans:</strong> Identifying fractures, infections, and cancer metastases</li>
        <li><strong>Brain Imaging:</strong> Diagnosing neurological conditions and brain tumors</li>
        <li><strong>Kidney Function:</strong> Assessing kidney health and detecting abnormalities</li>
      </ul>
      
      <h3>Therapeutic Applications</h3>
      <p>Beyond diagnostics, isotopes are increasingly used for treatment:</p>
      <ul>
        <li><strong>Iodine-131:</strong> Treating thyroid cancer and hyperthyroidism</li>
        <li><strong>Lutetium-177:</strong> Targeting neuroendocrine tumors</li>
        <li><strong>Radium-223:</strong> Treating bone metastases in prostate cancer</li>
      </ul>
      
      <h3>Economic Impact</h3>
      <p>The global medical isotopes market is valued at over $5 billion annually and continues to grow. Nuclear medicine procedures help reduce healthcare costs by:</p>
      <ul>
        <li>Enabling early disease detection</li>
        <li>Reducing the need for invasive procedures</li>
        <li>Providing precise treatment targeting</li>
        <li>Improving patient outcomes and quality of life</li>
      </ul>
      
      <h3>Future Developments</h3>
      <p>Research continues into new isotopes and applications, including targeted alpha therapy and personalized medicine approaches. The development of new production methods and isotopes promises even more effective treatments in the future.</p>
    `,
  },
  {
    id: 2,
    title: "Agricultural Applications: Feeding the Future",
    excerpt:
      "Learn how nuclear techniques are improving crop yields, pest control, and food safety through innovative isotope applications.",
    category: "Agriculture",
    author: "Dr. Aisha Patel",
    date: "2024-01-12",
    readTime: "6 min read",
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <h2>Nuclear Techniques in Modern Agriculture</h2>
      <p>Nuclear technology plays a crucial role in addressing global food security challenges. Through various isotope applications, agriculture has become more efficient, sustainable, and productive.</p>
      
      <h3>Plant Breeding and Crop Improvement</h3>
      <p>Mutation breeding using gamma radiation has created over 3,000 crop varieties worldwide:</p>
      <ul>
        <li><strong>Higher Yields:</strong> Improved rice varieties that produce 20-30% more grain</li>
        <li><strong>Disease Resistance:</strong> Crops resistant to fungal and bacterial diseases</li>
        <li><strong>Climate Adaptation:</strong> Drought-tolerant and salt-resistant varieties</li>
        <li><strong>Nutritional Enhancement:</strong> Crops with higher protein and vitamin content</li>
      </ul>
      
      <h3>Pest Control Through Sterile Insect Technique (SIT)</h3>
      <p>The Sterile Insect Technique uses radiation to sterilize male insects, which are then released to mate with wild females, producing no offspring:</p>
      <ul>
        <li>Successfully eliminated screwworm flies from North America</li>
        <li>Controls fruit flies that damage crops worth billions annually</li>
        <li>Environmentally friendly alternative to pesticides</li>
        <li>Reduces pesticide use by up to 90% in treated areas</li>
      </ul>
      
      <h3>Soil and Water Management</h3>
      <p>Isotope techniques help optimize agricultural resources:</p>
      <ul>
        <li><strong>Soil Analysis:</strong> Tracking nutrient movement and availability</li>
        <li><strong>Water Use Efficiency:</strong> Measuring plant water uptake and irrigation needs</li>
        <li><strong>Fertilizer Optimization:</strong> Determining optimal fertilizer application rates</li>
        <li><strong>Erosion Control:</strong> Monitoring soil loss and implementing conservation measures</li>
      </ul>
      
      <h3>Food Safety and Preservation</h3>
      <p>Food irradiation ensures safer food supplies:</p>
      <ul>
        <li>Eliminates harmful bacteria like Salmonella and E. coli</li>
        <li>Extends shelf life without chemical preservatives</li>
        <li>Reduces post-harvest losses by up to 50%</li>
        <li>Maintains nutritional value and taste</li>
      </ul>
      
      <h3>Economic Benefits</h3>
      <p>Nuclear techniques in agriculture provide significant economic returns:</p>
      <ul>
        <li>Increased crop yields worth billions of dollars annually</li>
        <li>Reduced pesticide costs and environmental damage</li>
        <li>Lower post-harvest losses saving millions of tons of food</li>
        <li>Enhanced food security for growing populations</li>
      </ul>
    `,
  },
  {
    id: 3,
    title: "Industrial Isotopes: Powering Modern Manufacturing",
    excerpt:
      "Explore how isotopes are used in quality control, material testing, and industrial processes across various sectors.",
    category: "Industry",
    author: "Marcus Rodriguez",
    date: "2024-01-10",
    readTime: "7 min read",
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <h2>Industrial Applications of Nuclear Technology</h2>
      <p>Industrial isotopes are essential tools in modern manufacturing, providing non-destructive testing, quality control, and process optimization across numerous industries.</p>
      
      <h3>Non-Destructive Testing (NDT)</h3>
      <p>Radiographic testing using isotopes ensures structural integrity without damaging components:</p>
      <ul>
        <li><strong>Pipeline Inspection:</strong> Detecting cracks and corrosion in oil and gas pipelines</li>
        <li><strong>Weld Quality:</strong> Ensuring strong, safe welds in construction and manufacturing</li>
        <li><strong>Aerospace Components:</strong> Testing critical aircraft parts for defects</li>
        <li><strong>Nuclear Power Plants:</strong> Inspecting reactor components and safety systems</li>
      </ul>
      
      <h3>Thickness and Density Measurement</h3>
      <p>Isotope gauges provide precise measurements in real-time:</p>
      <ul>
        <li><strong>Paper Manufacturing:</strong> Controlling paper thickness to within micrometers</li>
        <li><strong>Steel Production:</strong> Monitoring sheet metal thickness during rolling</li>
        <li><strong>Plastic Films:</strong> Ensuring uniform thickness in packaging materials</li>
        <li><strong>Road Construction:</strong> Measuring asphalt density for quality control</li>
      </ul>
      
      <h3>Level and Flow Measurement</h3>
      <p>Nuclear gauges monitor industrial processes without physical contact:</p>
      <ul>
        <li>Measuring liquid levels in sealed tanks and vessels</li>
        <li>Monitoring flow rates in pipelines and processing equipment</li>
        <li>Detecting blockages and flow irregularities</li>
        <li>Optimizing process efficiency and safety</li>
      </ul>
      
      <h3>Sterilization and Polymer Modification</h3>
      <p>Gamma radiation serves multiple industrial purposes:</p>
      <ul>
        <li><strong>Medical Device Sterilization:</strong> Ensuring sterile surgical instruments and implants</li>
        <li><strong>Polymer Cross-linking:</strong> Creating stronger, more durable plastics</li>
        <li><strong>Wire and Cable Insulation:</strong> Improving electrical properties and heat resistance</li>
        <li><strong>Tire Manufacturing:</strong> Enhancing rubber properties for better performance</li>
      </ul>
      
      <h3>Oil and Gas Industry</h3>
      <p>Nuclear techniques are crucial in energy exploration and production:</p>
      <ul>
        <li><strong>Well Logging:</strong> Analyzing rock formations and fluid content</li>
        <li><strong>Enhanced Oil Recovery:</strong> Using tracers to optimize extraction</li>
        <li><strong>Pipeline Monitoring:</strong> Detecting leaks and measuring flow rates</li>
        <li><strong>Refinery Operations:</strong> Process control and quality assurance</li>
      </ul>
      
      <h3>Economic Impact</h3>
      <p>Industrial isotopes contribute significantly to economic efficiency:</p>
      <ul>
        <li>Preventing costly equipment failures through early detection</li>
        <li>Reducing waste and improving product quality</li>
        <li>Enabling automation and process optimization</li>
        <li>Supporting industries worth trillions of dollars globally</li>
      </ul>
    `,
  },
  {
    id: 4,
    title: "Space Technology: Nuclear Power Beyond Earth",
    excerpt:
      "Understanding how radioisotope thermoelectric generators (RTGs) power deep space missions and Mars rovers.",
    category: "Space Technology",
    author: "James Kim",
    date: "2024-01-08",
    readTime: "9 min read",
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <h2>Nuclear Power in Space Exploration</h2>
      <p>Space missions beyond Earth's orbit require reliable, long-lasting power sources. Nuclear technology, particularly Radioisotope Thermoelectric Generators (RTGs), has enabled some of humanity's greatest space exploration achievements.</p>
      
      <h3>Radioisotope Thermoelectric Generators (RTGs)</h3>
      <p>RTGs convert heat from radioactive decay directly into electricity:</p>
      <ul>
        <li><strong>Plutonium-238:</strong> The primary fuel source with a 87.7-year half-life</li>
        <li><strong>Thermoelectric Conversion:</strong> Heat converted to electricity with no moving parts</li>
        <li><strong>Reliability:</strong> Operates continuously for decades in harsh space environments</li>
        <li><strong>Independence:</strong> Functions regardless of distance from the Sun</li>
      </ul>
      
      <h3>Historic Space Missions Powered by RTGs</h3>
      <p>Nuclear power has enabled groundbreaking space exploration:</p>
      <ul>
        <li><strong>Voyager 1 & 2:</strong> Still operating after 45+ years, now in interstellar space</li>
        <li><strong>Cassini-Huygens:</strong> 13-year mission studying Saturn and its moons</li>
        <li><strong>New Horizons:</strong> First spacecraft to visit Pluto and beyond</li>
        <li><strong>Mars Rovers:</strong> Curiosity and Perseverance exploring the Red Planet</li>
      </ul>
      
      <h3>Advantages of Nuclear Power in Space</h3>
      <p>RTGs offer unique benefits for space missions:</p>
      <ul>
        <li><strong>Long Duration:</strong> Operate for decades without maintenance</li>
        <li><strong>Weather Independent:</strong> Function during dust storms and in shadow</li>
        <li><strong>Compact Design:</strong> High power-to-weight ratio</li>
        <li><strong>Temperature Stability:</strong> Provide waste heat for instrument warming</li>
      </ul>
      
      <h3>Current and Future Applications</h3>
      <p>Nuclear technology continues to enable ambitious space missions:</p>
      <ul>
        <li><strong>Mars Sample Return:</strong> Planned missions to bring Martian samples to Earth</li>
        <li><strong>Europa Clipper:</strong> Studying Jupiter's ice-covered moon</li>
        <li><strong>Dragonfly:</strong> Nuclear-powered helicopter for Titan exploration</li>
        <li><strong>Nuclear Propulsion:</strong> Future missions to outer planets and beyond</li>
      </ul>
      
      <h3>Nuclear Propulsion Systems</h3>
      <p>Beyond power generation, nuclear technology enables advanced propulsion:</p>
      <ul>
        <li><strong>Nuclear Thermal Propulsion:</strong> Higher efficiency than chemical rockets</li>
        <li><strong>Nuclear Electric Propulsion:</strong> High specific impulse for long-duration missions</li>
        <li><strong>Nuclear Pulse Propulsion:</strong> Theoretical systems for interstellar travel</li>
      </ul>
      
      <h3>Economic and Scientific Value</h3>
      <p>Nuclear-powered space missions provide immense returns:</p>
      <ul>
        <li>Scientific discoveries worth billions in knowledge and technology</li>
        <li>Technological innovations with terrestrial applications</li>
        <li>International cooperation and peaceful use of nuclear technology</li>
        <li>Inspiration for future generations of scientists and engineers</li>
      </ul>
      
      <h3>Safety and Environmental Considerations</h3>
      <p>Space nuclear systems are designed with multiple safety features:</p>
      <ul>
        <li>Robust containment systems to prevent radioactive release</li>
        <li>Extensive testing and quality assurance programs</li>
        <li>International safety guidelines and oversight</li>
        <li>Minimal environmental impact compared to mission benefits</li>
      </ul>
    `,
  },
  {
    id: 5,
    title: "Economic Impact: The Isotope Market Analysis",
    excerpt: "A comprehensive analysis of the global isotope market, economic benefits, and future growth projections.",
    category: "Economics",
    author: "Dr. Elena Volkov",
    date: "2024-01-05",
    readTime: "12 min read",
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <h2>The Global Isotope Economy</h2>
      <p>The isotope industry represents a multi-billion dollar market with applications spanning healthcare, industry, agriculture, and research. Understanding its economic impact reveals the true value of nuclear technology beyond energy production.</p>
      
      <h3>Market Size and Growth</h3>
      <p>The global isotope market demonstrates strong growth across all sectors:</p>
      <ul>
        <li><strong>Medical Isotopes:</strong> $5.8 billion market, growing at 8.2% annually</li>
        <li><strong>Industrial Isotopes:</strong> $3.2 billion market, 6.5% annual growth</li>
        <li><strong>Research Isotopes:</strong> $1.4 billion market, 7.1% annual growth</li>
        <li><strong>Total Market:</strong> Expected to reach $15 billion by 2028</li>
      </ul>
      
      <h3>Medical Isotope Economics</h3>
      <p>Healthcare applications dominate the isotope market:</p>
      <ul>
        <li><strong>Diagnostic Procedures:</strong> 40 million procedures annually worldwide</li>
        <li><strong>Cost Effectiveness:</strong> Nuclear medicine procedures cost 50% less than alternatives</li>
        <li><strong>Early Detection:</strong> Saves $3-5 billion annually in healthcare costs</li>
        <li><strong>Therapeutic Applications:</strong> Growing market for targeted cancer treatments</li>
      </ul>
      
      <h3>Industrial Applications Value</h3>
      <p>Industrial isotopes provide significant economic benefits:</p>
      <ul>
        <li><strong>Quality Control:</strong> Prevents billions in product defects and recalls</li>
        <li><strong>Process Optimization:</strong> Improves efficiency by 15-25% in many industries</li>
        <li><strong>Safety Enhancement:</strong> Reduces workplace accidents and insurance costs</li>
        <li><strong>Infrastructure Monitoring:</strong> Extends equipment life by 20-30%</li>
      </ul>
      
      <h3>Agricultural Economic Impact</h3>
      <p>Nuclear techniques in agriculture generate substantial returns:</p>
      <ul>
        <li><strong>Crop Improvement:</strong> New varieties worth $100+ billion in increased yields</li>
        <li><strong>Pest Control:</strong> SIT programs save $1.3 billion annually in crop protection</li>
        <li><strong>Food Safety:</strong> Irradiation prevents $15 billion in foodborne illness costs</li>
        <li><strong>Resource Efficiency:</strong> Optimizes fertilizer and water use, saving billions</li>
      </ul>
      
      <h3>Supply Chain Economics</h3>
      <p>The isotope supply chain involves complex economic considerations:</p>
      <ul>
        <li><strong>Production Costs:</strong> High initial investment, low marginal costs</li>
        <li><strong>Transportation:</strong> Specialized logistics for radioactive materials</li>
        <li><strong>Regulatory Compliance:</strong> Significant costs for safety and security</li>
        <li><strong>International Trade:</strong> Global market worth $2.8 billion in exports</li>
      </ul>
      
      <h3>Research Reactor Economics</h3>
      <p>Research reactors serve as isotope production facilities:</p>
      <ul>
        <li><strong>Multi-purpose Facilities:</strong> Research, training, and isotope production</li>
        <li><strong>Revenue Generation:</strong> Isotope sales offset operational costs</li>
        <li><strong>Economic Multiplier:</strong> Each reactor supports 200-500 jobs</li>
        <li><strong>Innovation Catalyst:</strong> Drives technological advancement and patents</li>
      </ul>
      
      <h3>Future Market Projections</h3>
      <p>Several factors drive continued market growth:</p>
      <ul>
        <li><strong>Aging Population:</strong> Increased demand for medical procedures</li>
        <li><strong>Emerging Markets:</strong> Growing healthcare infrastructure in developing countries</li>
        <li><strong>New Applications:</strong> Targeted alpha therapy and personalized medicine</li>
        <li><strong>Industrial Automation:</strong> Increased use of nuclear gauges and sensors</li>
      </ul>
      
      <h3>Investment Opportunities</h3>
      <p>The isotope industry presents attractive investment prospects:</p>
      <ul>
        <li><strong>Production Facilities:</strong> New reactors and cyclotrons for isotope production</li>
        <li><strong>Technology Development:</strong> Advanced separation and purification techniques</li>
        <li><strong>Distribution Networks:</strong> Specialized logistics and supply chain management</li>
        <li><strong>Application Development:</strong> New uses in emerging technologies</li>
      </ul>
      
      <h3>Economic Challenges</h3>
      <p>The industry faces several economic challenges:</p>
      <ul>
        <li><strong>Supply Security:</strong> Dependence on aging reactor infrastructure</li>
        <li><strong>Regulatory Costs:</strong> Increasing compliance and security requirements</li>
        <li><strong>Competition:</strong> Alternative technologies in some applications</li>
        <li><strong>Public Perception:</strong> Need for education about benefits and safety</li>
      </ul>
    `,
  },
  {
    id: 6,
    title: "Environmental Applications: Green Nuclear Solutions",
    excerpt:
      "How nuclear technologies contribute to environmental monitoring, waste management, and climate change mitigation.",
    category: "Environment",
    author: "Dr. Michael Zhang",
    date: "2024-01-03",
    readTime: "10 min read",
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <h2>Nuclear Technology for Environmental Protection</h2>
      <p>Nuclear techniques play a crucial role in environmental protection, monitoring, and remediation. These applications demonstrate how nuclear technology contributes to sustainability and climate change mitigation.</p>
      
      <h3>Environmental Monitoring</h3>
      <p>Isotope techniques provide precise environmental measurements:</p>
      <ul>
        <li><strong>Water Quality:</strong> Tracing pollution sources and groundwater movement</li>
        <li><strong>Air Pollution:</strong> Monitoring atmospheric transport of contaminants</li>
        <li><strong>Soil Contamination:</strong> Detecting and mapping pollutant distribution</li>
        <li><strong>Ecosystem Health:</strong> Tracking nutrient cycles and biodiversity changes</li>
      </ul>
      
      <h3>Climate Change Research</h3>
      <p>Nuclear techniques contribute to climate science:</p>
      <ul>
        <li><strong>Ice Core Analysis:</strong> Reconstructing past climate conditions</li>
        <li><strong>Ocean Studies:</strong> Tracking ocean acidification and circulation patterns</li>
        <li><strong>Carbon Cycle:</strong> Understanding CO2 sources and sinks</li>
        <li><strong>Paleoclimatology:</strong> Dating and analyzing ancient climate records</li>
      </ul>
      
      <h3>Waste Treatment and Remediation</h3>
      <p>Nuclear technology offers solutions for environmental cleanup:</p>
      <ul>
        <li><strong>Wastewater Treatment:</strong> Electron beam treatment of industrial effluents</li>
        <li><strong>Sludge Processing:</strong> Radiation treatment reduces pathogens and volume</li>
        <li><strong>Soil Remediation:</strong> Breaking down persistent organic pollutants</li>
        <li><strong>Plastic Waste:</strong> Radiation-induced degradation of microplastics</li>
      </ul>
      
      <h3>Biodiversity Conservation</h3>
      <p>Nuclear techniques support conservation efforts:</p>
      <ul>
        <li><strong>Wildlife Tracking:</strong> Radiotelemetry for animal behavior studies</li>
        <li><strong>Population Genetics:</strong> DNA analysis using isotope labeling</li>
        <li><strong>Migration Patterns:</strong> Stable isotope analysis of animal movements</li>
        <li><strong>Ecosystem Dynamics:</strong> Tracing energy and nutrient flows</li>
      </ul>
      
      <h3>Sustainable Agriculture</h3>
      <p>Nuclear techniques promote environmentally friendly farming:</p>
      <ul>
        <li><strong>Precision Agriculture:</strong> Optimizing fertilizer use to reduce runoff</li>
        <li><strong>Biological Pest Control:</strong> Sterile Insect Technique reduces pesticide use</li>
        <li><strong>Drought Resistance:</strong> Developing climate-adapted crop varieties</li>
        <li><strong>Soil Conservation:</strong> Monitoring erosion and implementing protection measures</li>
      </ul>
      
      <h3>Clean Energy Applications</h3>
      <p>Nuclear technology supports renewable energy development:</p>
      <ul>
        <li><strong>Hydrogen Production:</strong> High-temperature nuclear reactors for clean hydrogen</li>
        <li><strong>Desalination:</strong> Nuclear-powered water treatment for arid regions</li>
        <li><strong>Process Heat:</strong> Industrial applications reducing fossil fuel use</li>
        <li><strong>Grid Stability:</strong> Baseload power supporting renewable integration</li>
      </ul>
      
      <h3>Marine Environment Protection</h3>
      <p>Nuclear techniques help protect ocean ecosystems:</p>
      <ul>
        <li><strong>Ocean Pollution:</strong> Tracking plastic and chemical contamination</li>
        <li><strong>Marine Food Chains:</strong> Understanding bioaccumulation of toxins</li>
        <li><strong>Coral Reef Health:</strong> Monitoring bleaching and recovery processes</li>
        <li><strong>Fisheries Management:</strong> Sustainable fishing through population studies</li>
      </ul>
      
      <h3>Atmospheric Research</h3>
      <p>Nuclear techniques advance atmospheric science:</p>
      <ul>
        <li><strong>Ozone Depletion:</strong> Monitoring stratospheric chemistry</li>
        <li><strong>Greenhouse Gases:</strong> Precise measurement of emission sources</li>
        <li><strong>Air Quality:</strong> Real-time monitoring of urban pollution</li>
        <li><strong>Weather Modification:</strong> Cloud seeding and precipitation enhancement</li>
      </ul>
      
      <h3>Economic Benefits of Environmental Applications</h3>
      <p>Environmental nuclear applications provide significant economic value:</p>
      <ul>
        <li><strong>Cost Savings:</strong> Early pollution detection prevents expensive cleanup</li>
        <li><strong>Resource Efficiency:</strong> Optimized use of water, fertilizers, and energy</li>
        <li><strong>Health Benefits:</strong> Reduced environmental health costs</li>
        <li><strong>Sustainable Development:</strong> Supporting green economy growth</li>
      </ul>
      
      <h3>Future Environmental Applications</h3>
      <p>Emerging applications show promise for environmental protection:</p>
      <ul>
        <li><strong>Carbon Capture:</strong> Nuclear-powered CO2 removal technologies</li>
        <li><strong>Ecosystem Restoration:</strong> Accelerated remediation techniques</li>
        <li><strong>Smart Monitoring:</strong> AI-powered environmental sensor networks</li>
        <li><strong>Circular Economy:</strong> Nuclear techniques for waste-to-resource conversion</li>
      </ul>
    `,
  },
]

export default async function BlogArticle({ params }: { params: Promise<{ id: string }> }) {
  const { id: idParam } = await params
  const id = Number.parseInt(idParam)
  const article = blogData.find((post) => post.id === id)

  if (!article) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <div className="pt-24 px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link href="/blog">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    )
  }

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

      <article className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/blog">
              <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800 bg-transparent">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <Badge className={`mb-4 ${getCategoryColor(article.category)}`}>{article.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              {article.title}
            </h1>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">{article.excerpt}</p>

            <div className="flex items-center justify-between text-sm text-gray-400 mb-8">
              <div className="flex items-center space-x-6">
                <span className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {article.author}
                </span>
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(article.date).toLocaleDateString()}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {article.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>

          {/* Article Content */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-8">
              <div
                className="prose prose-invert prose-lg max-w-none
                  prose-headings:text-white prose-headings:font-bold
                  prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:text-purple-300
                  prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-blue-300
                  prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
                  prose-ul:text-gray-300 prose-li:mb-2
                  prose-strong:text-white prose-strong:font-semibold"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </CardContent>
          </Card>

          {/* Related Articles */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {blogData
                .filter((post) => post.id !== id && post.category === article.category)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Card
                    key={relatedPost.id}
                    className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-colors"
                  >
                    <CardContent className="p-6">
                      <Badge className={`mb-3 ${getCategoryColor(relatedPost.category)}`}>{relatedPost.category}</Badge>
                      <h4 className="text-white text-lg font-semibold mb-2 hover:text-purple-300 transition-colors">
                        <Link href={`/blog/${relatedPost.id}`}>{relatedPost.title}</Link>
                      </h4>
                      <p className="text-gray-400 text-sm mb-4">{relatedPost.excerpt}</p>
                      <Link href={`/blog/${relatedPost.id}`}>
                        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </article>

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
