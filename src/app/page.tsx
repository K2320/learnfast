"use client"

import React, { Suspense } from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { truncateText, formatDate } from "./globals"

const DynamicCanvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), {
  ssr: false,
})

const DynamicComplexMolecule3D = dynamic(
  () => import("@/components/ComplexMolecule3D").then((mod) => mod.ComplexMolecule3D),
  {
    ssr: false,
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
          <DynamicCanvas camera={{ position: [0, 0, 10], fov: 75 }}>
            <Suspense fallback={null}>
              <DynamicComplexMolecule3D />
            </Suspense>
          </DynamicCanvas>
        </div>
      </div>
    </div>
  )
}

