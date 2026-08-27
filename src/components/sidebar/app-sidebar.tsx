"use client"

import * as React from "react"
import Image from "next/image"

import { NavMain, type NavMainItem } from "@/components/sidebar/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/ui-sidebar/sidebar"
import { ChartPieIcon, Grid3X3Icon, MapIcon, PuzzleIcon, CalendarDays, SquareTextIcon, StarIcon, GaugeIcon, Calculator, LockIcon, BugIcon, LogsIcon, MailOpen, FileTextIcon } from "lucide-react"


const data = {
  dashboard: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: <GaugeIcon className="text-sidebar-foreground" />,
      badge: {
        label: "NEW",
        className: "bg-blue-500",
      },
    },
  ] satisfies NavMainItem[],
  uiElements: [
    {
      title: "Charts",
      url: "/charts",
      icon: <ChartPieIcon className="text-sidebar-foreground" />,
    },
    {
      title: "Components",
      url: "#",
      icon: <PuzzleIcon className="text-sidebar-foreground" />,
      isActive: false,
      items: [
        {
          title: "Accordion",
          url: "#",
        },
        {
          title: "Alert",
          url: "#",
        },
        {
          title: "Badge",
          url: "#",
        },
        {
          title: "Breadcrumb",
          url: "#",
        },
        {
          title: "Buttons",
          url: "#",
        },
        {
          title: "Buttons Group",
          url: "#",
        },
        {
          title: "Calendar",
          url: "#",
          isPro: true,
        },
        {
          title: "Cards",
          url: "#",
        },
        {
          title: "Carousel",
          url: "#",
        },
        {
          title: "Chip",
          url: "#",
        },
        {
          title: "Chip set",
          url: "#",
        },
        {
          title: "Collapse",
          url: "#",
        },
        {
          title: "Dropdowns",
          url: "#",
        },
        {
          title: "List Group",
          url: "#",
        },
        {
          title: "Loading Buttons",
          url: "#",
          isPro: true,
        },
        {
          title: "Modals",
          url: "#",
        },
        {
          title: "Nav & Tabs",
          url: "#",
        },
        {
          title: "Pagination",
          url: "#",
        },
        {
          title: "Placeholders",
          url: "#",
        },
        {
          title: "Popovers",
          url: "#",
        },
        {
          title: "Progress",
          url: "#",
        },
        {
          title: "Search Button",
          url: "#",
        },
        {
          title: "Spinners",
          url: "#",
        },
        {
          title: "Tables",
          url: "#",
        },
        {
          title: "Tabs",
          url: "#",
        },
        {
          title: "Toasts",
          url: "#",
        },
        {
          title: "Tooltips",
          url: "#",
        },
        {
          title: "Virtual Scroller",
          url: "#",
          isPro: true,
        },
      ],
    },
    {
      title: "Data Grid",
      url: "#",
      icon: <Grid3X3Icon className="text-sidebar-foreground" />,
      badge: {
        label: "ADD-ON",
        className: "bg-yellow-500",
      },
    },
    {
      title: "Forms",
      url: "#",
      icon: <SquareTextIcon className="text-sidebar-foreground" />,
      items: [
        {
          title: "Autocomplete",
          url: "#",
          isPro: true,
        },
        {
          title: "Checks & Radios",
          url: "#",
        },
        {
          title: "Chip Input",
          url: "#",
        },
        {
          title: "Date Picker",
          url: "#",
          isPro: true,
        },
        {
          title: "Date Range Picker",
          url: "#",
          isPro: true,
        },
        {
          title: "Floating Labels",
          url: "#",
        },
        {
          title: "Form Control",
          url: "#",
        },
        {
          title: "Input Group",
          url: "#",
        },
        {
          title: "Multi Select",
          url: "#",
          isPro: true,
        },
        {
          title: "OTP Input",
          url: "#",
          isPro: true,
        },
        {
          title: "Password Input",
          url: "#",
          isPro: true,
        },
        {
          title: "Range",
          url: "#",
        },
        {
          title: "Range Slider",
          url: "#",
          isPro: true,
        },
        {
          title: "Rating",
          url: "#",
          isPro: true,
        },
        {
          title: "Select",
          url: "#",
        },
        {
          title: "Stepper",
          url: "#",
          isPro: true,
        },
        {
          title: "Time Picker",
          url: "#",
          isPro: true,
        },
        {
          title: "Layout",
          url: "#",
        },
        {
          title: "Validation",
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
          title: "CoreUI Free",
          url: "#",
        },
        {
          title: "CoreUI Flags",
          url: "#",
        },
        {
          title: "CoreUI Brands",
          url: "#",
        },
      ],
    },
    {
      title: "Scheduler",
      url: "#",
      icon: (
        <CalendarDays className="text-sidebar-foreground"
        />
      ),
      badge: {
        label: "ADD-ON",
        className: "bg-yellow-500",
      },
    },
    {
      title: "Smart Table",
      url: "#",
      icon: (
        <Grid3X3Icon className="text-sidebar-foreground"
        />
      ),
      badge: {
        label: "PRO",
        className: "bg-red-500",
      },
    },
    {
      title: "Widgets",
      url: "#",
      icon: (
        <Calculator className="text-sidebar-foreground"
        />
      ),
      badge: {
        label: "NEW",
        className: "bg-blue-500",
      },
    },
  ] satisfies NavMainItem[],
  extras: [
    {
      title: "Authentication",
      url: "#",
      icon: <LockIcon className="text-sidebar-foreground" />,
      items: [
        { title: "Overview", url: "#" },
        { title: "Locations", url: "#" },
      ],
    },
    {
      title: "Error Pages",
      url: "#",
      icon: <BugIcon className="text-sidebar-foreground" />,
      items: [
        { title: "Overview", url: "#" },
        { title: "Locations", url: "#" },
      ],
    },
  ] satisfies NavMainItem[],
  plugins: [
    {
      title: "Calendar",
      url: "#",
      icon: (
        <CalendarDays className="text-sidebar-foreground"
        />
      ),
      badge: {
        label: "PRO",
        className: "bg-red-500",
      },
    },
    {
      title: "Google Maps",
      url: "#",
      icon: (
        <MapIcon className="text-sidebar-foreground"
        />
      ),
      badge: {
        label: "PRO",
        className: "bg-red-500",
      },
    }
  ] satisfies NavMainItem[],
  apps: [
    {
      title: "Invoices",
      url: "#",
      icon: (
        <LogsIcon className="text-sidebar-foreground"
        />
      ),
      items: [
        { title: "Invoice", url: "#", isPro: true },
      ],
    },
    {
      title: "Email",
      url: "#",
      icon: (
        <MailOpen className="text-sidebar-foreground"
        />
      ),
      items: [
        { title: "Inbox", url: "#", isPro: true },
        { title: "Messages", url: "#", isPro: true },
        { title: "Compose", url: "#", isPro: true },
      ],
    }, 
    {
      title: "Docs",
      url: "#",
      icon: (
        <FileTextIcon className="text-sidebar-foreground"
        />
      )
    }
  ] satisfies NavMainItem[],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex h-10 items-center px-3 mt-2 border-b border-sidebar-border">
          <Image
            src="/coreui-logo.svg"
            alt="CoreUI"
            className="h-7.5 w-auto mb-3"
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
        <NavMain label="APPS" items={data.apps} />
      </SidebarContent>
      <SidebarFooter>
        {/* footer content can be added here if needed */}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
