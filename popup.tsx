import React, { useState } from "react"

import "./style.css"

import useCardSearch from "./hooks/useCardSearch"

function IndexPopup() {
  const [cardNameCandidate, setCardNameCandidate] = useState("")
  const [cardName, setCardName] = useState<string>()
  const { cards, error, isLoading } = useCardSearch(cardName)
  console.log(cards)

  return (
    <div className="p-4 min-h-screen bg-slate-50 dark:bg-slate-800 flex flex-col gap-2 items-center">
      <div className="group relative rounded-2xl w-full border bg-transparent text-slate-900 dark:text-slate-200 shadow-sm transition focus-within:shadow-md dark:border-gray-500 border-slate-300">
        <input
          type="text"
          className="peer w-full bg-transparent outline-none placeholder:text-slate-500 dark:placeholder:text-slate-500 px-4 py-3 text-sm pl-2 pr-2"
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
        className="px-5 py-2.5 rounded-lg w-20 text-sm font-medium text-center text-slate-100 dark:text-slate-200 bg-slate-600 hover:bg-slate-700 focus:ring-2 focus:outline-none focus:ring-slate-400 dark:bg-slate-600 dark:hover:bg-slate-500 dark:focus:ring-slate-400"
        onClick={() => setCardName(cardNameCandidate)}>
        変換
      </button>
      <ul className="w-full divide-slate-500 divide-y">
        {cards.map((card, index) => (
          <li key={`card-${index}`} className="p-1 py-2">
            <div className="grid grid-cols-[1fr_auto] gap-2">
              <div>
                <p className="text-sm font-medium text-slate-800 dark:text-slate-300 truncate">
                  {card.name}
                </p>
                {card.printed_name && (
                  <p className="text-sm text-slate-500 dark:text-slate-400 truncate pl-2">
                    — {card.printed_name}
                  </p>
                )}
              </div>
              <a href={card.scryfall_uri} className="px-2 py-2 rounded-lg w-15 text-sm font-medium text-center text-slate-100 dark:text-slate-200 bg-slate-600 hover:bg-slate-700 focus:ring-2 focus:outline-none focus:ring-slate-400 dark:bg-slate-600 dark:hover:bg-slate-500 dark:focus:ring-slate-400">Scryfall</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default IndexPopup
