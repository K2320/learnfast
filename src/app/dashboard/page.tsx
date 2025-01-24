"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function DashboardPage() {
  const [user, setUser] = useState({ firstName: "", lastName: "" })
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // In a real app, you'd fetch this from an API or local storage
    setUser({ firstName: "John", lastName: "Doe" })
    setProgress(45) // Set initial progress to 45%
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Your Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>
                Welcome, {user.firstName} {user.lastName}!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Your Progress</h3>
              <Progress value={progress} className="mb-2" />
              <p className="text-sm text-gray-600">You've completed {progress}% of the lessons</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent Quiz Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Introduction to Electricity</p>
                  <p className="text-sm text-gray-600">Score: 8/10</p>
                </div>
                <div>
                  <p className="font-semibold">Circuits and Components</p>
                  <p className="text-sm text-gray-600">Score: 7/10</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <Button asChild className="mt-8">
          <Link href="/lessons">Continue Learning</Link>
        </Button>
      </div>
    </div>
  )
}

