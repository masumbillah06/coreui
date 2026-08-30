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
import Badge1Example from "@/components/preview/preview-comps/badges/badge-1"
import Badge2Example from "@/components/preview/preview-comps/badges/badge-2"
import Badge3Example from "@/components/preview/preview-comps/badges/badge-3"
import Badge4Example from "@/components/preview/preview-comps/badges/badge-4"
import Badge5Example from "@/components/preview/preview-comps/badges/badge-5"

const badge1Code = `export default function BadgeExample() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold">
        Example heading{' '}
        <span className="inline-flex items-center rounded-full bg-gray-600 px-2.5 py-0.5 text-sm font-medium text-white">
          New
        </span>
      </h1>

      <h2 className="text-3xl font-bold">
        Example heading{' '}
        <span className="inline-flex items-center rounded-full bg-gray-600 px-2.5 py-0.5 text-sm font-medium text-white">
          New
        </span>
      </h2>

      <h3 className="text-2xl font-bold">
        Example heading{' '}
        <span className="inline-flex items-center rounded-full bg-gray-600 px-2.5 py-0.5 text-sm font-medium text-white">
          New
        </span>
      </h3>

      <h4 className="text-xl font-bold">
        Example heading{' '}
        <span className="inline-flex items-center rounded-full bg-gray-600 px-2.5 py-0.5 text-sm font-medium text-white">
          New
        </span>
      </h4>

      <h5 className="text-lg font-bold">
        Example heading{' '}
        <span className="inline-flex items-center rounded-full bg-gray-600 px-2.5 py-0.5 text-sm font-medium text-white">
          New
        </span>
      </h5>

      <h6 className="text-base font-bold">
        Example heading{' '}
        <span className="inline-flex items-center rounded-full bg-gray-600 px-2.5 py-0.5 text-sm font-medium text-white">
          New
        </span>
      </h6>
    </div>
  )
}`

const badge2Code = `export default function Badge2Example() {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
    >
      Notifications

      <span className="inline-flex items-center rounded-full bg-gray-500 px-2 py-0.5 text-xs font-semibold text-white">
        4
      </span>
    </button>
  )
}`

const badge3Code = `export default function Badge3Example() {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      Profile

      <span className="inline-flex min-w-5 items-center justify-center rounded-full bg-gray-600 px-1.5 py-0.5 text-xs font-semibold text-white">
        9
      </span>

      <span className="sr-only">unread messages</span>
    </button>
  )
}`

const badge4Code = `type BadgeProps = {
  color:
    | 'primary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
  children: React.ReactNode
}

const badgeColors = {
  primary: 'bg-blue-600 text-white',
  success: 'bg-green-600 text-white',
  danger: 'bg-red-600 text-white',
  warning: 'bg-yellow-400 text-gray-900',
  info: 'bg-cyan-600 text-white',
  light: 'bg-gray-100 text-gray-900',
  dark: 'bg-gray-900 text-white',
}

function Badge({ color, children }: BadgeProps) {
  return (
    <span
      className={\`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium \${badgeColors[color]}\`}
    >
      {children}
    </span>
  )
}

export default function BadgeContextualVariations() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge color="primary">primary</Badge>
      <Badge color="success">success</Badge>
      <Badge color="danger">danger</Badge>
      <Badge color="warning">warning</Badge>
      <Badge color="info">info</Badge>
      <Badge color="light">light</Badge>
      <Badge color="dark">dark</Badge>
    </div>
  )
}`

const badge5Code = `type BadgeProps = {
  color:
    | 'primary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
  children: React.ReactNode
  rounded?: boolean
}

const badgeColors = {
  primary: 'bg-blue-600 text-white',
  success: 'bg-green-600 text-white',
  danger: 'bg-red-600 text-white',
  warning: 'bg-yellow-400 text-gray-900',
  info: 'bg-cyan-600 text-white',
  light: 'bg-gray-100 text-gray-900',
  dark: 'bg-gray-900 text-white',
}

function Badge({ color, children, rounded = true }: BadgeProps) {
  return (
    <span
      className={\`inline-flex items-center \${rounded ? 'rounded-full' : 'rounded-md'} px-2.5 py-0.5 text-xs font-medium \${badgeColors[color]}\`}
    >
      {children}
    </span>
  )
}

export default function BadgeContextualVariations() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge color="primary" rounded>primary</Badge>
      <Badge color="success" rounded>success</Badge>
      <Badge color="danger" rounded>danger</Badge>
      <Badge color="warning" rounded>warning</Badge>
      <Badge color="info" rounded>info</Badge>
      <Badge color="light" rounded>light</Badge>
      <Badge color="dark" rounded>dark</Badge>
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
                <BreadcrumbPage>Badges</BreadcrumbPage>
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
            <ComponentPreview
              title="React Badge"
              detail="Example headings with a badge label in the text flow."
              code={badge1Code}
              language="tsx"
            >
              <Badge1Example />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview
              title="React Badge with counter"
              detail="A button with a badge counter indicating unread notifications."
              code={badge2Code}
              language="tsx"
            >
              <Badge2Example />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview
              title="React Badge with profile count"
              detail="A profile button with an unread message counter badge."
              code={badge3Code}
              language="tsx"
            >
              <Badge3Example />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview
              title="React Badge contextual variations"
              detail="Use supported contextual colors to communicate status or emphasis."
              code={badge4Code}
              language="tsx"
            >
              <Badge4Example />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview
              title="React Badge rounded"
              detail="The same contextual badge styles with the pill shape enabled."
              code={badge5Code}
              language="tsx"
            >
              <Badge5Example />
            </ComponentPreview>
          </div>
        </div>
      </div>

      <Footer />
    </SidebarInset>
  )
}