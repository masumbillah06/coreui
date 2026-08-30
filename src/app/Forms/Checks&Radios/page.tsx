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
import ChecksRadiosChecksExample from "@/components/preview/forms/checks&radios/checks-1"
import ChecksRadiosRadiosExample from "@/components/preview/forms/checks&radios/checks-2"
import ChecksRadiosSwitchesExample from "@/components/preview/forms/checks&radios/checks-3"
import ChecksRadiosSwitchSizesExample from "@/components/preview/forms/checks&radios/checks-4"

const codefile=`'use client'

interface CheckboxProps {
  id: string
  label: string
  defaultChecked?: boolean
}

function Checkbox({
  id,
  label,
  defaultChecked = false,
}: CheckboxProps) {
  return (
    <label htmlFor={id} className="flex cursor-pointer items-center gap-2">
      <input
        id={id}
        type="checkbox"
        defaultChecked={defaultChecked}
        className="size-4 rounded border-gray-300 text-blue-600
          accent-blue-600
          focus:ring-2 focus:ring-blue-500
          focus:ring-offset-1"
      />

      <span className="text-sm text-gray-700">
        {label}
      </span>
    </label>
  )
}

export default function ChecksRadiosChecksExample() {
  return (
    <div className="space-y-3">
      <Checkbox
        id="flexCheckDefault"
        label="Default checkbox"
      />

      <Checkbox
        id="flexCheckChecked"
        label="Checked checkbox"
        defaultChecked
      />
    </div>
  )
}
`

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
                <BreadcrumbLink href="#">Forms</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Checks & Radios</BreadcrumbPage>
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
            <ComponentPreview code={codefile}>
                <ChecksRadiosChecksExample/>
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview code={codefile}>
                <ChecksRadiosRadiosExample/>
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview code={codefile}>
                <ChecksRadiosSwitchesExample/>
            </ComponentPreview>
          </div>

          <div className="mb-5">
            <ComponentPreview code={codefile}>
                <ChecksRadiosSwitchSizesExample/>
            </ComponentPreview>
          </div>
        </div>
      </div>

      <Footer />
    </SidebarInset>
  )
}