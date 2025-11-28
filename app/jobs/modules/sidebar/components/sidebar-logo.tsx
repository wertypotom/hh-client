import Link from "next/link"

export function SidebarLogo() {
  return (
    <Link href="/" className="flex items-center gap-2 mb-8 px-2">
      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center font-bold text-primary-foreground text-lg">
        H
      </div>
      <span className="font-bold text-xl text-primary">hh-assist</span>
    </Link>
  )
}
