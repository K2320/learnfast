"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface LessonProgress {
  id: string
  title: string
  completed: boolean
  quizScore?: number
}

export default function DashboardPage() {
  const [userName, setUserName] = useState("")
  const [lessonProgress, setLessonProgress] = useState<LessonProgress[]>([])

  useEffect(() => {
    const storedName = localStorage.getItem("userName")
    if (storedName) {
      setUserName(storedName)
    }

    const storedProgress = localStorage.getItem("lessonProgress")
    if (storedProgress) {
      setLessonProgress(JSON.parse(storedProgress))
    } else {
      // Initialize with default lessons
      const initialProgress: LessonProgress[] = [
        { id: "circuits", title: "Introduction to Circuits", completed: false },
        { id: "1", title: "Introduction to Electricity", completed: false },
        { id: "2", title: "Circuits", completed: false },
        { id: "3", title: "Conductors and Insulators", completed: false },
        { id: "4", title: "Magnetism and Electricity", completed: false },
        { id: "5", title: "Energy Conservation", completed: false },
        { id: "6", title: "Electrical Safety", completed: false },
        { id: "7", title: "Future of Electricity", completed: false },
      ]
      setLessonProgress(initialProgress)
      localStorage.setItem("lessonProgress", JSON.stringify(initialProgress))
    }
  }, [])

  const completedLessons = lessonProgress.filter((lesson) => lesson.completed).length
  const totalLessons = lessonProgress.length
  const progressPercentage = (completedLessons / totalLessons) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-purple-200 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-8 text-indigo-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome back, {userName}!
        </motion.h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-purple-600">Your Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={progressPercentage} className="mb-2" />
            <p className="text-sm text-purple-700">
              You've completed {completedLessons} out of {totalLessons} lessons
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lessonProgress.map((lesson, index) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`${lesson.completed ? "bg-green-100" : "bg-white"}`}>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{lesson.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {lesson.completed ? (
                    <div>
                      <p className="text-green-600">Completed!</p>
                      {lesson.quizScore !== undefined && (
                        <p className="text-sm text-gray-600">Quiz Score: {lesson.quizScore}%</p>
                      )}
                    </div>
                  ) : (
                    <Button asChild variant="fun">
                      <Link href={`/lessons/${lesson.id}`}>Start Lesson</Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

