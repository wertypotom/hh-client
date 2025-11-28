import Link from "next/link"
import { Settings } from "lucide-react"

export function SidebarSettings() {
  return (
    <nav>
      <Link
        href="/settings"
        className="flex items-center gap-3 px-3 py-2.5 text-muted-foreground hover:bg-accent hover:text-foreground rounded-lg font-medium transition-colors"
      >
        <Settings className="h-5 w-5" />
        Settings
      </Link>
    </nav>
  )
}
