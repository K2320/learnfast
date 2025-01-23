'use client'

import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const lessonContent = {
  1: {
    title: "Introduction to Electricity",
    content: "Electricity is a form of energy resulting from the movement of charged particles. It powers our modern world and is fundamental to many technological advancements.",
    model: () => (
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#4285F4" />
      </mesh>
    ),
  },
  2: {
    title: "Circuits",
    content: "A circuit is a complete path around which electricity can flow...",
    interactive: "Build a simple circuit by connecting the components!",
  },
  3: {
    title: "Conductors and Insulators",
    content: "Conductors allow electricity to flow easily, while insulators prevent its flow...",
    interactive: "Sort materials into conductors and insulators!",
  },
  4: {
    title: "Magnetism and Electricity",
    content: "Magnetism and electricity are closely related phenomena...",
    interactive: "Move the magnet to generate electricity!",
  },
  5: {
    title: "Energy Conservation",
    content: "Energy conservation is the practice of using energy efficiently...",
    interactive: "Design an energy-efficient home!",
  },
  6: {
    title: "Electrical Safety",
    content: "Electrical safety is crucial to prevent accidents and injuries...",
    interactive: "Identify and fix electrical hazards in a virtual room!",
  },
  7: {
    title: "Future of Electricity",
    content: "The future of electricity involves renewable sources and smart grids...",
    interactive: "Design a city powered by renewable energy sources!",
  },
}

export default function LessonPage({ params }: { params: { id: string } }) {
  const [showQuiz, setShowQuiz] = useState(false)
  const router = useRouter()
  const lesson = lessonContent[params.id as keyof typeof lessonContent]

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">{lesson.title}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Lesson Content</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{lesson.content}</p>
              {!showQuiz && (
                <Button onClick={() => setShowQuiz(true)}>Take Quiz</Button>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Interactive 3D Model</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                {lesson.model && (
                  <Canvas>
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    <Suspense fallback={null}>
                      {lesson.model()}
                      <Environment preset="studio" />
                    </Suspense>
                  </Canvas>
                )}
                {!lesson.model && (
                  <div className="border-2 border-dashed border-gray-300 p-4 mb-4 text-center">
                    <p>{lesson.interactive}</p>
                    <div className="bg-gray-100 p-4 mt-4 rounded">
                      <p>Placeholder for interactive element</p>
                      <p>This will be replaced with an actual interactive component later</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
        {showQuiz && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Quiz</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Question 1:</p>
                  <p>What is the primary source of electrical energy in most power plants?</p>
                </div>
                <div>
                  <p className="font-semibold">Question 2:</p>
                  <p>Explain the difference between AC and DC current.</p>
                </div>
                <div>
                  <p className="font-semibold">Question 3:</p>
                  <p>What safety precautions should be taken when working with electrical devices?</p>
                </div>
              </div>
              <Button onClick={() => router.push('/dashboard')} className="mt-4">Submit Quiz</Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

