import React, { useState } from "react"

function IndexPopup() {
  const [cardNameCandidate, setCardNameCandidate] = useState("")
  const [cardName, setCardName] = useState("")

  return (
    <div>
      <input
        id="origin-card-name"
        type="text"
        onInput={(event: React.FormEvent<HTMLInputElement>) =>
          setCardNameCandidate(event.currentTarget.value)
        }
      />
      <button onClick={() => setCardName(cardNameCandidate)}>変換</button>
      <p>{cardName}</p>
    </div>
  )
}

export default IndexPopup
