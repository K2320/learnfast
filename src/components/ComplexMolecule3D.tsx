"use client"

import type React from "react"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import * as THREE from "three"

const Atom: React.FC<{ position: [number, number, number]; color: string }> = ({ position, color }) => (
  <mesh position={position}>
    <sphereGeometry args={[0.2, 32, 32]} />
    <meshStandardMaterial color={color} />
  </mesh>
)

const Bond: React.FC<{ start: [number, number, number]; end: [number, number, number] }> = ({ start, end }) => {
  const position = start.map((coord, index) => (coord + end[index]) / 2) as [number, number, number]
  const direction = new THREE.Vector3().subVectors(new THREE.Vector3(...end), new THREE.Vector3(...start)).normalize()
  const length = new THREE.Vector3(...start).distanceTo(new THREE.Vector3(...end))
  const quaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction)

  return (
    <mesh position={position} quaternion={quaternion}>
      <cylinderGeometry args={[0.05, 0.05, length, 8]} />
      <meshStandardMaterial color="#FFD54F" />
    </mesh>
  )
}

export const ComplexMolecule3D: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002
    }
  })

  return (
    <>
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />

      <group ref={groupRef}>
        <Atom position={[0, 0, 0]} color="#FF4081" />
        <Atom position={[1, 1, 1]} color="#00BCD4" />
        <Atom position={[-1, 1, -1]} color="#4CAF50" />
        <Atom position={[1, -1, -1]} color="#FFC107" />
        <Atom position={[-1, -1, 1]} color="#9C27B0" />

        <Bond start={[0, 0, 0]} end={[1, 1, 1]} />
        <Bond start={[0, 0, 0]} end={[-1, 1, -1]} />
        <Bond start={[0, 0, 0]} end={[1, -1, -1]} />
        <Bond start={[0, 0, 0]} end={[-1, -1, 1]} />

        <Atom position={[2, 2, 2]} color="#FF4081" />
        <Atom position={[3, 3, 3]} color="#00BCD4" />
        <Bond start={[2, 2, 2]} end={[3, 3, 3]} />

        <Atom position={[-2, 2, -2]} color="#4CAF50" />
        <Atom position={[-3, 3, -3]} color="#FFC107" />
        <Bond start={[-2, 2, -2]} end={[-3, 3, -3]} />

        <Atom position={[2, -2, -2]} color="#9C27B0" />
        <Atom position={[3, -3, -3]} color="#FF4081" />
        <Bond start={[2, -2, -2]} end={[3, -3, -3]} />

        <Atom position={[-2, -2, 2]} color="#00BCD4" />
        <Atom position={[-3, -3, 3]} color="#4CAF50" />
        <Bond start={[-2, -2, 2]} end={[-3, -3, 3]} />
      </group>
    </>
  )
}

