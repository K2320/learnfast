"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

export const InteractiveCircuit: React.FC = () => {
  const [isOn, setIsOn] = useState(false)

  const wireColor = isOn ? "#FFA500" : "#808080"
  const bulbColor = isOn ? "#FFFF00" : "#D3D3D3"
  const switchColor = isOn ? "#00FF00" : "#FF0000"

  return (
    <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden border-2 border-gray-300">
      <svg viewBox="0 0 400 200" className="w-full h-full">
        {/* Battery */}
        <rect x="10" y="80" width="40" height="80" fill="#C0C0C0" stroke="#000000" strokeWidth="2" />
        <line x1="30" y1="70" x2="30" y2="90" stroke="#000000" strokeWidth="4" />
        <line x1="20" y1="80" x2="20" y2="100" stroke="#000000" strokeWidth="2" />
        <line x1="40" y1="80" x2="40" y2="100" stroke="#000000" strokeWidth="2" />

        {/* Wires */}
        <motion.path
          d="M 50 120 H 150 V 50 H 250 V 120 H 350"
          fill="none"
          stroke={wireColor}
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Switch */}
        <motion.line
          x1="150"
          y1="50"
          x2={isOn ? "250" : "200"}
          y2={isOn ? "50" : "100}"}
          stroke={switchColor}
          strokeWidth="4"
          strokeLinecap="round"
          initial={false}
          animate={{ x2: isOn ? 250 : 200, y2: isOn ? 50 : 100 }}
          transition={{ type: "spring", stiffness: 100 }}
        />
        <circle cx="150" cy="50" r="5" fill="#000000" />
        <circle cx="250" cy="50" r="5" fill="#000000" />

        {/* Light Bulb */}
        <motion.circle
          cx="350"
          cy="120"
          r="30"
          fill={bulbColor}
          stroke="#000000"
          strokeWidth="2"
          initial={{ scale: 1 }}
          animate={{ scale: isOn ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <path d="M 350 90 V 70" stroke="#000000" strokeWidth="2" fill="none" />
        <path d="M 350 150 V 170" stroke="#000000" strokeWidth="2" fill="none" />
      </svg>

      <button
        className={`absolute bottom-4 right-4 px-4 py-2 rounded-full text-white ${
          isOn ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
        } transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
        onClick={() => setIsOn(!isOn)}
        aria-label={isOn ? "Turn off the circuit" : "Turn on the circuit"}
      >
        {isOn ? "Turn Off" : "Turn On"}
      </button>
    </div>
  )
}

