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
import PaginationExample from "@/components/preview/previewAndCode/paiginatoin/paigination-1"
import PaginationWorkingWithIconsExample from "@/components/preview/previewAndCode/paiginatoin/paigination-2"
import PaginationDisabledAndActiveExample from "@/components/preview/previewAndCode/paiginatoin/paigination-3"
import PaginationAlignmentExample from "@/components/preview/previewAndCode/paiginatoin/paigination-4"

const paginationCode1 = `export default function PaginationExample() {
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px">
        <li>
          <button
            type="button"
            className="rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
          >
            Previous
          </button>
        </li>

        <li>
          <button
               type="button"
            className="border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            1
          </button>
        </li>

        <li>
          <button
            type="button"
            className="border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            2
          </button>
        </li>

        <li>
          <button
            type="button"
            className="border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            3
          </button>
        </li>

        <li>
          <button
            type="button"
            className="rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  )
}`

const paginationCode2 = `export default function PaginationWorkingWithIconsExample() {
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px">
        <li>
          <button
            type="button"
            aria-label="Previous"
            className="rounded-l-md border border-gray-300 bg-white px-4 py-2 text-lg leading-none text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>

        <li>
          <button
            type="button"
            className="border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            1
          </button>
        </li>

        <li>
          <button
            type="button"
            className="border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            2
          </button>
        </li>

        <li>
          <button
            type="button"
            className="border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            3
          </button>
        </li>

        <li>
          <button
            type="button"
            aria-label="Next"
            className="rounded-r-md border border-gray-300 bg-white px-4 py-2 text-lg leading-none text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}`

const paginationCode3 = `export default function PaginationDisabledAndActiveExample() {
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px">
        <li>
          <button
            type="button"
            aria-label="Previous"
            disabled
            className="cursor-not-allowed rounded-l-md border border-gray-300 bg-gray-100 px-4 py-2 text-lg leading-none text-gray-400"
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>

        <li>
          <button
            type="button"
            aria-current="page"
            className="border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium text-white"
          >
            1
          </button>
        </li>

        <li>
          <button
            type="button"
            className="border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            2
          </button>
        </li>

        <li>
          <button
            type="button"
            className="border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            3
          </button>
        </li>

        <li>
          <button
            type="button"
            aria-label="Next"
            className="rounded-r-md border border-gray-300 bg-white px-4 py-2 text-lg leading-none text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}`

const paginationCode4 = `export default function PaginationAlignmentExample() {
  return (
    <nav aria-label="Page navigation example">
      <ul className="flex justify-center -space-x-px">
        <li>
          <button
            type="button"
            disabled
            className="cursor-not-allowed rounded-l-md border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-medium text-gray-400"
          >
            Previous
          </button>
        </li>

        <li>
          <button
            type="button"
            className="border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            1
          </button>
        </li>

        <li>
          <button
            type="button"
            className="border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            2
          </button>
        </li>

        <li>
          <button
            type="button"
            className="border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            3
          </button>
        </li>

        <li>
          <button
            type="button"
            className="rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
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
                <BreadcrumbPage>Pagination</BreadcrumbPage>
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
            <ComponentPreview title="Pagination" detail="Basic pagination controls with previous and next actions." code={paginationCode1} language="tsx">
              <PaginationExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Pagination with icons" detail="Pagination using icon glyphs for previous and next navigation." code={paginationCode2} language="tsx">
              <PaginationWorkingWithIconsExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Active and disabled states" detail="Highlight the current page and disable previous navigation." code={paginationCode3} language="tsx">
              <PaginationDisabledAndActiveExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Centered pagination" detail="Center-aligned pagination controls for a balanced layout." code={paginationCode4} language="tsx">
              <PaginationAlignmentExample />
            </ComponentPreview>
          </div>
        </div>
      </div>

      <Footer />
    </SidebarInset>
  )
}