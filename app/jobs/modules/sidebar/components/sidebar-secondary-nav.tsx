import Link from "next/link"
import { MessageSquare, Smartphone, MessageCircle } from "lucide-react"

const secondaryNavItems = [
  { href: "/messages", label: "Messages", icon: MessageSquare },
  { href: "/download", label: "Download App", icon: Smartphone },
  { href: "/feedback", label: "Feedback", icon: MessageCircle },
]

export function SidebarSecondaryNav() {
  return (
    <nav className="space-y-1 mt-4">
      {secondaryNavItems.map((item) => {
        const Icon = item.icon
        return (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2.5 text-muted-foreground hover:bg-accent hover:text-foreground rounded-lg font-medium transition-colors"
          >
            <Icon className="h-5 w-5" />
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
