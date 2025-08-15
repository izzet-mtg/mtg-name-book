import React, { useState } from "react"

import useCardSearch from "./hooks/useCardSearch"

function IndexPopup() {
  const [cardNameCandidate, setCardNameCandidate] = useState("")
  const [cardName, setCardName] = useState<string>()
  const { cards, error, isLoading } = useCardSearch(cardName)

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
      {cards.map((card, index) => (
        <div key={`card-${index}`}>
          <p>{card.name}</p>
          <p>{card.scryfall_uri}</p>
        </div>
      ))}
    </div>
  )
}

export default IndexPopup
