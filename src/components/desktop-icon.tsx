"use client"

interface DesktopIconProps {
  icon: string
  label: string
  onClick?: () => void
  className?: string
}

export function DesktopIcon({ icon, label, onClick, className = "" }: DesktopIconProps) {
  return (
    <div
      className={`flex flex-col items-center gap-1 p-2 cursor-pointer hover:bg-primary/20 rounded-sm transition-colors ${className}`}
      onClick={onClick}
    >
      <div className="text-2xl">{icon}</div>
      <span className="text-xs text-center font-medium text-foreground bg-background/80 px-1 rounded">{label}</span>
    </div>
  )
}
