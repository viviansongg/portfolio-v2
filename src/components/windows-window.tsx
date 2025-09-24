"use client"

import React from "react"

import { type ReactNode, useState, useRef } from "react"
import { Button } from "../components/ui/button"
import { X, Minus, Square } from "lucide-react"

interface WindowsWindowProps {
  title: string
  children: ReactNode
  className?: string
  defaultMinimized?: boolean
  onClose?: () => void
}

export function WindowsWindow({
  title,
  children,
  className = "",
  defaultMinimized = false,
  onClose,
}: WindowsWindowProps) {
  const [isMaximized, setIsMaximized] = useState(false)
  const [position, setPosition] = useState({ x: Math.random() * 200 + 50, y: Math.random() * 100 + 50 })
  const [size, setSize] = useState({ width: 400, height: 300 })
  const [originalSize, setOriginalSize] = useState({ width: 400, height: 300 })
  const [originalPosition, setOriginalPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const [resizeDirection, setResizeDirection] = useState("")
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [resizeOffset, setResizeOffset] = useState({ x: 0, y: 0 })
  const windowRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMaximized) return // Don't allow dragging when maximized

    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    })
    setIsDragging(true)
    e.preventDefault() // Prevent text selection during drag
  }

  const handleResizeMouseDown = (e: React.MouseEvent, direction: string) => {
    if (isMaximized) return

    e.stopPropagation() // Prevent triggering drag
    setResizeDirection(direction)
    setResizeOffset({
      x: e.clientX,
      y: e.clientY,
    })
    setIsResizing(true)
    e.preventDefault()
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      const newX = Math.max(0, Math.min(window.innerWidth - size.width, e.clientX - dragOffset.x))
      const newY = Math.max(0, Math.min(window.innerHeight - size.height, e.clientY - dragOffset.y))

      setPosition({
        x: newX,
        y: newY,
      })
    }

    if (isResizing) {
      const deltaX = e.clientX - resizeOffset.x
      const deltaY = e.clientY - resizeOffset.y

      let newWidth = size.width
      let newHeight = size.height
      let newX = position.x
      let newY = position.y

      if (resizeDirection.includes("right")) {
        newWidth = Math.max(200, size.width + deltaX)
      }
      if (resizeDirection.includes("left")) {
        newWidth = Math.max(200, size.width - deltaX)
        newX = position.x + deltaX
      }
      if (resizeDirection.includes("bottom")) {
        newHeight = Math.max(150, size.height + deltaY)
      }
      if (resizeDirection.includes("top")) {
        newHeight = Math.max(150, size.height - deltaY)
        newY = position.y + deltaY
      }

      if (newX + newWidth > window.innerWidth) {
        newWidth = window.innerWidth - newX
      }
      if (newY + newHeight > window.innerHeight) {
        newHeight = window.innerHeight - newY
      }
      if (newX < 0) {
        newWidth += newX
        newX = 0
      }
      if (newY < 0) {
        newHeight += newY
        newY = 0
      }

      setSize({ width: newWidth, height: newHeight })
      setPosition({ x: newX, y: newY })
      setResizeOffset({ x: e.clientX, y: e.clientY })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    setIsResizing(false)
    setResizeDirection("")
  }

  const handleMaximize = () => {
    if (isMaximized) {
      // Restore to original size and position
      setSize(originalSize)
      setPosition(originalPosition)
      setIsMaximized(false)
    } else {
      // Save current size and position before maximizing
      setOriginalSize(size)
      setOriginalPosition(position)
      setSize({ width: window.innerWidth - 16, height: window.innerHeight - 16 })
      setPosition({ x: 8, y: 8 })
      setIsMaximized(true)
    }
  }

  React.useEffect(() => {
    if (isDragging || isResizing) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
      return () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
      }
    }
  }, [isDragging, isResizing, dragOffset, resizeOffset, size, position])

  return (
    <div
      ref={windowRef}
      className={`win95-window fixed z-40 ${className}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: 0,
        top: 0,
        width: `${size.width}px`,
        height: `${size.height}px`,
      }}
    >
      {/* Title bar */}
      <div
        className={`win95-titlebar flex items-center justify-between ${!isMaximized ? "cursor-move" : ""}`}
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-2">
          <span className="text-sm">💖</span>
          <span>{title}</span>
        </div>
        <div className="flex gap-1">
          <Button size="sm" className="win95-button h-5 w-5 p-0 text-xs" onClick={onClose}>
            <Minus className="h-3 w-3" />
          </Button>
          <Button size="sm" className="win95-button h-5 w-5 p-0 text-xs" onClick={handleMaximize}>
            <Square className="h-3 w-3" />
          </Button>
          <Button
            size="sm"
            className="win95-button h-5 w-5 p-0 text-xs hover:bg-destructive hover:text-destructive-foreground"
            onClick={onClose}
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      </div>

      {/* Window content */}
      <div className="p-4 bg-card overflow-auto" style={{ height: `${size.height - 32}px` }}>
        {children}
      </div>

      {!isMaximized && (
        <>
          {/* Corner handles */}
          <div
            className="absolute top-0 left-0 w-2 h-2 cursor-nw-resize"
            onMouseDown={(e) => handleResizeMouseDown(e, "top-left")}
          />
          <div
            className="absolute top-0 right-0 w-2 h-2 cursor-ne-resize"
            onMouseDown={(e) => handleResizeMouseDown(e, "top-right")}
          />
          <div
            className="absolute bottom-0 left-0 w-2 h-2 cursor-sw-resize"
            onMouseDown={(e) => handleResizeMouseDown(e, "bottom-left")}
          />
          <div
            className="absolute bottom-0 right-0 w-2 h-2 cursor-se-resize"
            onMouseDown={(e) => handleResizeMouseDown(e, "bottom-right")}
          />

          {/* Edge handles */}
          <div
            className="absolute top-0 left-2 right-2 h-1 cursor-n-resize"
            onMouseDown={(e) => handleResizeMouseDown(e, "top")}
          />
          <div
            className="absolute bottom-0 left-2 right-2 h-1 cursor-s-resize"
            onMouseDown={(e) => handleResizeMouseDown(e, "bottom")}
          />
          <div
            className="absolute left-0 top-2 bottom-2 w-1 cursor-w-resize"
            onMouseDown={(e) => handleResizeMouseDown(e, "left")}
          />
          <div
            className="absolute right-0 top-2 bottom-2 w-1 cursor-e-resize"
            onMouseDown={(e) => handleResizeMouseDown(e, "right")}
          />
        </>
      )}
    </div>
  )
}
