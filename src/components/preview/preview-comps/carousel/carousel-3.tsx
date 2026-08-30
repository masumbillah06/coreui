'use client'

import Image from 'next/image'
import { useState } from 'react'

const slides = [
  {
    src: '/react.jpg',
    alt: 'slide 1',
    title: 'First slide label',
    description:
      'Some representative placeholder content for the first slide.',
  },
  {
    src: '/vue.jpg',
    alt: 'slide 2',
    title: 'Second slide label',
    description:
      'Some representative placeholder content for the second slide.',
  },
  {
    src: '/angular.jpg',
    alt: 'slide 3',
    title: 'Third slide label',
    description:
      'Some representative placeholder content for the third slide.',
  },
]

export default function CarouselWithCaptionsExample() {
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

            {/* Caption: hidden below md */}
            <div className="absolute bottom-0 left-0 right-0 hidden bg-gradient-to-t from-black/80 via-black/40 to-transparent px-6 pb-10 pt-16 text-center text-white md:block">
              <h5 className="mb-2 text-xl font-semibold">
                {slide.title}
              </h5>

              <p className="text-sm text-gray-100">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Previous control */}
      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous slide"
        className="absolute left-0 top-1/2 z-20 -translate-y-1/2 p-4 text-white transition-colors hover:bg-black/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      >
        <svg
          className="h-8 w-8 drop-shadow-md"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Next control */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-0 top-1/2 z-20 -translate-y-1/2 p-4 text-white transition-colors hover:bg-black/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      >
        <svg
          className="h-8 w-8 drop-shadow-md"
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
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
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
