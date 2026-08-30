'use client'

import { useState } from 'react'

export default function ChipInputExample() {
  const [chips, setChips] = useState([
    'JavaScript',   
    'TypeScript',
    'Accessibility',
  ])
  const [value, setValue] = useState('')

  const addChip = () => {
    const chip = value.trim()

    if (!chip || chips.includes(chip)) return

    setChips((prev) => [...prev, chip])
    setValue('')
  }

  const removeChip = (chipToRemove: string) => {
    setChips((prev) => prev.filter((chip) => chip !== chipToRemove))
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault()
      addChip()
    }

    if (e.key === 'Backspace' && !value && chips.length > 0) {
      removeChip(chips[chips.length - 1])
    }
  }

  return (
    <div className="w-full max-w-md">
      <label
        htmlFor="skillsInputBasic"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-100"
      >
        Skills:
      </label>

      <div className="flex min-h-10 flex-wrap items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-1.5 shadow-sm transition-colors focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900">
        {chips.map((chip) => (
          <span
            key={chip}
            className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2.5 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/40 dark:text-blue-300"
          >
            {chip}

            <button
              type="button"
              onClick={() => removeChip(chip)}
              className="inline-flex size-4 items-center justify-center rounded-full text-blue-600 hover:bg-blue-200 hover:text-blue-900 focus:outline-none dark:text-blue-300 dark:hover:bg-blue-800 dark:hover:text-white"
              aria-label={`Remove ${chip}`}
            >
              ×
            </button>
          </span>
        ))}

        <input
          id="skillsInputBasic"
          name="chipInputBasicExample"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={addChip}
          placeholder={chips.length === 0 ? 'Add a skill...' : ''}
          className="min-w-24 flex-1 border-0 bg-transparent py-1 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:ring-0 dark:text-white dark:placeholder:text-gray-500"
        />
      </div>
    </div>
  )
}
