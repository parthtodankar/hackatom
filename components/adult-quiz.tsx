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
    question: "What is the average cost of a cancer scan using isotope-based imaging — compared to surgeries or biopsies?",
    options: ["5x cheaper", "Same as surgery", "10x more expensive", "Twice as expensive"],
    correctAnswer: 1,
    explanation:
      "Isotope-based cancer scans like PET or nuclear medicine scans are generally much less expensive than invasive surgeries or biopsies. While the exact cost varies, these scans help diagnose disease earlier and often avoid the higher costs of surgery, hospital stays, or biopsies. Some studies note they can cost significantly less, up to five times cheaper, due to less invasiveness and reduced complications",
  },
  {
    id: 2,
    question: "Which sectors have quietly benefited from nuclear isotope technology—without most people noticing?",
    options: ["Video gaming and entertainment", "Healthcare, farming, and quality control in factories", "Banking and cryptocurrency", "Automotive manufacturing"],
    correctAnswer: 2,
    explanation:
      "Nuclear isotopes are widely used beyond healthcare in agriculture (e.g., mutation breeding for better crops) and industry (e.g., radiography to detect flaws in materials). These applications improve medical diagnosis and treatment, increase crop yields in harsh climates, and ensure quality in manufacturing. These contributions often go unnoticed by the general public but are crucial in these essential sectors.",
  },
  {
    id: 3,
    question: "Which of these technologies lets us find cracks in airplanes, oil pipes, or bridges—without ever cutting them open?",
    options: ["Ultrasonic sonar", "Industrial isotope radiography", "Magnetic fingerprinting", "Thermal imaging"],
    correctAnswer: 2,
    explanation:
      "Industrial radiography, using radioactive isotopes, allows non-destructive testing of metal structures by passing radiation through materials to reveal internal flaws like cracks or corrosion. This method safeguards infrastructure without dismantling or damaging components, unlike invasive inspection methods.",
  },
  {
    id: 4,
    question: "How much can mutation-bred crops increase agricultural yield in harsh climates?",
    options: ["5–10%", "20–40%", "No increase", "50–60%"],
    correctAnswer: 2,
    explanation:
      "Mutation breeding uses radiation to induce genetic changes in crops, creating varieties that are more resilient to drought, pests, and harsh environments. This has been shown to increase yields by 20–40% in challenging climates, improving food security and farming sustainability worldwide.",
  },
  {
    id: 5,
    question: "Which technology can detect cancer before symptoms even appear—giving patients a head start?",
    options: ["Regular health checkups", "Nuclear imaging with Technetium-99m", "Smart watches that count steps", "DNA sequencing"],
    correctAnswer: 2,
    explanation:
      "Nuclear imaging, particularly with isotopes like Technetium-99m, allows detection of cancerous growths at a molecular level much earlier than physical symptoms occur. This early detection improves outcomes by enabling timely treatment and better prognoses.",
  },
  {
    id: 6,
    question: "What percentage of global food waste could be reduced with isotope-based food irradiation?",
    options: ["1–3%", "5–10%", " Up to 25%", "Over 50%"],
    correctAnswer: 3,
    explanation:
      "Isotope-based food irradiation (using gamma rays from isotopes like Cobalt-60) kills bacteria and pests, slows spoilage, and extends shelf life. This technology could reduce food waste by up to a quarter globally by preserving food quality during storage and transport.",
  },
  {
    id: 7,
    question: "Which of these quietly supports food export quality and shelf life in many countries?",
    options: ["Vacuum sealing in shiny plastic", "Gamma irradiation using Cobalt-60", "Using perfume sprays on fruits", "Refrigerated transport"],
    correctAnswer: 2,
    explanation:
      "Gamma irradiation is used extensively worldwide to sterilize food for export, ensuring it remains fresh longer and meets sanitary standards. This improves food safety, extends shelf life, and prevents contamination during shipping.",
  },
  {
    id: 8,
    question: "Which technology helps diagnose organ issues without surgery or opening the body?",
    options: ["High-frequency stethoscopes", "Nuclear medicine scans with isotopes", "Thermal photography", "X-ray imaging alone"],
    correctAnswer: 2,
    explanation:
      "Nuclear medicine scans use radioactive isotopes to create functional images of organs, detecting abnormalities like tumors or blockages without invasive procedures, unlike biopsies or surgeries.",
  },
  {
    id: 9,
    question: "How many countries have adopted nuclear medicine technology for disease diagnosis and treatment?",
    options: ["50", " 120+", "20", "80"],
    correctAnswer: 2,
    explanation:
      "Over 120 countries have integrated nuclear medicine into healthcare, using isotope-based technologies for diagnostics and therapies, reflecting its global acceptance and benefit in managing diseases like cancer and heart conditions.",
  },
  {
    id: 10,
    question: "Which technology is used to sterilize millions of medical tools—without heat, chemicals, or water?",
    options: ["UV light sanitation", "Gamma irradiation from isotopes", "Hydrogen peroxide sprays", "Autoclave sterilization"],
    correctAnswer: 2,
    explanation:
      "Gamma irradiation sterilizes medical instruments at scale using radioactive isotopes (commonly Cobalt-60), effectively killing pathogens without thermal or chemical methods, preserving tool integrity and safety in healthcare.",
  }
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
