"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import * as THREE from "three"

const Atom = ({ position, color }: { position: [number, number, number]; color: string }) => (
  <mesh position={position}>
    <sphereGeometry args={[0.2, 32, 32]} />
    <meshStandardMaterial color={color} />
  </mesh>
)

const Bond = ({ start, end }: { start: [number, number, number]; end: [number, number, number] }) => {
  const position = start.map((coord, index) => (coord + end[index]) / 2) as [number, number, number]
  const direction = new THREE.Vector3().subVectors(new THREE.Vector3(...end), new THREE.Vector3(...start)).normalize()
  const length = new THREE.Vector3(...start).distanceTo(new THREE.Vector3(...end))
  const quaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction)

  return (
    <mesh position={position} quaternion={quaternion}>
      <cylinderGeometry args={[0.05, 0.05, length, 8]} />
      <meshStandardMaterial color="white" />
    </mesh>
  )
}

export function ComplexMolecule3D() {
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
        <Atom position={[0, 0, 0]} color="#ff4136" />
        <Atom position={[1, 1, 1]} color="#0074d9" />
        <Atom position={[-1, 1, -1]} color="#2ecc40" />
        <Atom position={[1, -1, -1]} color="#ffdc00" />
        <Atom position={[-1, -1, 1]} color="#b10dc9" />

        <Bond start={[0, 0, 0]} end={[1, 1, 1]} />
        <Bond start={[0, 0, 0]} end={[-1, 1, -1]} />
        <Bond start={[0, 0, 0]} end={[1, -1, -1]} />
        <Bond start={[0, 0, 0]} end={[-1, -1, 1]} />

        <Atom position={[2, 2, 2]} color="#ff4136" />
        <Atom position={[3, 3, 3]} color="#0074d9" />
        <Bond start={[2, 2, 2]} end={[3, 3, 3]} />

        <Atom position={[-2, 2, -2]} color="#2ecc40" />
        <Atom position={[-3, 3, -3]} color="#ffdc00" />
        <Bond start={[-2, 2, -2]} end={[-3, 3, -3]} />

        <Atom position={[2, -2, -2]} color="#b10dc9" />
        <Atom position={[3, -3, -3]} color="#ff4136" />
        <Bond start={[2, -2, -2]} end={[3, -3, -3]} />

        <Atom position={[-2, -2, 2]} color="#0074d9" />
        <Atom position={[-3, -3, 3]} color="#2ecc40" />
        <Bond start={[-2, -2, 2]} end={[-3, -3, 3]} />
      </group>
    </>
  )
}

