"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import KidsQuiz from "@/components/kids-quiz"
import AdultQuiz from "@/components/adult-quiz"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, Rocket, Star, ArrowLeft } from "lucide-react"

type QuizType = "selection" | "kids" | "adult"

export default function QuizPage() {
  const [currentQuiz, setCurrentQuiz] = useState<QuizType>("selection")

  const renderQuizSelection = () => (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <Badge className="mb-4 bg-purple-600/20 text-purple-300 border-purple-500/30">Test Your Knowledge</Badge>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
          Space Quizzes
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Challenge yourself with our space-themed quizzes! Choose your difficulty level and test your knowledge of the
          cosmos.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center">
              <Star className="w-8 h-8 text-green-400" />
            </div>
            <CardTitle className="text-white text-2xl">Kids Quiz</CardTitle>
            <CardDescription className="text-gray-400">
              Fun and educational true/false questions about space for young explorers
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="mb-6">
              <div className="flex justify-center items-center gap-4 text-sm text-gray-300 mb-4">
                <span className="flex items-center">
                  <Brain className="w-4 h-4 mr-1 text-green-400" />5 Questions
                </span>
                <span className="flex items-center">
                  <Rocket className="w-4 h-4 mr-1 text-green-400" />
                  True/False
                </span>
              </div>
              <div className="text-xs text-gray-400 mb-4">Perfect for ages 6-12 • Learn fun space facts!</div>
            </div>
            <Button
              onClick={() => setCurrentQuiz("kids")}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              Start Kids Quiz
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center">
              <Brain className="w-8 h-8 text-blue-400" />
            </div>
            <CardTitle className="text-white text-2xl">Adult Quiz</CardTitle>
            <CardDescription className="text-gray-400">
              Advanced multiple choice questions about astronomy and space science
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="mb-6">
              <div className="flex justify-center items-center gap-4 text-sm text-gray-300 mb-4">
                <span className="flex items-center">
                  <Brain className="w-4 h-4 mr-1 text-blue-400" />3 Questions
                </span>
                <span className="flex items-center">
                  <Rocket className="w-4 h-4 mr-1 text-blue-400" />
                  Multiple Choice
                </span>
              </div>
              <div className="text-xs text-gray-400 mb-4">Challenging questions • Test your space knowledge!</div>
            </div>
            <Button onClick={() => setCurrentQuiz("adult")} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Start Adult Quiz
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Fun Facts Section */}
      <section className="mt-20 py-16 bg-gray-900/30 rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Did You Know?</h2>
          <p className="text-gray-400">Amazing space facts to spark your curiosity</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl mb-2">🌟</div>
            <h3 className="text-white font-semibold mb-2">Billions of Stars</h3>
            <p className="text-gray-400 text-sm">Our galaxy contains over 100 billion stars!</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🚀</div>
            <h3 className="text-white font-semibold mb-2">Speed of Light</h3>
            <p className="text-gray-400 text-sm">Light travels at 299,792,458 meters per second</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🪐</div>
            <h3 className="text-white font-semibold mb-2">Saturn&apos;s Density</h3>
            <p className="text-gray-400 text-sm">Saturn is less dense than water and would float!</p>
          </div>
        </div>
      </section>
    </div>
  )

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <section className="pt-24 pb-16 px-4">
        {currentQuiz === "selection" && renderQuizSelection()}

        {currentQuiz !== "selection" && (
          <div className="container mx-auto">
            <div className="mb-8">
              <Button
                onClick={() => setCurrentQuiz("selection")}
                variant="outline"
                className="border-gray-700 text-white hover:bg-gray-800 bg-transparent"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Quiz Selection
              </Button>
            </div>

            <div className="text-center mb-8">
              <Badge
                className={`mb-4 ${currentQuiz === "kids" ? "bg-green-600/20 text-green-300 border-green-500/30" : "bg-blue-600/20 text-blue-300 border-blue-500/30"}`}
              >
                {currentQuiz === "kids" ? "Kids Quiz" : "Adult Quiz"}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                {currentQuiz === "kids" ? "Space Quiz for Kids" : "Advanced Space Quiz"}
              </h1>
            </div>

            {currentQuiz === "kids" && <KidsQuiz />}
            {currentQuiz === "adult" && <AdultQuiz />}
          </div>
        )}
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
