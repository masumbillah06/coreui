'use client'

import Image from 'next/image'
import { useState } from 'react'

const slides = [
  {
    src: '/react.jpg',
    alt: 'React',
  },
  {
    src: '/vue.jpg',
    alt: 'Vue',
  },
  {
    src: '/angular.jpg',
    alt: 'Angular',
  },
]

export default function CarouselSlidesOnlyExample() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const previousSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1,
    )
  }

  const nextSlide = () => {
    setCurrentSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1,
    )
  }

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      {/* Slides */}
      <div className="relative aspect-video w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={[
              'absolute inset-0 transition-opacity duration-500',
              index === currentSlide
                ? 'z-10 opacity-100'
                : 'z-0 opacity-0',
            ].join(' ')}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Previous button */}
      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-colors hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white"
      >
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-colors hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white"
      >
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide}
            className={[
              'h-2 w-2 rounded-full transition-all',
              index === currentSlide
                ? 'w-6 bg-white'
                : 'bg-white/50 hover:bg-white/80',
            ].join(' ')}
          />
        ))}
      </div>
    </div>
  )
}
