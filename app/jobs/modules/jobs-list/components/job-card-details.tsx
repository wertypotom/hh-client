import { MapPin, Clock, DollarSign, BarChart3 } from "lucide-react"

interface JobCardDetailsProps {
  location: string
  type: string
  salary: string
  level: string
}

export function JobCardDetails({ location, type, salary, level }: JobCardDetailsProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-muted-foreground mb-4">
      <div className="flex items-center gap-1.5">
        <MapPin className="h-4 w-4" />
        {location}
      </div>
      <div className="flex items-center gap-1.5">
        <Clock className="h-4 w-4" />
        {type}
      </div>
      <div className="flex items-center gap-1.5">
        <DollarSign className="h-4 w-4" />
        {salary}
      </div>
      <div className="flex items-center gap-1.5">
        <BarChart3 className="h-4 w-4" />
        {level}
      </div>
    </div>
  )
}
