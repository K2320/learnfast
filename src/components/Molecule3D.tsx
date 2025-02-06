import type React from "react"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere, Cylinder } from "@react-three/drei"

const Atom = ({ position, color }: { position: [number, number, number]; color: string }) => (
  <Sphere position={position} args={[0.2, 32, 32]}>
    <meshStandardMaterial color={color} />
  </Sphere>
)

const Bond = ({ start, end }: { start: [number, number, number]; end: [number, number, number] }) => {
  const position = start.map((coord, index) => (coord + end[index]) / 2) as [number, number, number]
  const length = Math.sqrt(start.reduce((sum, coord, index) => sum + Math.pow(coord - end[index], 2), 0))

  return (
    <Cylinder position={position} args={[0.05, 0.05, length, 8]} rotation={[Math.PI / 2, 0, 0]}>
      <meshStandardMaterial color="white" />
    </Cylinder>
  )
}

export const Molecule3D: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.5
    }
  })

  return (
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
    </group>
  )
}

