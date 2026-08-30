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
import VirtualScrollerExample from "@/components/preview/preview-comps/vrscs/vrsc-1"

const vrscCode = `'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'

const TOTAL_ITEMS = 10_000
const ITEM_HEIGHT = 28
const VISIBLE_ITEMS = 20
const OVERSCAN = 5

export default function VirtualScrollerExample() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollTop, setScrollTop] = useState(0)
  const [, setIndex] = useState(0)

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return

    const currentScrollTop = containerRef.current.scrollTop

    setScrollTop(currentScrollTop)
    setIndex(Math.floor(currentScrollTop / ITEM_HEIGHT))
  }, [])

  useEffect(() => {
    const container = containerRef.current

    if (!container) return

    container.addEventListener('scroll', handleScroll)

    return () => {
      container.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  const startIndex = Math.max(
    0,
    Math.floor(scrollTop / ITEM_HEIGHT) - OVERSCAN,
  )

  const endIndex = Math.min(
    TOTAL_ITEMS,
    startIndex + VISIBLE_ITEMS + OVERSCAN * 2,
  )

  const items = Array.from(
    { length: endIndex - startIndex },
    (_, index) => startIndex + index,
  )

  return (
    <div
      ref={containerRef}
      className="h-[560px] overflow-y-auto rounded border border-gray-300 p-3"
    >
      <div
        className="relative"
        style={{
          height: TOTAL_ITEMS * ITEM_HEIGHT,
        }}
      >
        {items.map((index) => (
          <div
            key={index}
            className="absolute left-0 right-0 flex items-center"
            style={{
              height: ITEM_HEIGHT,
              top: index * ITEM_HEIGHT,
            }}
          >
            Option {index + 1}
          </div>
        ))}
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
                <BreadcrumbLink href="#">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Virtual Scrollers</BreadcrumbPage>
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

          <div className="mb-4">
            <ComponentPreview code={vrscCode}>
              <VirtualScrollerExample/>
            </ComponentPreview>
          </div>
        </div>
      </div>

      <Footer />
    </SidebarInset>
  )
}