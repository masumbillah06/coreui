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
import CoreUIBannerAddOn from "@/components/ui/banners/add-on-banner"
import DataGridOne from "@/components/preview/previewAndCode/data-grid-1"

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
                  <BreadcrumbPage>Data Grid</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
          <div className="min-h-0 flex-1 overflow-y-auto border-t border-slate-300 bg-slate-100">
            <div className="mx-auto w-full max-w-[1220px] px-4 py-4">
              <div className="mb-4">
                <CoreUIBannerAddOn />
              </div>
              <DataGridOne />
            </div>
          </div>
        <Footer />  
      </SidebarInset>
  )
}


