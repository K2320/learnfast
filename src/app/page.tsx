"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { InteractiveCircuit } from "@/components/Interactivecircuit"
import { ChevronRight, Zap, Book, Trophy } from "lucide-react"

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

          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-lg border-none text-white">
              <CardContent className="p-6">
                <Book className="w-12 h-12 mb-4 text-green-400" />
                <h2 className="text-2xl font-bold mb-2">Comprehensive Lessons</h2>
                <p className="mb-4 opacity-80">From basic concepts to advanced applications, learn it all.</p>
                <Button asChild variant="secondary" className="w-full">
                  <Link href="/lessons">
                    Explore Lessons <ChevronRight className="ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-none text-white">
              <CardContent className="p-6">
                <Trophy className="w-12 h-12 mb-4 text-yellow-400" />
                <h2 className="text-2xl font-bold mb-2">Daily Challenges</h2>
                <p className="mb-4 opacity-80">Test your knowledge with our electrifying daily puzzles.</p>
                <Button asChild variant="secondary" className="w-full">
                  <Link href="/daily-challenge">
                    Start Challenge <ChevronRight className="ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-white/90">
            <Link href="/lessons">
              Start Your Electrifying Journey <ChevronRight className="ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

