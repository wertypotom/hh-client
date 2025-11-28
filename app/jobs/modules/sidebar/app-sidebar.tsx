import { SidebarLogo } from "./components/sidebar-logo"
import { SidebarNav } from "./components/sidebar-nav"
import { SidebarPromo } from "./components/sidebar-promo"
import { SidebarSecondaryNav } from "./components/sidebar-secondary-nav"
import { SidebarSettings } from "./components/sidebar-settings"

export function AppSidebar() {
  return (
    <aside className="w-64 flex-shrink-0 bg-card border-r border-border p-4 flex flex-col justify-between">
      <div>
        <SidebarLogo />
        <SidebarNav />
        <SidebarPromo />
        <SidebarSecondaryNav />
      </div>
      <SidebarSettings />
    </aside>
  )
}
