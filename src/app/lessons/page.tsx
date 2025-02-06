"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, CircuitBoard, Lightbulb, Magnet, Leaf, Shield, Cpu, ArrowRight } from "lucide-react"

const lessons = [
  {
    id: "introduction-to-circuits",
    title: "Introduction to Circuits",
    icon: CircuitBoard,
    description: "Learn about the basics of electrical circuits and their components.",
  },
  {
    id: "introduction-to-electricity",
    title: "Introduction to Electricity",
    icon: Zap,
    description: "Discover the fundamental concepts of electricity and how it works.",
  },
  {
    id: "circuits-deep-dive",
    title: "Circuits Deep Dive",
    icon: CircuitBoard,
    description: "Explore different types of circuits and their applications.",
  },
  {
    id: "conductors-and-insulators",
    title: "Conductors and Insulators",
    icon: Lightbulb,
    description: "Learn about materials that conduct electricity and those that don't.",
  },
  {
    id: "magnetism-and-electricity",
    title: "Magnetism and Electricity",
    icon: Magnet,
    description: "Understand the relationship between magnetism and electricity.",
  },
  {
    id: "energy-conservation",
    title: "Energy Conservation",
    icon: Leaf,
    description: "Discover ways to conserve electrical energy and why it's important.",
  },
  {
    id: "electrical-safety",
    title: "Electrical Safety",
    icon: Shield,
    description: "Learn essential safety practices when working with electricity.",
  },
  {
    id: "future-of-electricity",
    title: "Future of Electricity",
    icon: Cpu,
    description: "Explore upcoming technologies and innovations in electrical science.",
  },
]

export default function LessonsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4 text-indigo-600">Electricity Lessons</h1>
          <p className="text-xl text-gray-600">Choose a lesson to begin your electrifying journey!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson, index) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <lesson.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">{lesson.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{lesson.description}</p>
                  <Button asChild variant="fun" className="w-full group">
                    <Link href={`/lessons/${lesson.id}`}>
                      Start Lesson
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

   