import { FilterChip } from "./components/filter-chip"
import { Button } from "@/shared/ui/button"

interface JobsHeaderProps {
  activeFilters: string[]
}

export function JobsHeader({ activeFilters }: JobsHeaderProps) {
  return (
    <header className="mb-6">
      <h1 className="text-3xl font-bold text-foreground mb-4">Recommended Jobs</h1>
      <div className="flex items-center gap-2 flex-wrap">
        {activeFilters.map((filter) => (
          <FilterChip key={filter} label={filter} />
        ))}
        <Button variant="outline" size="sm" className="rounded-full bg-transparent">
          Edit Filters
        </Button>
      </div>
    </header>
  )
}
