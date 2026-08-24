import { SearchBar } from "@/components/ui/ui-searchbar/header-searchbar"
import { SidebarTrigger } from "@/components/ui/ui-sidebar/sidebar"

function Header() {
  return (
    <div className="h-12 w-full border-b px-6 flex items-center gap-2 text-sm">
      <div>
        <SidebarTrigger className="" />
      </div>
      <div>
        <SearchBar placeholder="Search" className="w-60" />
      </div>
    </div>
  )
}

export default Header 