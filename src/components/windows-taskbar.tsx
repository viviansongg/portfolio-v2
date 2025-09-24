"use client"

import { useState, useEffect } from "react"
import { Button } from "../components/ui/button"

export function WindowsTaskbar() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed bottom-0 left-0 right-0 h-10 retro-taskbar flex items-center justify-between px-2 z-50">
      <div className="flex items-center gap-2">
        <Button className="win95-button h-8 px-3 text-xs font-bold">💖 Start</Button>
        <div className="flex gap-1">
          <a href="https://drive.google.com/file/d/1OGSQJzmIGdAph5yDgpgFG4yRAHPtc0Z8/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <Button className="win95-button h-8 px-2 text-xs">📁 Resume</Button>
          </a>
          <a href="https://github.com/viviansongg" target="_blank" rel="noopener noreferrer">
            <Button className="win95-button h-8 px-2 text-xs">💻 GitHub</Button>
          </a>
          <a href="https://www.linkedin.com/in/vivian-songg/" target="_blank" rel="noopener noreferrer">
            <Button className="win95-button h-8 px-2 text-xs">💻 LinkedIn</Button>
          </a>
        </div>
      </div>
      <div className="win95-button h-8 px-3 pb-0.5 text-xs font-mono">
        {currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </div>
    </div>
    
  )
}
