import React from "react"

import "../style.css"

function ErrorBox({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="border border-red-500 bg-red-100 text-red-700 px-4 py-2 rounded">
      {children}
    </div>
  )
}

export default ErrorBox
