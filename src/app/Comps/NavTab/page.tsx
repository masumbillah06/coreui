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
import NavExample from "@/components/preview/preview-comps/nav-tabs/nav-tabs-1"
import Nav2Example from "@/components/preview/preview-comps/nav-tabs/nav-tabs-2"
import NavTabsExample from "@/components/preview/preview-comps/nav-tabs/nav-tabs-3"
import NavEnclosedExample from "@/components/preview/preview-comps/nav-tabs/nav-tabs-4"

const navCode1 = `export default function NavExample() {
  return (
    <nav aria-label="Example navigation">
      <ul className="flex flex-wrap list-none gap-1 p-0 m-0">
        <li>
          <a
            href="#"
            aria-current="page"
            className="inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white"
          >
            Active
          </a>
        </li>

        <li>
          <a
            href="#"
            className="inline-block rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
          >
            Link
          </a>
        </li>

        <li>
          <a
            href="#"
            className="inline-block rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
          >
            Link
          </a>
        </li>

        <li>
          <a
            href="#"
            aria-disabled="true"
            tabIndex={-1}
            className="inline-block cursor-not-allowed rounded-md px-4 py-2 text-sm font-medium text-gray-400"
            onClick={(event) => event.preventDefault()}
          >
            Disabled
          </a>
        </li>
      </ul>
    </nav>
  )
}`

const navCode2 = `export default function Nav2Example() {
  return (
    <nav className="flex flex-wrap gap-1" aria-label="Example navigation">
      <a
        href="#"
        aria-current="page"
        className="inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white"
      >
        Active
      </a>

      <a
        href="#"
        className="inline-block rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
      >
        Link
      </a>

      <a
        href="#"
        className="inline-block rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
      >
        Link
      </a>

      <a
        href="#"
        aria-disabled="true"
        tabIndex={-1}
        onClick={(event) => event.preventDefault()}
        className="inline-block cursor-not-allowed rounded-md px-4 py-2 text-sm font-medium text-gray-400"
      >
        Disabled
      </a>
    </nav>
  )
}`

const navCode3 = `export default function NavTabsExample() {
  return (
    <nav aria-label="Example tabs">
      <ul className="flex flex-wrap border-b border-gray-200">
        <li>
          <a
            href="#"
            aria-current="page"
            className="-mb-px inline-block rounded-t-lg border border-b-white border-gray-200 bg-white px-4 py-2 text-sm font-medium text-blue-600"
          >
            Active
          </a>
        </li>

        <li>
          <a
            href="#"
            className="inline-block border border-transparent px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:border-gray-200 hover:bg-gray-50 hover:text-gray-900"
          >
            Link
          </a>
        </li>

        <li>
          <a
            href="#"
            className="inline-block border border-transparent px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:border-gray-200 hover:bg-gray-50 hover:text-gray-900"
          >
            Link
          </a>
        </li>

        <li>
          <a
            href="#"
            aria-disabled="true"
            tabIndex={-1}
            onClick={(event) => event.preventDefault()}
            className="inline-block cursor-not-allowed border border-transparent px-4 py-2 text-sm font-medium text-gray-400"
          >
            Disabled
          </a>
        </li>
      </ul>
    </nav>
  )
}`

const navCode4 = `export default function NavEnclosedExample() {
  return (
    <nav
      aria-label="Example navigation"
      className="inline-flex rounded-lg border border-gray-200 bg-gray-50 p-1"
    >
      <a
        href="#"
        aria-current="page"
        className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm"
      >
        Active
      </a>

      <a
        href="#"
        className="rounded-md px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-white hover:text-gray-900"
      >
        Link
      </a>

      <a
        href="#"
        className="rounded-md px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-white hover:text-gray-900"
      >
        Link
      </a>

      <a
        href="#"
        aria-disabled="true"
        tabIndex={-1}
        onClick={(event) => event.preventDefault()}
        className="cursor-not-allowed rounded-md px-4 py-2 text-sm font-medium text-gray-400"
      >
        Disabled
      </a>
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
                <BreadcrumbPage>Nav & Tabs</BreadcrumbPage>
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
            <ComponentPreview title="Simple nav" detail="A basic horizontal nav with active and disabled states." code={navCode1} language="tsx">
              <NavExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Inline nav" detail="A compact nav without the list wrapper." code={navCode2} language="tsx">
              <Nav2Example />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Tabs" detail="Tabs-style navigation with an active border and hover states." code={navCode3} language="tsx">
              <NavTabsExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Enclosed nav" detail="A segmented navigation style inside a bordered container." code={navCode4} language="tsx">
              <NavEnclosedExample />
            </ComponentPreview>
          </div>
        </div>
      </div>

      <Footer />
    </SidebarInset>
  )
}