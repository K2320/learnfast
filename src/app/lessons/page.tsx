import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const lessons = [
  { id: 1, title: "Introduction to Electricity", icon: "⚡" },
  { id: 2, title: "Circuits and Components", icon: "🔌" },
  { id: 3, title: "Conductors and Insulators", icon: "🔧" },
  { id: 4, title: "Magnetism and Electromagnetism", icon: "🧲" },
  { id: 5, title: "Energy Conservation and Efficiency", icon: "♻️" },
  { id: 6, title: "Electrical Safety and Best Practices", icon: "🚨" },
  { id: 7, title: "Future of Electrical Technology", icon: "🔮" },
]

export default function LessonsPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Electricity Lessons</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lessons.map((lesson) => (
            <Card key={lesson.id}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-2xl mr-2">{lesson.icon}</span>
                  {lesson.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <Link href={`/lessons/${lesson.id}`}>Start Lesson</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

