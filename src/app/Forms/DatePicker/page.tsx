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
import DatePickerDaysExample from "@/components/preview/forms/date-picker/date-picker-1"
import DatePickerDaysWithTimePickerExample from "@/components/preview/forms/date-picker/date-picker-2"
import DatePickerDisabledExample from "@/components/preview/forms/date-picker/date-picker-3"
import DatePickerReadonlyExample from "@/components/preview/forms/date-picker/date-picker-4"

const codefile = `'use client'

import { useState } from 'react'

type DatePickerProps = {
  label: string
  defaultValue?: string
}

function DatePicker({
  label,
  defaultValue = '',
}: DatePickerProps) {
  const [date, setDate] = useState(defaultValue)

  return (
    <div className="w-full">
      <label
        htmlFor={label}
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-100"
      >
        {label}
      </label>

      <input
        id={label}
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
        className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
      />
    </div>
  )
}

export default function DatePickerDaysExample() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
      <div className="sm:col-span-1 lg:col-span-5">
        <DatePicker label="Date Picker" />
      </div>

      <div className="sm:col-span-1 lg:col-span-5">
        <DatePicker
          label="Date Picker"
          defaultValue="2022-02-16"
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
                <BreadcrumbPage>Date Picker</BreadcrumbPage>
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
                <DatePickerDaysExample/>
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview code={codefile}>
                <DatePickerDaysWithTimePickerExample/>
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview code={codefile}>
                <DatePickerDisabledExample/>
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview code={codefile}>
                <DatePickerReadonlyExample/>
            </ComponentPreview>
          </div>
        </div>
      </div>

      <Footer />
    </SidebarInset>
  )
}