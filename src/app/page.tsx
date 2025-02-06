"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { InteractiveCircuit } from "@/components/Interactivecircuit"
import { ChevronRight, Zap, Book } from "lucide-react"

const topics = [
  { title: "Introduction to Electricity", icon: "⚡" },
  { title: "Circuits and Components", icon: "🔌" },
  { title: "Conductors and Insulators", icon: "🔧" },
  { title: "Magnetism and Electromagnetism", icon: "🧲" },
  { title: "Energy Conservation", icon: "♻️" },
  { title: "Electrical Safety", icon: "🚨" },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl font-extrabold text-white mb-4">Electrify Your Mind</h1>
          <p className="text-xl text-white opacity-80 max-w-2xl mx-auto">
            Dive into the fascinating world of electricity with interactive lessons and challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white/10 backdrop-blur-lg border-none text-white">
            <CardContent className="p-6">
              <Zap className="w-12 h-12 mb-4 text-yellow-400" />
              <h2 className="text-2xl font-bold mb-4">Interactive Circuit</h2>
              <p className="mb-4 opacity-80">Experiment with a real circuit. Turn it on and off to see how it works!</p>
              <InteractiveCircuit />
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-none text-white">
            <CardContent className="p-6">
              <Book className="w-12 h-12 mb-4 text-green-400" />
              <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
              <ul className="space-y-2">
                {topics.map((topic, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="mr-2 text-2xl">{topic.icon}</span>
                    {topic.title}
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button asChild variant="fun" size="lg" className="text-lg font-bold">
            <Link href="/lessons">
              Start Your Electrifying Journey <ChevronRight className="ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

