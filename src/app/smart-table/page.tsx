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
import {
  SidebarInset,
} from "@/components/ui/ui-sidebar/sidebar"
import ComponentPreview from "@/components/preview/ComponentPreview"
import CoreUIBanner from "@/components/ui/banners/ui-banners"
import SmartTableExample from "@/components/preview/previewAndCode/smart-table-1"

const smartTableCode = `import SmartTableExample from "@/components/preview/previewAndCode/smart-table-1"

export default function SmartTablePreview() {
  return <SmartTableExample />
}`

export default function Page() {
  return (
      <SidebarInset>
        <Header />
        <header className="flex h-12 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <Separator
              orientation="vertical"
              className="mr-2 data-vertical:h-4 data-vertical:self-auto"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Smart Table</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
          <div className="min-h-0 flex-1 overflow-y-auto border-t border-slate-300 bg-slate-100">
            <div className="mx-auto w-full max-w-305 px-4 py-4">
              <div className="mb-4">
                <CoreUIBanner />
              </div>
              <div className="mb-4">
                <div className="mb-5">
                  <ComponentPreview
                    title="Smart Table"
                    detail="Search, filter, sort, select, paginate, and expand user records."
                    code={smartTableCode}
                    language="tsx"
                  >
                    <SmartTableExample />
                  </ComponentPreview>
                </div>
              </div>
            </div>
          </div>
        <Footer />  
      </SidebarInset>
  )
}


