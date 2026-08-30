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
import CarouselSlidesOnlyExample from "@/components/preview/previewAndCode/carousel/carousel-1"
import CarouselWithControlsExample from "@/components/preview/previewAndCode/carousel/carousel-2"
import CarouselWithCaptionsExample from "@/components/preview/previewAndCode/carousel/carousel-3"
import CarouselCrossfadeExample from "@/components/preview/previewAndCode/carousel/carousel-4"

const carouselCode1 = `"use client"

import Image from "next/image"
import { useState } from "react"

const slides = [
  { src: "/react.jpg", alt: "React" },
  { src: "/vue.jpg", alt: "Vue" },
  { src: "/angular.jpg", alt: "Angular" },
]

export default function CarouselSlidesOnlyExample() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const previousSlide = () => {
    setCurrentSlide((current) => (current === 0 ? slides.length - 1 : current - 1))
  }

  const nextSlide = () => {
    setCurrentSlide((current) => (current === slides.length - 1 ? 0 : current + 1))
  }

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      <div className="relative aspect-video w-full">
        {slides.map((slide, index) => (
          <div key={slide.src} className={[
            "absolute inset-0 transition-opacity duration-500",
            index === currentSlide ? "z-10 opacity-100" : "z-0 opacity-0",
          ].join(" ")}>
            <Image src={slide.src} alt={slide.alt} fill className="object-cover" />
          </div>
        ))}
      </div>

      <button type="button" onClick={previousSlide} aria-label="Previous slide" className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white">
        ←
      </button>
      <button type="button" onClick={nextSlide} aria-label="Next slide" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white">
        →
      </button>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((slide, index) => (
          <button key={slide.src} type="button" onClick={() => setCurrentSlide(index)} className={[
            "h-2 w-2 rounded-full transition-all",
            index === currentSlide ? "w-6 bg-white" : "bg-white/50",
          ].join(" ")} />
        ))}
      </div>
    </div>
  )
}`

const carouselCode2 = `"use client"

import Image from "next/image"
import { useState } from "react"

const slides = [
  { src: "/react.jpg", alt: "slide 1" },
  { src: "/vue.jpg", alt: "slide 2" },
  { src: "/angular.jpg", alt: "slide 3" },
]

export default function CarouselWithControlsExample() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const previousSlide = () => {
    setCurrentSlide((current) => (current === 0 ? slides.length - 1 : current - 1))
  }

  const nextSlide = () => {
    setCurrentSlide((current) => (current === slides.length - 1 ? 0 : current + 1))
  }

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      <div className="relative aspect-video w-full">
        {slides.map((slide, index) => (
          <div key={slide.src} className={[
            "absolute inset-0 transition-opacity duration-300",
            index === currentSlide ? "z-10 opacity-100" : "z-0 opacity-0",
          ].join(" ")}>
            <Image src={slide.src} alt={slide.alt} fill className="object-cover" />
          </div>
        ))}
      </div>

      <button type="button" onClick={previousSlide} aria-label="Previous slide" className="absolute left-0 top-1/2 -translate-y-1/2 p-4 text-white hover:bg-black/20">
        ←
      </button>
      <button type="button" onClick={nextSlide} aria-label="Next slide" className="absolute right-0 top-1/2 -translate-y-1/2 p-4 text-white hover:bg-black/20">
        →
      </button>
    </div>
  )
}`

const carouselCode3 = `"use client"

import Image from "next/image"
import { useState } from "react"

const slides = [
  { src: "/react.jpg", alt: "slide 1", title: "First slide label", description: "Some representative placeholder content for the first slide." },
  { src: "/vue.jpg", alt: "slide 2", title: "Second slide label", description: "Some representative placeholder content for the second slide." },
  { src: "/angular.jpg", alt: "slide 3", title: "Third slide label", description: "Some representative placeholder content for the third slide." },
]

export default function CarouselWithCaptionsExample() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const previousSlide = () => {
    setCurrentSlide((current) => (current === 0 ? slides.length - 1 : current - 1))
  }

  const nextSlide = () => {
    setCurrentSlide((current) => (current === slides.length - 1 ? 0 : current + 1))
  }

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      <div className="relative aspect-video w-full">
        {slides.map((slide, index) => (
          <div key={slide.src} className={[
            "absolute inset-0 transition-opacity duration-500",
            index === currentSlide ? "z-10 opacity-100" : "z-0 opacity-0",
          ].join(" ")}>
            <Image src={slide.src} alt={slide.alt} fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 hidden bg-gradient-to-t from-black/80 via-black/40 to-transparent px-6 pb-10 pt-16 text-center text-white md:block">
              <h5 className="mb-2 text-xl font-semibold">{slide.title}</h5>
              <p className="text-sm text-gray-100">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button type="button" onClick={previousSlide} aria-label="Previous slide" className="absolute left-0 top-1/2 -translate-y-1/2 p-4 text-white hover:bg-black/20">
        ←
      </button>
      <button type="button" onClick={nextSlide} aria-label="Next slide" className="absolute right-0 top-1/2 -translate-y-1/2 p-4 text-white hover:bg-black/20">
        →
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((slide, index) => (
          <button key={slide.src} type="button" onClick={() => setCurrentSlide(index)} className={[
            "h-2 w-2 rounded-full transition-all",
            index === currentSlide ? "w-6 bg-white" : "bg-white/50",
          ].join(" ")} />
        ))}
      </div>
    </div>
  )
}`

const carouselCode4 = `"use client"

import Image from "next/image"
import { useState } from "react"

const slides = [
  { src: "/react.jpg", alt: "slide 1" },
  { src: "/vue.jpg", alt: "slide 2" },
  { src: "/angular.jpg", alt: "slide 3" },
]

export default function CarouselCrossfadeExample() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const previousSlide = () => {
    setCurrentSlide((current) => (current === 0 ? slides.length - 1 : current - 1))
  }

  const nextSlide = () => {
    setCurrentSlide((current) => (current === slides.length - 1 ? 0 : current + 1))
  }

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      <div className="relative aspect-video w-full">
        {slides.map((slide, index) => (
          <div key={slide.src} className={[
            "absolute inset-0 transition-opacity duration-500 ease-in-out",
            index === currentSlide ? "z-10 opacity-100" : "z-0 opacity-0",
          ].join(" ")}>
            <Image src={slide.src} alt={slide.alt} fill className="object-cover" />
          </div>
        ))}
      </div>

      <button type="button" onClick={previousSlide} aria-label="Previous slide" className="absolute left-0 top-1/2 -translate-y-1/2 p-4 text-white hover:bg-black/20">
        ←
      </button>
      <button type="button" onClick={nextSlide} aria-label="Next slide" className="absolute right-0 top-1/2 -translate-y-1/2 p-4 text-white hover:bg-black/20">
        →
      </button>
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
                <BreadcrumbPage>Carousel</BreadcrumbPage>
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
            <ComponentPreview title="Slides only" detail="A minimal carousel with image slides and indicators." code={carouselCode1} language="tsx">
              <CarouselSlidesOnlyExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="With controls" detail="Carousel navigation with previous and next controls." code={carouselCode2} language="tsx">
              <CarouselWithControlsExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="With captions" detail="Add text overlays and captions to the slide content." code={carouselCode3} language="tsx">
              <CarouselWithCaptionsExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Crossfade" detail="Use a fade transition effect between slides." code={carouselCode4} language="tsx">
              <CarouselCrossfadeExample />
            </ComponentPreview>
          </div>
        </div>
      </div>

      <Footer />
    </SidebarInset>
  )
}