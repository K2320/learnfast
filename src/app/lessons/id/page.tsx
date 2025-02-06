"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Quiz } from "@/components/Quiz"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { lessonContent as importedLessonContent } from "../lesson-data"

export default function LessonPage() {
  const params = useParams()
  const router = useRouter()
  const lessonId = params.id as string
  const [showQuiz, setShowQuiz] = useState(false)

  // Get the lesson content
  const lesson = importedLessonContent[lessonId]

  // If the lesson doesn't exist, redirect to the lessons page
  useEffect(() => {
    if (!lesson) {
      router.push("/lessons")
    }
  }, [lesson, router])

  // Update lesson progress
  useEffect(() => {
    try {
      const lessonProgress = JSON.parse(localStorage.getItem("lessonProgress") || "[]")
      const currentLessonIndex = lessonProgress.findIndex((l: any) => l.id === lessonId)

      if (currentLessonIndex === -1) {
        lessonProgress.push({ id: lessonId, completed: false, quizScore: null })
      } else if (!lessonProgress[currentLessonIndex].completed) {
        lessonProgress[currentLessonIndex].completed = true
      }
      localStorage.setItem("lessonProgress", JSON.stringify(lessonProgress))
    } catch (error) {
      console.error("Error updating lesson progress:", error)
    }
  }, [lessonId])

  // Handle quiz completion
  const handleQuizComplete = (score: number) => {
    try {
      const lessonProgress = JSON.parse(localStorage.getItem("lessonProgress") || "[]")
      const currentLessonIndex = lessonProgress.findIndex((l: any) => l.id === lessonId)

      if (currentLessonIndex !== -1) {
        lessonProgress[currentLessonIndex].quizScore = score
        localStorage.setItem("lessonProgress", JSON.stringify(lessonProgress))
      }
      router.push("/dashboard")
    } catch (error) {
      console.error("Error saving quiz score:", error)
    }
  }

  // If the lesson doesn't exist, redirect to the lessons page
  if (!lesson) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4 hover:bg-white/50">
            <Link href="/lessons">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Lessons
            </Link>
          </Button>

          <motion.h1
            className="text-4xl font-bold text-indigo-600"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {lesson.title}
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle>Lesson Content</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg whitespace-pre-line">{lesson.content}</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle>Virtual Model</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Interactive model coming soon!</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8 bg-white shadow-lg">
          <CardHeader>
            <CardTitle>Video Lesson</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={lesson.videoUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </CardContent>
        </Card>

        {!showQuiz ? (
          <Button onClick={() => setShowQuiz(true)} variant="fun" size="lg" className="w-full text-lg font-bold">
            Take Quiz
          </Button>
        ) : (
          <Quiz questions={lesson.quiz} onComplete={handleQuizComplete} />
        )}
      </div>
    </div>
  )
}

// src/app/lessons/lesson-data.ts
type Lesson = {
  id: string;
  title: string;
  content: string;
  videoUrl: string;
  quiz: {
    question: string;
    options: string[];
    answer: string;
  }[];
};

export const lessonContent: { [key: string]: Lesson } = {
  "introduction-to-circuits": {
    id: "introduction-to-circuits",
    title: "Introduction to Circuits",
    content: `A circuit is a closed path that allows electricity to flow from one point to another. 
    It typically includes a power source, conductive wires, and various components such as resistors, 
    capacitors, and switches. Understanding circuits is fundamental to working with electricity.
    
    In a basic circuit, electrons flow from the negative terminal of a power source, through the circuit 
    components, and back to the positive terminal. This flow of electrons is what we call electric current.`,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quiz: [
      {
        question: "What is the main purpose of a circuit?",
        options: [
          "To provide a path for electricity to flow",
          "To store electrical energy",
          "To convert electrical energy into mechanical energy",
          "To measure electrical resistance"
        ],
        answer: "To provide a path for electricity to flow"
      }
    ]
  }
  // Add more lessons here
}

