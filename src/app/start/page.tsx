import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const lessons = [
  { id: "circuits", title: "Introduction to Circuits" },
  { id: "1", title: "Introduction to Electricity" },
  { id: "2", title: "Circuits" },
  { id: "3", title: "Conductors and Insulators" },
  { id: "4", title: "Magnetism and Electricity" },
  { id: "5", title: "Energy Conservation" },
  { id: "6", title: "Electrical Safety" },
  { id: "7", title: "Future of Electricity" },
]

export default function LessonsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-indigo-600">Electricity Lessons</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lessons.map((lesson) => (
            <Card key={lesson.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>{lesson.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Link
                  href={`/lessons/${lesson.id}`}
                  className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                >
                  Start Lesson
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

