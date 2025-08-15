import React, { useState } from "react"

import "../style.css"

function Spinner() {
  return (
    <div className="flex items-center justify-center h-40">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}

export default Spinner
