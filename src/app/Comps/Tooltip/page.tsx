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
import TooltipOnLinksExample from "@/components/preview/preview-comps/tooltips/tooltip-1"
import TooltipDirectionsExample from "@/components/preview/preview-comps/tooltips/tooltip-2"

const tooltipOnLinksCode = `'use client'

import React from 'react'

function Tooltip({
  children,
  content,
}: {
  children: React.ReactNode
  content: string
}) {
  return (
    <span className="group relative inline-block">
      {children}

      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100"
      >
        {content}

        <span className="absolute left-1/2 top-full -translate-x-1/2 border-x-4 border-t-4 border-x-transparent border-t-gray-900" />
      </span>
    </span>
  )
}

export default function TooltipOnLinksExample() {
  return (
    <p className="text-sm text-gray-500">
      Tight pants next level keffiyeh{' '}
      <Tooltip content="Tooltip text">
        <a
          href="#"
          className="text-blue-600 underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          you probably
        </a>
      </Tooltip>{' '}
      haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag
      stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american
      apparel{' '}
      <Tooltip content="Tooltip text">
        <a
          href="#"
          className="text-blue-600 underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          have a
        </a>
      </Tooltip>{' '}
      terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu
      biodiesel williamsburg marfa, four loko mcsweeney's cleanse vegan chambray. A really
      ironic artisan{' '}
      <Tooltip content="Tooltip text">
        <a
          href="#"
          className="text-blue-600 underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          whatever keytar
        </a>
      </Tooltip>{' '}
      scenester farm-to-table banksy Austin{' '}
      <Tooltip content="Tooltip text">
        <a
          href="#"
          className="text-blue-600 underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          twitter handle
        </a>
      </Tooltip>{' '}
      freegan cred raw denim single-origin coffee viral.
    </p>
  )
}`

const tooltipDirectionsCode = `'use client'

import React from 'react'

type Placement = 'top' | 'right' | 'bottom' | 'left'

function Tooltip({
  children,
  content,
  placement = 'top',
}: {
  children: React.ReactNode
  content: string
  placement?: Placement
}) {
  const positionClasses = {
    top: 'bottom-full left-1/2 mb-2 -translate-x-1/2',
    right: 'left-full top-1/2 ml-2 -translate-y-1/2',
    bottom: 'top-full left-1/2 mt-2 -translate-x-1/2',
    left: 'right-full top-1/2 mr-2 -translate-y-1/2',
  }

  const arrowClasses = {
    top: 'left-1/2 top-full -translate-x-1/2 border-x-4 border-t-4 border-x-transparent border-t-gray-900',
    right: 'right-full top-1/2 -translate-y-1/2 border-y-4 border-r-4 border-y-transparent border-r-gray-900',
    bottom: 'left-1/2 bottom-full -translate-x-1/2 border-x-4 border-b-4 border-x-transparent border-b-gray-900',
    left: 'left-full top-1/2 -translate-y-1/2 border-y-4 border-l-4 border-y-transparent border-l-gray-900',
  }

  return (
    <span className="group relative inline-block">
      {children}

      <span
        role="tooltip"
        className={\`pointer-events-none absolute z-50 w-max max-w-xs rounded-md bg-gray-900 px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100 \${positionClasses[placement]}\`}
      >
        {content}

        <span
          className={\`absolute h-0 w-0 border-solid \${arrowClasses[placement]}\`}
        />
      </span>
    </span>
  )
}

const tooltipText =
  'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'

export default function TooltipDirectionsExample() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Tooltip content={tooltipText} placement="top">
        <button
          type="button"
          className="rounded-md bg-gray-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Tooltip on top
        </button>
      </Tooltip>

      <Tooltip content={tooltipText} placement="right">
        <button
          type="button"
          className="rounded-md bg-gray-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Tooltip on right
        </button>
      </Tooltip>

      <Tooltip content={tooltipText} placement="bottom">
        <button
          type="button"
          className="rounded-md bg-gray-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Tooltip on bottom
        </button>
      </Tooltip>

      <Tooltip content={tooltipText} placement="left">
        <button
          type="button"
          className="rounded-md bg-gray-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Tooltip on left
        </button>
      </Tooltip>
    </div>
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
                <BreadcrumbPage>Tooltip</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto border	-t border-slate-300 bg-slate-100">
        <div className="mx-auto w-full max-w-305 px-4 py-4">
          <div className="mb-5">
            <CoreUIBanner />
          </div>

          <div className="space-y-8">
            <ComponentPreview code={tooltipOnLinksCode}>
              <TooltipOnLinksExample />
            </ComponentPreview>
            <ComponentPreview code={tooltipDirectionsCode}>
              <TooltipDirectionsExample />
            </ComponentPreview>
          </div>
        </div>
      </div>

      <Footer />
    </SidebarInset>
  )
}