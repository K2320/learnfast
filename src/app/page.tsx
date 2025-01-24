'use client'

import Link from 'next/link'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Suspense, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { truncateText, formatDate } from './globals'
import * as THREE from 'three'
import ThreeGlobe from 'three-globe'

function Globe() {
  const globeRef = useRef<ThreeGlobe>()

  useEffect(() => {
    if (globeRef.current) {
      const globe = globeRef.current

      // Add Earth texture
      const loader = new THREE.TextureLoader()
      loader.load('/earth-texture.jpg', (texture) => {
        globe.globeImageUrl(texture.image.src)
      })

      // Add atmosphere
      globe.atmosphereColor('lightskyblue')
      globe.atmosphereAltitude(0.1)

      // Add some random points
      const numPoints = 1000
      const points = []
      for (let i = 0; i < numPoints; i++) {
        const lat = (Math.random() - 0.5) * 180
        const lng = (Math.random() - 0.5) * 360
        const size = Math.random() * 7 + 1
        points.push({ lat, lng, size })
      }
      globe.pointsData(points)
      globe.pointAltitude('size')
      globe.pointColor(() => '#ffcb21')
    }
  }, [])

  return <primitive object={new ThreeGlobe()} ref={globeRef} />
}

export default function LandingPage() {
  const description = "Discover the fascinating world of electricity through interactive 3D lessons and cutting-edge technology. Our platform offers a comprehensive curriculum designed for students of all levels."
  const currentDate = new Date()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col">
      <div className="flex-grow flex flex-col md:flex-row items-center justify-center p-8">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">Learn Fast</h1>
          <p className="text-xl mb-8 text-gray-600 max-w-md">
            {truncateText(description, 150)}
          </p>
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
        <div className="md:w-1/2 h-[400px]">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 200]} />
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <spotLight position={[100, 100, 100]} angle={0.15} penumbra={1} />
            <Suspense fallback={null}>
              <Globe />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  )
}

