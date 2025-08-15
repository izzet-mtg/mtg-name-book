import React, { useState } from "react"

import "./style.css"

import useCardSearch from "./hooks/useCardSearch"

function IndexPopup() {
  const [cardNameCandidate, setCardNameCandidate] = useState("")
  const [cardName, setCardName] = useState<string>()
  const { cards, error, isLoading } = useCardSearch(cardName)

  return (
    <div className="p-4 w-[300px] h-[400px] dark:border-token-border-medium overflow-hidden border-s border-gray-100">
      <div className="group relative flex items-center rounded-2xl border bg-white text-gray-900 shadow-sm transition focus-within:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 border-gray-300">
        <input
          type="text"
          className="peer w-full bg-transparent outline-none placeholder:text-gray-400 disabled:cursor-not-allowed disabled:text-gray-400 px-4 py-3 text-sm pl-2 pr-2"
          placeholder="検索"
          onInput={(event: React.FormEvent<HTMLInputElement>) =>
            setCardNameCandidate(event.currentTarget.value)
          }
          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === "Enter") {
              event.preventDefault()
              setCardName(event.currentTarget.value)
            }
          }}
        />
      </div>
      <button
        className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => setCardName(cardNameCandidate)}>
        変換
      </button>
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
