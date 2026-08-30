'use client'

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
