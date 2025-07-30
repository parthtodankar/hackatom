"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, RotateCcw } from "lucide-react"

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is the closest star system to our Solar System?",
    options: ["Sirius", "Alpha Centauri", "Vega", "Betelgeuse"],
    correctAnswer: 1,
    explanation:
      "Alpha Centauri is the closest star system to our Solar System, located approximately 4.37 light-years away. It's actually a triple star system consisting of Alpha Centauri A, B, and Proxima Centauri.",
  },
  {
    id: 2,
    question: "Which planet in our solar system has the most moons?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    correctAnswer: 1,
    explanation:
      "Saturn has the most moons with 146 confirmed natural satellites as of 2023. Jupiter follows closely with 95 confirmed moons. Saturn's moon count includes its spectacular ring system particles.",
  },
  {
    id: 3,
    question: "What is the name of the theoretical boundary around a black hole beyond which nothing can escape?",
    options: ["Photon Sphere", "Ergosphere", "Event Horizon", "Schwarzschild Radius"],
    correctAnswer: 2,
    explanation:
      "The Event Horizon is the theoretical boundary around a black hole beyond which nothing, not even light, can escape. It's named after the fact that events occurring within this boundary cannot affect an outside observer.",
  },
]

export default function AdultQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
    setShowResult(true)

    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setQuizCompleted(false)
  }

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100
    if (percentage === 100) return "🏆 Outstanding! You have excellent knowledge of space science!"
    if (percentage >= 67) return "🌟 Great work! You have a solid understanding of astronomy!"
    if (percentage >= 33) return "🚀 Good effort! Consider exploring more about space science!"
    return "🌌 Keep learning! The universe has many fascinating secrets to discover!"
  }

  if (quizCompleted) {
    return (
      <Card className="bg-gray-900/50 border-gray-800 max-w-3xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-white text-3xl mb-4">Quiz Complete! 🎉</CardTitle>
          <div className="text-6xl font-bold text-purple-400 mb-2">
            {score}/{questions.length}
          </div>
          <CardDescription className="text-xl text-gray-300">{getScoreMessage()}</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Button onClick={resetQuiz} className="bg-purple-600 hover:bg-purple-700 text-white">
            <RotateCcw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-gray-900/50 border-gray-800 max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center mb-4">
          <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30">
            Question {currentQuestion + 1} of {questions.length}
          </Badge>
          <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30">Score: {score}</Badge>
        </div>
        <CardTitle className="text-white text-2xl">{questions[currentQuestion].question}</CardTitle>
      </CardHeader>
      <CardContent>
        {!showResult ? (
          <div className="grid gap-3">
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleAnswer(index)}
                variant="outline"
                className="border-gray-700 text-white hover:bg-purple-600/20 hover:border-purple-500 bg-transparent text-left justify-start p-4 h-auto"
              >
                <span className="font-semibold mr-3 text-purple-400">{String.fromCharCode(65 + index)}.</span>
                {option}
              </Button>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <div className="mb-4">
              {selectedAnswer === questions[currentQuestion].correctAnswer ? (
                <div className="flex items-center justify-center text-green-400 text-xl mb-2">
                  <CheckCircle className="w-8 h-8 mr-2" />
                  Correct!
                </div>
              ) : (
                <div className="flex items-center justify-center text-red-400 text-xl mb-2">
                  <XCircle className="w-8 h-8 mr-2" />
                  Incorrect
                </div>
              )}
              {selectedAnswer !== questions[currentQuestion].correctAnswer && (
                <p className="text-yellow-400 mb-2">
                  Correct answer: {String.fromCharCode(65 + questions[currentQuestion].correctAnswer)}.{" "}
                  {questions[currentQuestion].options[questions[currentQuestion].correctAnswer]}
                </p>
              )}
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">{questions[currentQuestion].explanation}</p>
            <Button onClick={nextQuestion} className="bg-purple-600 hover:bg-purple-700 text-white">
              {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
