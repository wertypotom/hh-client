"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Briefcase, FileText, User, Bot } from "lucide-react"
import { cn } from "@/shared/utils/index"
import { Badge } from "@/shared/ui/badge"

const navItems = [
  { href: "/jobs", label: "Jobs", icon: Briefcase },
  { href: "/resume", label: "Resume", icon: FileText },
  { href: "/profile", label: "Profile", icon: User },
  { href: "/agent", label: "Agent", icon: Bot, badge: "AI" },
]

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <nav className="space-y-1">
      {navItems.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
        const Icon = item.icon

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors",
              isActive
                ? "bg-sidebar-accent text-primary font-semibold"
                : "text-muted-foreground hover:bg-accent hover:text-foreground",
            )}
          >
            <Icon className="h-5 w-5" />
            {item.label}
            {item.badge && (
              <Badge variant="secondary" className="ml-auto text-xs bg-primary/20 text-primary border-0">
                {item.badge}
              </Badge>
            )}
          </Link>
        )
      })}
    </nav>
  )
}
