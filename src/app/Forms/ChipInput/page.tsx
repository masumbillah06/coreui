import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/ui-sidebar/breadcrumb"
import { Separator } from "@/components/ui/ui-sidebar/separator"
import { SidebarInset } from "@/components/ui/ui-sidebar/sidebar"
import CoreUIBanner from "@/components/ui/banners/ui-banners"
import ComponentPreview from "@/components/preview/ComponentPreview"
import ChipInputExample from "@/components/preview/forms/chip-inputs/chip-input-1"
import ChipInputVariantsExample from "@/components/preview/forms/chip-inputs/chip-input-2"
import ChipInputSizesExample from "@/components/preview/forms/chip-inputs/chip-input-3"
import ChipInputSelectableExample from "@/components/preview/forms/chip-inputs/chip-input-4"

const codefile = `'use client'

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
`

export default function Page() {
  return (
    <SidebarInset>
      <Header />
      <header className="flex h-12 shrink-0 items-center gap-2 border-b border-slate-300">
        <div className="flex items-center gap-2 px-4">
          <Separator orientation="vertical" className="mr-2 data-vertical:h-4 data-vertical:self-auto" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Forms</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Chip Inputs</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto border-t border-slate-300 bg-slate-100">
        <div className="mx-auto w-full max-w-305 px-4 py-4">
          <div className="mb-5">
            <CoreUIBanner />
          </div>

          <div className="mb-5">
            <ComponentPreview code={codefile}>
                <ChipInputExample/>
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview code={codefile}>
                <ChipInputVariantsExample/>
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview code={codefile}>
                <ChipInputSizesExample/>
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview code={codefile}>
                <ChipInputSelectableExample/>
            </ComponentPreview>
          </div>
        </div>
      </div>

      <Footer />
    </SidebarInset>
  )
}