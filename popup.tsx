import React, { useState } from "react"

import "./style.css"

import useCardSearch from "./hooks/useCardSearch"

function IndexPopup() {
  const [cardNameCandidate, setCardNameCandidate] = useState("")
  const [cardName, setCardName] = useState<string>()
  const { cards, error, isLoading } = useCardSearch(cardName)

  return (
    <div className="p-4 w-[300px] h-[400px] bg-slate-50 flex flex-col gap-2 items-center">
      <div className="group relative rounded-2xl w-full border bg-transparent text-gray-900 shadow-sm transition focus-within:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 border-slate-300">
        <input
          type="text"
          className="peer w-full bg-transparent outline-none placeholder:text-gray-500 px-4 py-3 text-sm pl-2 pr-2"
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
        className="px-5 py-2.5 rounded-lg w-20 text-sm font-medium text-center text-slate-100 bg-slate-600 hover:bg-slate-700 focus:ring-2 focus:outline-none focus:ring-slate-400 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => setCardName(cardNameCandidate)}>
        変換
      </button>
      <ul className="w-full divide-slate-500">
        {cards.map((card, index) => (
          <li key={`card-${index}`} className="p-1">
            <p className="text-sm font-medium text-slate-800 truncate">
              {card.name}
            </p>
            {card.printed_name && (
              <p className="text-sm text-slate-500 truncate pl-2">
                — {card.printed_name}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default IndexPopup
