interface FilterChipProps {
  label: string
}

export function FilterChip({ label }: FilterChipProps) {
  return (
    <button className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-foreground hover:bg-secondary/80 transition-colors">
      {label}
    </button>
  )
}
