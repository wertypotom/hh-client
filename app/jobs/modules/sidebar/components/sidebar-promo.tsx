import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function SidebarPromo() {
  return (
    <div className="mt-8 pt-4 border-t border-border">
      <Link
        href="/refer"
        className="flex items-center justify-between p-4 bg-sidebar-accent rounded-lg hover:bg-sidebar-accent/80 transition-colors"
      >
        <div>
          <p className="font-semibold text-foreground">Refer & Earn</p>
          <p className="text-sm text-muted-foreground">Invite friends & earn!</p>
        </div>
        <ChevronRight className="h-5 w-5 text-muted-foreground" />
      </Link>
    </div>
  )
}
