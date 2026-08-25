import { AppSidebar } from "@/components/sidebar/app-sidebar"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import WidgetStatsA from "@/components/dashboard/WidgetsStatsA"
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
  SidebarProvider,
} from "@/components/ui/ui-sidebar/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
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
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
          <div className="flex-1 border-t border-slate-300 bg-slate-100">
            <div className="mx-auto w-full max-w-[1220px] px-4 py-4">
              <div className="mb-4">
                <WidgetStatsA />
              </div>
            </div>
          </div>
        <Footer />  
      </SidebarInset>
    </SidebarProvider>
  )
}
