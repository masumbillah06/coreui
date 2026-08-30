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
import ChipExample from "@/components/preview/previewAndCode/chips/chip-1"
import ChipOutlineExample from "@/components/preview/previewAndCode/chips/chip-2"
import ChipIconExample from "@/components/preview/previewAndCode/chips/chip-3"
import ChipVariantsExample from "@/components/preview/previewAndCode/chips/chip-4"

const chipCode1 = `export default function ChipExample() {
  return (
    <div className="flex flex-wrap gap-1">
      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700">
        Basic chip
      </span>
      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700">
        Basic chip 2
      </span>
      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700">
        Basic chip 3
      </span>
      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700">
        Basic chip 4
      </span>
    </div>
  )
}`

const chipCode2 = `export default function ChipOutlineExample() {
  return (
    <div className="flex flex-wrap gap-1">
      <span className="inline-flex items-center rounded-full border border-gray-300 bg-transparent px-3 py-1.5 text-sm font-medium text-gray-700">
        Outline chip
      </span>
      <span className="inline-flex items-center rounded-full border border-gray-300 bg-transparent px-3 py-1.5 text-sm font-medium text-gray-700">
        Outline chip 2
      </span>
      <span className="inline-flex items-center rounded-full border border-gray-300 bg-transparent px-3 py-1.5 text-sm font-medium text-gray-700">
        Outline chip 3
      </span>
      <span className="inline-flex items-center rounded-full border border-gray-300 bg-transparent px-3 py-1.5 text-sm font-medium text-gray-700">
        Outline chip 4
      </span>
    </div>
  )
}`

const chipCode3 = `const UserIcon = () => (
  <svg ... />
)

const InfoIcon = () => (
  <svg ... />
)

export default function ChipIconExample() {
  return (
    <div className="flex flex-wrap gap-1">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700">
        <span className="flex shrink-0 items-center text-gray-600"><UserIcon /></span>
        Chip with icon 1
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700">
        <span className="flex shrink-0 items-center text-gray-600"><InfoIcon /></span>
        Chip with icon 2
      </span>
    </div>
  )
}`

const chipCode4 = `const colors = [
  { name: 'primary', base: 'bg-blue-600 text-white border-blue-600', hover: 'hover:bg-blue-700 hover:border-blue-700', active: 'bg-blue-700 text-white border-blue-700', focus: 'focus-visible:ring-blue-500' },
  { name: 'secondary', base: 'bg-gray-600 text-white border-gray-600', hover: 'hover:bg-gray-700 hover:border-gray-700', active: 'bg-gray-700 text-white border-gray-700', focus: 'focus-visible:ring-gray-500' },
  { name: 'success', base: 'bg-green-600 text-white border-green-600', hover: 'hover:bg-green-700 hover:border-green-700', active: 'bg-green-700 text-white border-green-700', focus: 'focus-visible:ring-green-500' },
  { name: 'danger', base: 'bg-red-600 text-white border-red-600', hover: 'hover:bg-red-700 hover:border-red-700', active: 'bg-red-700 text-white border-red-700', focus: 'focus-visible:ring-red-500' },
  { name: 'warning', base: 'bg-yellow-400 text-gray-900 border-yellow-400', hover: 'hover:bg-yellow-500 hover:border-yellow-500', active: 'bg-yellow-500 text-gray-900 border-yellow-500', focus: 'focus-visible:ring-yellow-400' },
  { name: 'info', base: 'bg-cyan-600 text-white border-cyan-600', hover: 'hover:bg-cyan-700 hover:border-cyan-700', active: 'bg-cyan-700 text-white border-cyan-700', focus: 'focus-visible:ring-cyan-500' },
]

const capitalize = (value) => value.charAt(0).toUpperCase() + value.slice(1)

export default function ChipVariantsExample() {
  return (
    <div className="flex flex-wrap gap-1">
      {colors.map((color) => (
        <div key={color.name} className="contents">
          <button type="button" className={[
            'inline-flex items-center rounded-full border px-3 py-1.5 text-sm font-medium transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
            color.base,
            color.hover,
            color.focus,
          ].join(' ')}>
            {capitalize(color.name)} chip
          </button>

          <button type="button" aria-pressed="true" className={[
            'inline-flex items-center rounded-full border px-3 py-1.5 text-sm font-medium cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
            color.active,
            color.focus,
          ].join(' ')}>
            {capitalize(color.name)} chip
          </button>
        </div>
      ))}
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
                <BreadcrumbPage>Chip</BreadcrumbPage>
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
            <ComponentPreview title="Basic chip" detail="A minimal chip set for simple labels." code={chipCode1} language="tsx">
              <ChipExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Outline chip" detail="Use outline chips for a lighter alternative." code={chipCode2} language="tsx">
              <ChipOutlineExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Chip with icon" detail="Add supporting icons to communicate status or meaning." code={chipCode3} language="tsx">
              <ChipIconExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Chip variants" detail="Style chips in multiple brand and status colors." code={chipCode4} language="tsx">
              <ChipVariantsExample />
            </ComponentPreview>
          </div>
        </div>
      </div>

      <Footer />
    </SidebarInset>
  )
}