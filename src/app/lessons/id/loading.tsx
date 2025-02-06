import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LessonLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="h-10 w-32 bg-gray-200 rounded animate-pulse mb-4" />
          <div className="h-12 w-3/4 bg-gray-200 rounded animate-pulse" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle>
                <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-4/6 bg-gray-200 rounded animate-pulse" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle>
                <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded animate-pulse" />
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8 bg-white shadow-lg">
          <CardHeader>
            <CardTitle>
              <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded animate-pulse" />
          </CardContent>
        </Card>

        <div className="h-12 w-full bg-gray-200 rounded animate-pulse" />
      </div>
    </div>
  )
}

