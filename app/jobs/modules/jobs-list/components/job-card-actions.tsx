import { Button } from "@/shared/ui/button"

interface JobCardActionsProps {
  applicants: number
  showAutofill?: boolean
}

export function JobCardActions({ applicants, showAutofill = false }: JobCardActionsProps) {
  return (
    <div className="flex items-center justify-between border-t border-border pt-4 mt-4">
      <p className="text-sm text-muted-foreground">{applicants} applicants</p>
      <div className="flex items-center gap-2">
        <Button variant="secondary" size="sm">
          Ask AI
        </Button>
        <Button size="sm">{showAutofill ? "Apply with Autofill" : "Apply"}</Button>
      </div>
    </div>
  )
}
