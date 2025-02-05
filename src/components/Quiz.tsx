"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface QuizQuestion {
  question: string
  options: string[]
  correctAnswer: number
}

interface QuizProps {
  questions: QuizQuestion[]
}

export const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index)
  }

  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    setSelectedAnswer(null)
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setShowResult(false)
  }

  if (showResult) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Quiz Result</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl mb-4">
            Your score: {score} out of {questions.length}
          </p>
          <Button onClick={resetQuiz} className="bg-blue-500 hover:bg-blue-600 text-white">
            Retake Quiz
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Question {currentQuestion + 1} of {questions.length}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xl mb-4">{questions[currentQuestion].question}</p>
        <div className="space-y-2">
          {questions[currentQuestion].options.map((option, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => handleAnswer(index)}
                className={`w-full text-left justify-start ${
                  selectedAnswer === index ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
                }`}
              >
                {option}
              </Button>
            </motion.div>
          ))}
        </div>
        <Button
          onClick={handleNext}
          disabled={selectedAnswer === null}
          className="mt-4 bg-green-500 hover:bg-green-600 text-white"
        >
          {currentQuestion + 1 === questions.length ? "Finish" : "Next"}
        </Button>
      </CardContent>
    </Card>
  )
}

