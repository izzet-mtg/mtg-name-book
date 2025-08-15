import React, { useState } from "react"

import "../style.css"

export type CopyButtonProps = {
  copyText: string
}

function CopyButton({ copyText }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const onClick = () => {
    setCopied(true)
    navigator.clipboard
      .writeText(copyText)
      .then(() => setTimeout(() => setCopied(false), 1500))
  }

  return (
    <div className="relative inline-block">
      <button
        onClick={onClick}
        className="px-2 py-2 rounded-lg w-15 h-10 text-sm text-align font-medium text-slate-100 dark:text-slate-200 bg-slate-600 hover:bg-slate-700 focus:ring-2 focus:outline-none focus:ring-slate-400 dark:bg-slate-600 dark:hover:bg-slate-500 dark:focus:ring-slate-400">
        コピー
      </button>
      {copied && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 flex flex-col items-center">
          <span className="px-3 py-1 text-xs bg-black text-white rounded-lg shadow-lg whitespace-nowrap">
            コピーしました！
          </span>
          <span className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black"></span>
        </div>
      )}
    </div>
  )
}

export default CopyButton
