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
import CollapseExample from "@/components/preview/preview-comps/collapse/collapse-1"
import CollapseHorizontalExample from "@/components/preview/preview-comps/collapse/collapse-2"
import CollapseMultipleTargetsExample from "@/components/preview/preview-comps/collapse/collapse-3"

const collapseCode1 = `"use client"

import { useState } from "react"

export default function CollapseExample() {
  const [visible, setVisible] = useState(false)

  const toggle = () => setVisible((current) => !current)

  return (
    <div>
      <a href="#" onClick={(event) => { event.preventDefault(); toggle() }} aria-expanded={visible} className="mr-2 inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white">
        Link
      </a>
      <button type="button" onClick={toggle} aria-expanded={visible} className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white">
        Button
      </button>

      <div className={[
        'grid transition-[grid-template-rows] duration-300 ease-in-out',
        visible ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
      ].join(' ')} aria-hidden={!visible}>
        <div className="overflow-hidden">
          <div className="mt-3 rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="p-4 text-gray-700">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}`

const collapseCode2 = `"use client"

import { useState } from "react"

export default function CollapseHorizontalExample() {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <button type="button" onClick={() => setVisible((current) => !current)} aria-expanded={visible} aria-controls="collapseWidthExample" className="mb-3 inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white">
        Button
      </button>

      <div className="min-h-30">
        <div id="collapseWidthExample" className={[
          'overflow-hidden transition-[width] duration-300 ease-in-out',
          visible ? 'w-75' : 'w-0',
        ].join(' ')} aria-hidden={!visible}>
          <div className="w-75 rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="p-4 text-gray-700">
              This is some placeholder content for a horizontal collapse.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}`

const collapseCode3 = `"use client"

import { useState } from "react"

export default function CollapseMultipleTargetsExample() {
  const [visibleA, setVisibleA] = useState(false)
  const [visibleB, setVisibleB] = useState(false)

  const toggleBoth = () => {
    const nextVisible = !(visibleA && visibleB)
    setVisibleA(nextVisible)
    setVisibleB(nextVisible)
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => setVisibleA((current) => !current)} aria-expanded={visibleA} className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white">
          Toggle first element
        </button>
        <button type="button" onClick={() => setVisibleB((current) => !current)} aria-expanded={visibleB} className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white">
          Toggle second element
        </button>
        <button type="button" onClick={toggleBoth} aria-expanded={visibleA && visibleB} className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white">
          Toggle both elements
        </button>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <div className={['grid transition-[grid-template-rows] duration-300 ease-in-out', visibleA ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'].join(' ')}>
            <div className="overflow-hidden">
              <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
                <div className="p-4 text-gray-700">Anim pariatur ...</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className={['grid transition-[grid-template-rows] duration-300 ease-in-out', visibleB ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'].join(' ')}>
            <div className="overflow-hidden">
              <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
                <div className="p-4 text-gray-700">Anim pariatur ...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                <BreadcrumbPage>Collapse</BreadcrumbPage>
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
            <ComponentPreview title="Collapse example" detail="Toggle a content block with a button or link trigger." code={collapseCode1} language="tsx">
              <CollapseExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Horizontal collapse" detail="Collapse in a horizontal direction using width transitions." code={collapseCode2} language="tsx">
              <CollapseHorizontalExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Multiple targets" detail="Control more than one collapse panel individually or together." code={collapseCode3} language="tsx">
              <CollapseMultipleTargetsExample />
            </ComponentPreview>
          </div>
        </div>
      </div>

      <Footer />
    </SidebarInset>
  )
}