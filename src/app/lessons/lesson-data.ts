export interface Lesson {
    id: string
    title: string
    content: string
    videoUrl: string
    quiz: {
      question: string
      options: string[]
      correctAnswer: number
    }[]
  }
  
  export const lessonContent: { [key: string]: Lesson } = {
    "introduction-to-circuits": {
      id: "introduction-to-circuits",
      title: "Introduction to Circuits",
      content: `A circuit is a closed path that allows electricity to flow from one point to another. 
      It typically includes a power source, conductive wires, and various components such as resistors, 
      capacitors, and switches. Understanding circuits is fundamental to working with electricity.
      
      In a basic circuit, electrons flow from the negative terminal of a power source, through the circuit 
      components, and back to the positive terminal. This flow of electrons is what we call electric current.`,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      quiz: [
        {
          question: "What is the main purpose of a circuit?",
          options: [
            "To provide a path for electricity to flow",
            "To store electrical energy",
            "To convert electrical energy into mechanical energy",
            "To measure electrical resistance"
          ],
          correctAnswer: 0
        }
      ]
    },
    "introduction-to-electricity": {
      id: "introduction-to-electricity",
      title: "Introduction to Electricity",
      content: `Electricity is a form of energy resulting from the movement of charged particles, 
      typically electrons. It powers our modern world and is fundamental to many technological advancements.
      
      When we talk about electricity, we're really talking about the flow of electrons through a conductor. 
      This flow can be harnessed to do work, like lighting up a bulb or powering a motor.`,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      quiz: [
        {
          question: "What is electricity?",
          options: [
            "A form of energy from moving charged particles",
            "A type of matter",
            "A force of nature",
            "A type of wave",
          ],
          correctAnswer: 0,
        },
      ],
    },
    // Add other lessons with the same structure...
  }