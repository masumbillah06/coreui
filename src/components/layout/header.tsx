import { SearchBar } from "@/components/ui/ui-searchbar/header-searchbar"
import { SidebarTrigger } from "@/components/ui/ui-sidebar/sidebar"
import { Bell, Languages, List, MailOpen, Sun } from "lucide-react"

function Header() {
  return (
    <div className="h-12 w-full border-b px-6 flex items-center justify-between gap-2">
      <div className="flex items-center gap-2 text-sm">
        <div>
          <SidebarTrigger className="" />
        </div> 
        <div>
          <SearchBar placeholder="Search" className="w-60" />
        </div>
      </div>
      <div className="flex items-center gap-5 text-sm">
        <Bell className="h-5 w-5" />
        <List className="h-5 w-5" />
        <MailOpen className="h-5 w-5" />
        <p>|</p>
        <Languages className="h-5 w-5" />
        <Sun className="h-5 w-5" />
        <p>|</p>
        <div>
          <img src="/avatar.jpg" alt="Avatar" className="h-12 w-12 rounded-full" />
          
        </div>
      </div>
    </div>
  )
}

export default Header 