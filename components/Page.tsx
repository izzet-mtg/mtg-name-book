import React from "react"

import "../style.css"

function IndexPopup({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="p-4 min-h-screen bg-slate-50 dark:bg-slate-800">
      {children}
    </div>
  )
}

export default IndexPopup
