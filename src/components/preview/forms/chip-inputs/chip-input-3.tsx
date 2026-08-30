'use client'

import { useState } from 'react'

type ChipInputProps = {
  id: string
  label: string
  size?: 'sm' | 'md' | 'lg'
  defaultValue?: string[]
  placeholder?: string
}

const sizeStyles = {
  sm: {
    container: 'min-h-8 px-2 py-1 gap-1',
    input: 'py-0.5 text-xs',
    chip: 'px-2 py-0.5 text-xs',
    remove: 'size-3.5 text-xs',
    label: 'text-xs',
  },
  md: {
    container: 'min-h-10 px-3 py-1.5 gap-2',
    input: 'py-1 text-sm',
    chip: 'px-2.5 py-1 text-sm',
    remove: 'size-4 text-sm',
    label: 'text-sm',
  },
  lg: {
    container: 'min-h-12 px-4 py-2 gap-2',
    input: 'py-1.5 text-base',
    chip: 'px-3 py-1.5 text-base',
    remove: 'size-5 text-base',
    label: 'text-base',
  },
}

function ChipInput({
  id,
  label,
  size = 'md',
  defaultValue = [],
  placeholder = 'Add tag...',
}: ChipInputProps) {
  const [chips, setChips] = useState(defaultValue)
  const [value, setValue] = useState('')

  const styles = sizeStyles[size]

  const addChip = () => {
    const chip = value.trim()

    if (!chip || chips.includes(chip)) return

    setChips((prev) => [...prev, chip])
    setValue('')
  }

  const removeChip = (chipToRemove: string) => {
    setChips((prev) => prev.filter((chip) => chip !== chipToRemove))
  }

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault()
      addChip()
    }

    if (
      event.key === 'Backspace' &&
      !value &&
      chips.length > 0
    ) {
      removeChip(chips[chips.length - 1])
    }
  }

  return (
    <div>
      <label
        htmlFor={id}
        className={`mb-1.5 block font-medium text-gray-900 dark:text-gray-100 ${styles.label}`}
      >
        {label}
      </label>

      <div
        className={`flex flex-wrap items-center rounded-md border border-gray-300 bg-white shadow-sm transition-colors focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 ${styles.container}`}
      >
        {chips.map((chip) => (
          <span
            key={chip}
            className={`inline-flex items-center gap-1 rounded-full bg-blue-100 font-medium text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 ${styles.chip}`}
          >
            {chip}

            <button
              type="button"
              onClick={() => removeChip(chip)}
              aria-label={`Remove ${chip}`}
              className={`inline-flex items-center justify-center rounded-full opacity-70 transition-opacity hover:opacity-100 focus:outline-none ${styles.remove}`}
            >
              ×
            </button>
          </span>
        ))}

        <input
          id={id}
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={addChip}
          placeholder={chips.length === 0 ? placeholder : ''}
          className={`min-w-24 flex-1 border-0 bg-transparent text-gray-900 outline-none placeholder:text-gray-400 focus:ring-0 dark:text-white dark:placeholder:text-gray-500 ${styles.input}`}
        />
      </div>
    </div>
  )
}

export default function ChipInputSizesExample() {
  return (
    <div className="w-full max-w-md space-y-3">
      <ChipInput
        id="skillsInputSm"
        label="Small"
        size="sm"
        defaultValue={['HTML']}
        placeholder="Add small tag..."
      />

      <ChipInput
        id="skillsInputMd"
        label="Default"
        defaultValue={['JavaScript']}
        placeholder="Add default tag..."
      />

      <ChipInput
        id="skillsInputLg"
        label="Large"
        size="lg"
        defaultValue={['TypeScript']}
        placeholder="Add large tag..."
      />
    </div>
  )
}
