"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog"

export function NameInputModal() {
  const [open, setOpen] = useState(true)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const handleSubmit = () => {
    // In a real app, you'd save this to an API or local storage
    console.log("Name submitted:", firstName, lastName)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <div>
          <DialogTitle>Welcome to Learn Fast!</DialogTitle>
        </div>
        <div className="grid gap-4 py-4">
          <Input placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <Input placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
          <Button onClick={handleSubmit}>Start Learning</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

