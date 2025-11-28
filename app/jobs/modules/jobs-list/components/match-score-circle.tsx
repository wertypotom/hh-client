import { cn } from "@/shared/utils/index"

interface MatchScoreCircleProps {
  score: number
  label: string
  isStrong?: boolean
}

export function MatchScoreCircle({ score, label, isStrong = false }: MatchScoreCircleProps) {
  return (
    <div
      className={cn(
        "w-48 flex-shrink-0 rounded-lg p-4 text-center",
        isStrong ? "bg-primary/10 border border-primary/30" : "bg-secondary",
      )}
    >
      <div className="relative w-24 h-24 mx-auto mb-2">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
          <path
            className="text-primary/20"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />
          <path
            className="text-primary"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeDasharray={`${score}, 100`}
            strokeLinecap="round"
            strokeWidth="3"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-foreground">
          {score}%
        </span>
      </div>
      <p className={cn("font-semibold", isStrong ? "text-primary" : "text-foreground")}>{label}</p>
    </div>
  )
}
