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
import TableExample from "@/components/preview/preview-comps/tables/table-1"
import TableColorsExample from "@/components/preview/preview-comps/tables/table-2"
import StripedTable from "@/components/preview/preview-comps/tables/table-3"
import StripedHoverTable from "@/components/preview/preview-comps/tables/table-4"

const tableCode1 = `import type { TableHTMLAttributes } from 'react'

type TableProps = TableHTMLAttributes<HTMLTableElement>

export default function TableExample(props: TableProps) {
  const columns = [
    { key: 'id', label: '#' },
    { key: 'class', label: 'Class' },
    { key: 'heading_1', label: 'Heading' },
    { key: 'heading_2', label: 'Heading' },
  ]

  const items = [
    { id: 1, class: 'Mark', heading_1: 'Otto', heading_2: '@mdo' },
    { id: 2, class: 'Jacob', heading_1: 'Thornton', heading_2: '@fat' },
    { id: 3, class: 'Larry the Bird', heading_2: '@twitter' },
  ]

  return (
    <div className="w-full overflow-x-auto">
      <table
        {...props}
        className={\`w-full border-collapse text-left text-sm text-gray-700 \${props.className ?? ''}\`}
      >
        <thead className="border-b border-gray-200 bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th key={column.key} scope="col" className="px-4 py-3 font-semibold text-gray-900">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
              <th scope="row" className="px-4 py-3 font-medium text-gray-900">
                {item.id}
              </th>

              <td className="px-4 py-3" colSpan={item.id === 3 ? 2 : undefined}>
                {item.class}
              </td>

              {item.id !== 3 && <td className="px-4 py-3">{item.heading_1}</td>}

              <td className="px-4 py-3">{item.heading_2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}`

const tableCode2 = `export default function TableColorsExample() {
  const columns = [
    { key: 'class', label: 'Class' },
    { key: 'heading_1', label: 'Heading' },
    { key: 'heading_2', label: 'Heading' },
  ]

  const items = [
    { class: 'Default', heading_1: 'Cell', heading_2: 'Cell', color: 'default' },
    { class: 'Primary', heading_1: 'Cell', heading_2: 'Cell', color: 'primary' },
    { class: 'Secondary', heading_1: 'Cell', heading_2: 'Cell', color: 'secondary' },
    { class: 'Success', heading_1: 'Cell', heading_2: 'Cell', color: 'success' },
    { class: 'Danger', heading_1: 'Cell', heading_2: 'Cell', color: 'danger' },
    { class: 'Warning', heading_1: 'Cell', heading_2: 'Cell', color: 'warning' },
    { class: 'Info', heading_1: 'Cell', heading_2: 'Cell', color: 'info' },
    { class: 'Light', heading_1: 'Cell', heading_2: 'Cell', color: 'light' },
    { class: 'Dark', heading_1: 'Cell', heading_2: 'Cell', color: 'dark' },
  ]

  const rowColors = {
    default: 'bg-white text-gray-900',
    primary: 'bg-blue-600 text-white',
    secondary: 'bg-gray-600 text-white',
    success: 'bg-green-600 text-white',
    danger: 'bg-red-600 text-white',
    warning: 'bg-yellow-400 text-gray-900',
    info: 'bg-cyan-500 text-gray-900',
    light: 'bg-gray-100 text-gray-900',
    dark: 'bg-gray-800 text-white',
  }

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="border-b border-gray-200 bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th key={column.key} scope="col" className="px-4 py-3 font-semibold text-gray-900">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.class} className={\`\${rowColors[item.color]} border-b border-black/10 last:border-b-0\`}>
              <th scope="row" className="px-4 py-3 font-semibold">
                {item.class}
              </th>

              <td className="px-4 py-3">{item.heading_1}</td>
              <td className="px-4 py-3">{item.heading_2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}`

const tableCode3 = `export default function StripedTable() {
  const items = [
    ['Default', 'Cell', 'Cell'],
    ['Primary', 'Cell', 'Cell'],
    ['Secondary', 'Cell', 'Cell'],
    ['Success', 'Cell', 'Cell'],
  ]

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="border-b border-gray-200 bg-gray-50">
          <tr>
            <th scope="col" className="px-4 py-3 font-semibold text-gray-900">Class</th>
            <th scope="col" className="px-4 py-3 font-semibold text-gray-900">Heading</th>
            <th scope="col" className="px-4 py-3 font-semibold text-gray-900">Heading</th>
          </tr>
        </thead>

        <tbody>
          {items.map(([name, heading1, heading2]) => (
            <tr key={name} className="border-b border-gray-200 odd:bg-white even:bg-gray-50 last:border-b-0">
              <th scope="row" className="px-4 py-3 font-medium text-gray-900">{name}</th>
              <td className="px-4 py-3">{heading1}</td>
              <td className="px-4 py-3">{heading2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}`

const tableCode4 = `export default function StripedHoverTable() {
  const items = [
    ['Default', 'Cell', 'Cell'],
    ['Primary', 'Cell', 'Cell'],
    ['Secondary', 'Cell', 'Cell'],
    ['Success', 'Cell', 'Cell'],
  ]

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="border-b border-gray-200 bg-gray-50">
          <tr>
            <th scope="col" className="px-4 py-3 font-semibold text-gray-900">Class</th>
            <th scope="col" className="px-4 py-3 font-semibold text-gray-900">Heading</th>
            <th scope="col" className="px-4 py-3 font-semibold text-gray-900">Heading</th>
          </tr>
        </thead>

        <tbody>
          {items.map(([name, heading1, heading2]) => (
            <tr key={name} className="border-b border-gray-200 odd:bg-white even:bg-gray-50 hover:bg-gray-100 last:border-b-0">
              <th scope="row" className="px-4 py-3 font-medium text-gray-900">{name}</th>
              <td className="px-4 py-3">{heading1}</td>
              <td className="px-4 py-3">{heading2}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
                <BreadcrumbPage>Table</BreadcrumbPage>
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
            <ComponentPreview title="Basic table" detail="A simple table with bordered rows and header styling." code={tableCode1} language="tsx">
              <TableExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Colored rows" detail="Different row colors to highlight table variants and statuses." code={tableCode2} language="tsx">
              <TableColorsExample />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Striped table" detail="Alternating background colors for better scanability." code={tableCode3} language="tsx">
              <StripedTable />
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview title="Striped hover table" detail="Rows alternate colors and highlight on hover." code={tableCode4} language="tsx">
              <StripedHoverTable />
            </ComponentPreview>
          </div>
        </div>
      </div>

      <Footer />
    </SidebarInset>
  )
}