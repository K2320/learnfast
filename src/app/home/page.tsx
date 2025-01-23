import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Welcome to Learn Fast</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Start Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Begin your journey into the fascinating world of electricity with our interactive lessons.</p>
              <Button asChild>
                <Link href="/lessons">Explore Lessons</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Track Your Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Monitor your learning journey and see how far you've come with our detailed analytics.</p>
              <Button asChild>
                <Link href="/dashboard">View Dashboard</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

