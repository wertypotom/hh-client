import { JobCard } from "./components/job-card"
import type { Job } from "./types"

interface JobsListProps {
  jobs: Job[]
}

export function JobsList({ jobs }: JobsListProps) {
  return (
    <div className="grid grid-cols-1 gap-6">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  )
}
