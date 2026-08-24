"use client"

import * as React from "react"
import Image from "next/image"

import { NavMain, type NavMainItem } from "@/components/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { ChartPieIcon, Grid3X3Icon, MapIcon, PieChartIcon, PuzzleIcon, Settings2Icon, SquareTextIcon, StarIcon, GaugeIcon } from "lucide-react"


const data = {
  dashboard: [
    {
      title: "Dashboard",
      url: "#",
      icon: <GaugeIcon className="text-sidebar-foreground" />
    },
  ] satisfies NavMainItem[],
  uiElements: [
    {
      title: "Charts",
      url: "#",
      icon: <ChartPieIcon className="text-sidebar-foreground" />
    },
    {
      title: "Components",
      url: "#",
      icon: <PuzzleIcon className="text-sidebar-foreground" />,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Data Grid",
      url: "#",
      icon: <Grid3X3Icon className="text-sidebar-foreground" />
    },
    {
      title: "Forms",
      url: "#",
      icon: <SquareTextIcon className="text-sidebar-foreground" />,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Icons",
      url: "#",
      icon: <StarIcon className="text-sidebar-foreground" />,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: (
        <Settings2Icon
        />
      ),
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ] satisfies NavMainItem[],
  extras: [
    {
      title: "Maps",
      url: "#",
      icon: <MapIcon className="text-sidebar-foreground" />,
      items: [
        { title: "Overview", url: "#" },
        { title: "Locations", url: "#" },
      ],
    },
  ] satisfies NavMainItem[],
  plugins: [
    {
      title: "Plugin Store",
      url: "#",
      icon: <PuzzleIcon className="text-sidebar-foreground" />,
      items: [
        { title: "Installed", url: "#" },
        { title: "Discover", url: "#" },
      ],
    },
  ] satisfies NavMainItem[],
}


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex h-10 items-center px-3">
          <Image
            src="/coreui-logo.svg"
            alt="CoreUI"
            className="h-8 w-auto"
            width={128}
            height={32}
          />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain label="DASHBOARD" showLabel={false} items={data.dashboard} />
        <NavMain label="UI ELEMENTS" items={data.uiElements} />
        <NavMain label="EXTRAS" items={data.extras} />
        <NavMain label="PLUGINS" items={data.plugins} />
      </SidebarContent>
      <SidebarFooter>
        {/* footer content can be added here if needed */}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
