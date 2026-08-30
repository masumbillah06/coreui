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
import LoadingButtonExample from "@/components/preview/preview-comps/loading-buttons/loading-button-1"
import LoadingButtonGrowExample from "@/components/preview/preview-comps/loading-buttons/loading-button-2"

const loadingButtonCode1 = `'use client'

import { useState } from 'react'

type ButtonVariant = 'solid' | 'outline' | 'ghost'

const variants: ButtonVariant[] = ['solid', 'outline', 'ghost']

export default function LoadingButtonExample() {
  const [loading, setLoading] = useState<ButtonVariant | null>(null)

  const handleClick = (variant: ButtonVariant) => {
    setLoading(variant)

    setTimeout(() => {
      setLoading(null)
    }, 2000)
  }

  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        disabled={loading === 'solid'}
        onClick={() => handleClick('solid')}
        className={[
          'inline-flex min-w-24 items-center justify-center gap-2 rounded-md px-4 py-2',
          'text-sm font-medium transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
          'bg-blue-600 text-white hover:bg-blue-700',
          'disabled:cursor-not-allowed disabled:opacity-65',
        ].join(' ')}
      >
        {loading === 'solid' && <Spinner />}
        {loading === 'solid' ? 'Loading...' : 'Submit'}
      </button>

      <button
        type="button"
        disabled={loading === 'outline'}
        onClick={() => handleClick('outline')}
        className={[
          'inline-flex min-w-24 items-center justify-center gap-2 rounded-md border px-4 py-2',
          'text-sm font-medium transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
          'border-blue-600 text-blue-600 hover:bg-blue-50',
          'disabled:cursor-not-allowed disabled:opacity-65',
        ].join(' ')}
      >
        {loading === 'outline' && <Spinner />}
        {loading === 'outline' ? 'Loading...' : 'Submit'}
      </button>

      <button
        type="button"
        disabled={loading === 'ghost'}
        onClick={() => handleClick('ghost')}
        className={[
          'inline-flex min-w-24 items-center justify-center gap-2 rounded-md px-4 py-2',
          'text-sm font-medium transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
          'text-blue-600 hover:bg-blue-50',
          'disabled:cursor-not-allowed disabled:opacity-65',
        ].join(' ')}
      >
        {loading === 'ghost' && <Spinner />}
        {loading === 'ghost' ? 'Loading...' : 'Submit'}
      </button>
    </div>
  )
}

function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V2C6.477 2 2 6.477 2 12h2Z" />
    </svg>
  )
}`

const loadingButtonCode2 = `'use client'

import { useState } from 'react'

type ButtonVariant = 'solid' | 'outline' | 'ghost'

export default function LoadingButtonGrowExample() {
  const [loading, setLoading] = useState<ButtonVariant | null>(null)

  const handleClick = (variant: ButtonVariant) => {
    setLoading(variant)

    setTimeout(() => {
      setLoading(null)
    }, 2000)
  }

  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        disabled={loading === 'solid'}
        onClick={() => handleClick('solid')}
        className={[
          'inline-flex min-w-24 items-center justify-center gap-2 rounded-md px-4 py-2',
          'text-sm font-medium transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2',
          'bg-cyan-600 text-white hover:bg-cyan-700',
          'disabled:cursor-not-allowed disabled:opacity-65',
        ].join(' ')}
      >
        {loading === 'solid' && <GrowSpinner />}
        {loading === 'solid' ? 'Loading...' : 'Submit'}
      </button>

      <button
        type="button"
        disabled={loading === 'outline'}
        onClick={() => handleClick('outline')}
        className={[
          'inline-flex min-w-24 items-center justify-center gap-2 rounded-md border px-4 py-2',
          'text-sm font-medium transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2',
          'border-green-600 text-green-600 hover:bg-green-50',
          'disabled:cursor-not-allowed disabled:opacity-65',
        ].join(' ')}
      >
        {loading === 'outline' && <GrowSpinner />}
        {loading === 'outline' ? 'Loading...' : 'Submit'}
      </button>

      <button
        type="button"
        disabled={loading === 'ghost'}
        onClick={() => handleClick('ghost')}
        className={[
          'inline-flex min-w-24 items-center justify-center gap-2 rounded-md px-4 py-2',
          'text-sm font-medium transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2',
          'text-yellow-600 hover:bg-yellow-50',
          'disabled:cursor-not-allowed disabled:opacity-65',
        ].join(' ')}
      >
        {loading === 'ghost' && <GrowSpinner />}
        {loading === 'ghost' ? 'Loading...' : 'Submit'}
      </button>
    </div>
  )
}

function GrowSpinner() {
  return (
    <span
      className="h-4 w-4 animate-pulse rounded-full bg-current"
      aria-label="Loading"
    />
  )
}`

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
                <BreadcrumbLink href="#">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Loading Button</BreadcrumbPage>
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
            <ComponentPreview title="Loading button" detail="Show a spinner while an action is in progress." code={loadingButtonCode1} language="tsx">
              <LoadingButtonExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Loading button with pulse" detail="Alternate loading states using a pulsing indicator." code={loadingButtonCode2} language="tsx">
              <LoadingButtonGrowExample />
            </ComponentPreview>
          </div>
        </div>
      </div>

      <Footer />
    </SidebarInset>
  )
}