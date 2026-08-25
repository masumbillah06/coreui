import { SearchBar } from "@/components/ui/ui-searchbar/header-searchbar"
import { SidebarTrigger } from "@/components/ui/ui-sidebar/sidebar"
import { Bell, Languages, LayoutGrid, List, MailOpen, Sun } from "lucide-react"
import Image from "next/image"

function Header() {
  return (
    <div className="sticky top-0 z-20 flex h-15 w-full shrink-0 items-center justify-between gap-2 border-b bg-background px-6">
      <div className="flex items-center gap-2 text-sm">
        <div>
          <SidebarTrigger className="" />
        </div> 
        <div>
          <SearchBar placeholder="Search" className="w-50" />
        </div>
      </div>
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <Bell className="h-5 w-5" 
        />
        <List className="h-5 w-5" />
        <MailOpen className="h-5 w-5" />
        <p>|</p>
        <Languages className="h-5 w-5" />
        <Sun className="h-5 w-5" />
        <p>|</p>
        <div>
          <Image src="/avatar.jpg" alt="Avatar" width={48} height={48} className="rounded-full" />
        </div>
        <LayoutGrid className="h-5 w-5" />
      </div>
    </div>
  )
}

export default Header 