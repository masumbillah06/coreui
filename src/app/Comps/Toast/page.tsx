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
import ToastExample from "@/components/preview/preview-comps/toasts/toast-1"
import ToastLiveExample from "@/components/preview/preview-comps/toasts/toast-2"
import ToastStackingExample from "@/components/preview/preview-comps/toasts/toast-3"
import ToastColorSchemesExample from "@/components/preview/preview-comps/toasts/toast-4"

const toastCode1 = `'use client'

import { useState } from 'react'

export default function ToastExample() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div
      role="status"
      aria-live="polite"
      className="w-full max-w-sm overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg"
    >
      <div className="flex items-center border-b border-gray-200 px-4 py-3">
        <svg
          className="mr-2 rounded"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
          aria-label="CoreUI"
        >
          <rect width="100%" height="100%" fill="#007aff" />
        </svg>

        <div className="mr-auto font-bold text-gray-900">CoreUI for React.js</div>

        <small className="mr-2 text-xs text-gray-500">7 min ago</small>

        <button
          type="button"
          onClick={() => setVisible(false)}
          aria-label="Close"
          className="rounded-md p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414Z" />
          </svg>
        </button>
      </div>

      <div className="px-4 py-3 text-sm text-gray-700">
        Hello, world! This is a toast message.
      </div>
    </div>
  )
}`

const toastCode2 = `'use client'

import { useState } from 'react'

export default function ToastLiveExample() {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setVisible(true)}
        className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Send a toast
      </button>

      {visible && (
        <div className="fixed right-0 top-0 z-50 p-3">
          <div
            role="status"
            aria-live="polite"
            className="w-full max-w-sm overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg"
          >
            <div className="flex items-center border-b border-gray-200 px-4 py-3">
              <svg
                className="mr-2 shrink-0 rounded"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="CoreUI"
              >
                <rect width="100%" height="100%" fill="#007aff" />
              </svg>

              <div className="mr-auto font-bold text-gray-900">CoreUI for React.js</div>

              <small className="mr-2 text-xs text-gray-500">7 min ago</small>

              <button
                type="button"
                onClick={() => setVisible(false)}
                aria-label="Close"
                className="rounded-md p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 1 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 1 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414Z" />
                </svg>
              </button>
            </div>

            <div className="px-4 py-3 text-sm text-gray-700">
              Hello, world! This is a toast message.
            </div>
          </div>
        </div>
      )}
    </>
  )
}`

const toastCode3 = `const toasts = [1, 2]

export default function ToastStackingExample() {
  return (
    <div className="flex flex-col gap-3">
      {toasts.map((toast) => (
        <div key={toast} className="w-full max-w-sm overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
          <div className="flex items-center border-b border-gray-200 px-4 py-3">
            <span className="mr-2 h-5 w-5 rounded bg-[#007aff]" />

            <div className="mr-auto font-bold text-gray-900">CoreUI for React.js</div>

            <small className="text-xs text-gray-500">7 min ago</small>
          </div>

          <div className="px-4 py-3 text-sm text-gray-700">
            Hello, world! This is a toast message.
          </div>
        </div>
      ))}
    </div>
  )
}`

const toastCode4 = `'use client'

import { useState } from 'react'

export default function ToastColorSchemesExample() {
  const [visible, setVisible] = useState(true)

  return (
    <>
      {visible && (
        <div role="status" aria-live="polite" className="flex w-full max-w-sm items-center rounded-lg bg-blue-600 text-white shadow-lg">
          <div className="flex w-full items-center">
            <div className="px-4 py-3 text-sm">Hello, world! This is a toast message.</div>

            <button type="button" onClick={() => setVisible(false)} aria-label="Close" className="m-auto mr-2 rounded-md p-1.5 text-white/80 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50">
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 1 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 1 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414Z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
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
                <BreadcrumbPage>Toasts</BreadcrumbPage>
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
            <ComponentPreview title="Toast" detail="Basic toast notification with a header, timestamp, and close action." code={toastCode1} language="tsx">
              <ToastExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Live toast" detail="Trigger a toast from a button and dismiss it from the UI." code={toastCode2} language="tsx">
              <ToastLiveExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Stacked toasts" detail="Display multiple toast cards in a vertical stack." code={toastCode3} language="tsx">
              <ToastStackingExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Color scheme" detail="A solid blue toast variation for emphasis." code={toastCode4} language="tsx">
              <ToastColorSchemesExample />
            </ComponentPreview>
          </div>
        </div>
      </div>

      <Footer />
    </SidebarInset>
  )
}