"use client"

import Link from "next/link"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/ui-sidebar/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/ui-sidebar/sidebar"
import { ChevronRightIcon } from "lucide-react"

export type NavMainItem = {
  title: string
  url: string
  icon?: React.ReactNode
  isActive?: boolean
  badge?: {
    label: string
    className: string
  }
  items?: {
    title: string
    url: string
    isPro?: boolean
    isActive?: boolean
  }[]
}

export function NavMain({
  items,
  label,
  showLabel = true,
}: {
  items: NavMainItem[]
  label: string
  showLabel?: boolean
}) {
  return (
    <SidebarGroup>
      {showLabel && (
        <SidebarGroupLabel>
          <span className="font-extrabold">{label}</span>
        </SidebarGroupLabel>
      )}
      <SidebarMenu className="gap-1">
        {items.map((item) => (
          item.items?.length ? (
            <Collapsible
              key={item.title}  
              defaultOpen={item.isActive}
              className="group/collapsible"
              render={<SidebarMenuItem />}
            >
              <CollapsibleTrigger
                render={
                  <SidebarMenuButton
                    className="h-9 text-[14px] text-sidebar-foreground/70"
                    isActive={item.isActive}
                    tooltip={item.title}
                  />
                }
              >
                {item.icon}
                <span>{item.title}</span>
                <ChevronRightIcon className="ml-auto transition-transform duration-200 group-data-open/collapsible:rotate-90" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub className="gap-2">
                  {item.items.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton
                        className="h-8 text-[14px] text-sidebar-foreground/70"
                        isActive={subItem.isActive}
                        render={<Link href={subItem.url} />}
                      >
                        <span>{subItem.title}</span>
                        {subItem.isPro && (
                          <span className="ml-auto text-[9px] font-semibold text-white bg-red-500 px-1.5 py-0.5 rounded-sm">
                            PRO
                          </span>
                        )}
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </Collapsible>
          ) : (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                className="h-9 text-[14px] text-sidebar-foreground/70"
                isActive={item.isActive}
                tooltip={item.title}
                render={<Link href={item.url} />}
              >
                {item.icon}
                <span className="min-w-0 flex-1 truncate">{item.title}</span>
                {item.badge && (
                  <span className={`text-[9px] font-semibold text-white px-1.5 py-0.5 rounded-sm ${item.badge.className}`}>
                    {item.badge.label}
                  </span>
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}


