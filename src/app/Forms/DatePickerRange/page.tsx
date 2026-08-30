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
import DateRangePickerDaysExample from "@/components/preview/forms/date-picker-range/date-picker-range-1"
import DateRangePickerDaysWithTimePickerExample from "@/components/preview/forms/date-picker-range/date-picker-range-2"
import DateRangePickerWeeksExample from "@/components/preview/forms/date-picker-range/date-picker-range-3"
import DateRangePickerYearsExample from "@/components/preview/forms/date-picker-range/date-picker-range-4"

const codefile=`'use client'

import { useState } from 'react'

type DateRangePickerProps = {
  label?: string
  startDate?: string
  endDate?: string
  onStartDateChange?: (date: string) => void
  onEndDateChange?: (date: string) => void
}

function DateRangePicker({
  label = 'Date range',
  startDate = '',
  endDate = '',
  onStartDateChange,
  onEndDateChange,
}: DateRangePickerProps) {
  const [start, setStart] = useState(startDate)
  const [end, setEnd] = useState(endDate)

  const handleStartChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value

    setStart(value)
    onStartDateChange?.(value)
  }

  const handleEndChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value

    setEnd(value)
    onEndDateChange?.(value)
  }

  return (
    <div className="w-full">
      <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-100">
        {label}
      </label>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <div>
          <label
            className="mb-1 block text-xs font-medium text-gray-500 dark:text-gray-400"
          >
            Start date
          </label>

          <input
            type="date"
            value={start}
            max={end || undefined}
            onChange={handleStartChange}
            className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          />
        </div>

        <div>
          <label
            className="mb-1 block text-xs font-medium text-gray-500 dark:text-gray-400"
          >
            End date
          </label>

          <input
            type="date"
            value={end}
            min={start || undefined}
            onChange={handleEndChange}
            className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          />
        </div>
      </div>
    </div>
  )
}

export default function DateRangePickerDaysExample() {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <DateRangePicker
        label="Date range"
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={(date) => console.log(date)}
        onEndDateChange={(date) => console.log(date)}
      />

      <DateRangePicker
        label="Date range"
        startDate="2022-08-03"
        endDate="2022-08-17"
      />
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
                <BreadcrumbPage>Date Picker Range</BreadcrumbPage>
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
              <DateRangePickerDaysExample/>
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview code={codefile}>
              <DateRangePickerDaysWithTimePickerExample/>
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview code={codefile}>
              <DateRangePickerWeeksExample/>
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview code={codefile}>
              <DateRangePickerYearsExample/>
            </ComponentPreview>
          </div>
        </div>
      </div>

      <Footer />
    </SidebarInset>
  )
}