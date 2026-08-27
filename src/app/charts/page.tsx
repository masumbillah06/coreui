import { AppSidebar } from "@/components/sidebar/app-sidebar"
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
  SidebarProvider,
} from "@/components/ui/ui-sidebar/sidebar"
import { ChartLineExample } from "@/components/charts/linechart"
import { ChartBarExample } from "@/components/charts/barchart"
import { ChartDoughnutAndPieExample } from "@/components/charts/donutchart"
import { ChartPieExample } from "@/components/charts/piechart"
import { ChartRadarExample } from "@/components/charts/radarchart"
import { ChartPolarAreaExample } from "@/components/charts/polarchart"

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
                  <BreadcrumbPage>Charts</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
          <div className="min-h-0 flex-1 overflow-y-auto border-t border-slate-300 bg-slate-100">
            <div className="mx-auto w-full max-w-[1220px] px-4 py-4">
              <div className="mb-4 grid min-w-0 grid-cols-1 gap-4 md:grid-cols-2">
                <div className="min-w-0 overflow-hidden"><ChartBarExample /></div>
                <div className="min-w-0 overflow-hidden"><ChartLineExample /></div>
              </div>
              <div className="mb-4 grid min-w-0 grid-cols-1 gap-4 md:grid-cols-2">
                <div className="min-w-0 overflow-hidden"><ChartDoughnutAndPieExample /></div>
                <div className="min-w-0 overflow-hidden"><ChartPieExample /></div>
              </div>
              <div className="mb-4 grid min-w-0 grid-cols-1 gap-4 md:grid-cols-2">
                <div className="min-w-0 overflow-hidden"><ChartPolarAreaExample /></div>
                <div className="min-w-0 overflow-hidden"><ChartRadarExample /></div>
              </div>
            </div>
          </div>
        <Footer />  
      </SidebarInset>
    </SidebarProvider>
  )
}


