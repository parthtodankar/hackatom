"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, RotateCcw } from "lucide-react"

interface Question {
  id: number
  question: string
  answer: boolean
  explanation: string
}

const questions: Question[] = [
  {
    id: 1,
    question: "Radioactive isotopes are only used in bombs.",
    answer: false,
    explanation:
      "Radioactive isotopes are used in medicine, farming, food safety, and industry—not just in weapons. Doctors use them to scan organs and treat cancer, and scientists use them to help crops grow better.",
  },
  {
    id: 2,
    question: "All radiation is dangerous.",
    answer: false,
    explanation:
      "Radiation can be harmful in large amounts, but in small, controlled doses, it helps treat cancer, take X-rays, and save lives. Doctors and scientists use it safely every day.",
  },
  {
    id: 3,
    question: "Scientists use isotopes to learn how water moves through soil and plants, which helps during climate problems like droughts.",
    answer: true,
    explanation: "Scientists use special isotopes called tracers to follow how water flows underground and inside plants. This helps them understand how to save water and grow food better during droughts, which are becoming more common because of global warming.",
  },
  {
    id: 4,
    question: "Radiation can help create better seeds that grow into stronger plants.",
    answer: true,
    explanation: "This is called mutation breeding. Radiation is used to make seeds grow into crops that are healthier, faster-growing, and disease-resistant. ",
  },
  {
    id: 5,
    question: "Can radioactive isotopes be used to check if bridges are safe and strong?",
    answer: true,
    explanation:
      "Special isotopes are used like tiny spies in concrete or metal to see if there are cracks or damage in things like bridges and buildings, helping engineers keep them safe.",
  },
  {
    id: 6,
    question: "Is it true that food can be made safer to eat with radiation?",
    answer: true,
    explanation:
      "Scientists use radiation to kill germs and pests in food, which helps keep it fresh longer and prevents sickness. This is called food irradiation",
  },
  {
    id: 7,
    question: "Is radon gas from nuclear power plants the biggest radiation risk in your home?",
    answer: false,
    explanation:
      "Most people get more radiation at home from naturally occurring radon gas in the ground, not from nearby nuclear power plants. Good ventilation can help reduce this risk.",
  },
  {
    id: 8,
    question: "Radioisotopes can help doctors see inside your body without surgery.",
    answer: true,
    explanation:
      "Doctors can give you a safe, tiny amount of radioactive material that helps special cameras see how your organs are working, like taking a picture of your heart or bones",
  },
  {
    id: 9,
    question: "Radioactive isotopes are only made in big factories and power plants.",
    answer: false,
    explanation:
      "Some radioactive isotopes are found naturally in the ground, air, and even inside our bodies, while others are made in labs or special machines.",
  },
  {
    id: 10,
    question: "Can radioisotopes help find leaks in underground pipes?",
    answer: true,
    explanation:
      "Engineers can put a tiny, safe amount of radioactive material in pipes. Special detectors then find exactly where leaks are, saving time and resources",
  }
]

export default function KidsQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleAnswer = (answer: boolean) => {
    setSelectedAnswer(answer)
    setShowResult(true)

    if (answer === questions[currentQuestion].answer) {
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
    if (percentage === 100) return "🌟 Perfect! You're a nuclear expert!"
    if (percentage >= 80) return "🚀 Excellent! You know a lot about Nuclear Science!"
    if (percentage >= 60) return "⭐ Good job! Keep learning about Nuclear Science!"
    return "🌙 Nice try! Keep exploring to learn more!"
  }

  if (quizCompleted) {
    return (
      <Card className="bg-gray-900/50 border-gray-800 max-w-2xl mx-auto">
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
    <Card className="bg-gray-900/50 border-gray-800 max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center mb-4">
          <Badge className="bg-green-600/20 text-green-300 border-green-500/30">
            Question {currentQuestion + 1} of {questions.length}
          </Badge>
          <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30">Score: {score}</Badge>
        </div>
        <CardTitle className="text-white text-2xl">{questions[currentQuestion].question}</CardTitle>
      </CardHeader>
      <CardContent>
        {!showResult ? (
          <div className="flex gap-4 justify-center">
            <Button
              onClick={() => handleAnswer(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
              size="lg"
            >
              ✓ True
            </Button>
            <Button
              onClick={() => handleAnswer(false)}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg"
              size="lg"
            >
              ✗ False
            </Button>
          </div>
        ) : (
          <div className="text-center">
            <div className="mb-4">
              {selectedAnswer === questions[currentQuestion].answer ? (
                <div className="flex items-center justify-center text-green-400 text-xl mb-2">
                  <CheckCircle className="w-8 h-8 mr-2" />
                  Correct!
                </div>
              ) : (
                <div className="flex items-center justify-center text-red-400 text-xl mb-2">
                  <XCircle className="w-8 h-8 mr-2" />
                  Not quite!
                </div>
              )}
            </div>
            <p className="text-gray-300 mb-6 text-lg">{questions[currentQuestion].explanation}</p>
            <Button onClick={nextQuestion} className="bg-purple-600 hover:bg-purple-700 text-white">
              {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
