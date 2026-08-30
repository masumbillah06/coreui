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
import SpinnerBorderExample from "@/components/preview/previewAndCode/spinners/spinner-1"
import SpinnerGrowExample from "@/components/preview/previewAndCode/spinners/spinner-2"
import SpinnerButtonsExample from "@/components/preview/previewAndCode/spinners/spinner-3"

const spinnerCode1 = `export default function SpinnerBorderExample() {
  return (
    <span
      className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"
      role="status"
      aria-label="Loading"
    />
  )
}`

const spinnerCode2 = `export default function SpinnerGrowExample() {
  return (
    <span
      className="inline-block h-8 w-8 animate-[grow_1s_ease-in-out_infinite] rounded-full bg-blue-600"
      role="status"
      aria-label="Loading"
    />
  )
}`

const spinnerCode3 = `export default function SpinnerButtonsExample() {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        disabled
        className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white opacity-65 cursor-not-allowed"
      >
        <span
          className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
          aria-hidden="true"
        />

        <span className="sr-only" role="status">
          Loading...
        </span>
      </button>

      <button
        type="button"
        disabled
        className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white opacity-65 cursor-not-allowed"
      >
        <span
          className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
          aria-hidden="true"
        />

        <span role="status">Loading...</span>
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
                <BreadcrumbPage>Spinner</BreadcrumbPage>
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
            <ComponentPreview title="Border spinner" detail="A classic rotating border spinner for loading states." code={spinnerCode1} language="tsx">
              <SpinnerBorderExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Growing spinner" detail="A pulse-like grow animation for quick loading feedback." code={spinnerCode2} language="tsx">
              <SpinnerGrowExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Button spinner" detail="Use a spinner inside disabled buttons to indicate ongoing actions." code={spinnerCode3} language="tsx">
              <SpinnerButtonsExample />
            </ComponentPreview>
          </div>
        </div>
      </div>

      <Footer />
    </SidebarInset>
  )
}