"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { truncateText, formatDate } from "./globals"
import { Canvas } from "@react-three/fiber"

const DynamicComplexMolecule3D = dynamic(
  () => import("@/components/ComplexMolecule3D").then((mod) => mod.ComplexMolecule3D),
  {
    ssr: false,
    loading: () => <p>Loading 3D model...</p>,
  },
)

export default function LandingPage() {
  const description =
    "Dive into the microscopic world of molecules with our interactive 3D models. Explore the building blocks of life and matter through cutting-edge visualization technology."
  const currentDate = new Date()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col">
      <div className="flex-grow flex flex-col md:flex-row items-center justify-center p-8">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">Learn Fast</h1>
          <p className="text-xl mb-8 text-gray-600 max-w-md">{truncateText(description, 150)}</p>
          <p className="text-sm text-gray-500 mb-4">Last updated: {formatDate(currentDate)}</p>
          <div className="space-x-4">
            <Button asChild>
              <Link href="/home">Get Started</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 h-[400px] relative">
          <Canvas>
            <Suspense fallback={null}>
              <DynamicComplexMolecule3D />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  )
}

