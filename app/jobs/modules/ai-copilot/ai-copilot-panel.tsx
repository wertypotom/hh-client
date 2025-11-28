import { MessageSquare } from "lucide-react"

export function AiCopilotPanel() {
  return (
    <aside className="w-80 flex-shrink-0 bg-card border-l border-border p-6 hidden lg:flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          <MessageSquare className="h-8 w-8 text-primary" />
        </div>
        <h3 className="font-bold text-lg text-foreground">AI Co-pilot</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Chat and assistance features will appear here in a future update.
        </p>
      </div>
    </aside>
  )
}
