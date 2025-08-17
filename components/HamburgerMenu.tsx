import { Menu } from "lucide-react"
import React, { useEffect, useRef, useState } from "react"

export default function HamburgerMenu({ children }: React.PropsWithChildren) {
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open])

  return (
    <div ref={wrapperRef} className="relative inline-block">
      {/* ハンバーガーアイコン */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 dark:hover:rounded-full">
        <Menu size={24} className="dark:text-slate-300" />
      </button>

      {/* ポップアップメニュー */}
      {open && (
        <div className="absolute left-0 w-48 rounded-xl shadow-lg bg-white dark:bg-slate-600 ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-2">{children}</div>
        </div>
      )}
    </div>
  )
}
