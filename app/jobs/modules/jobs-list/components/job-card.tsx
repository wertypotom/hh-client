import { JobCardHeader } from "./job-card-header"
import { JobCardDetails } from "./job-card-details"
import { JobCardActions } from "./job-card-actions"
import { MatchScoreCircle } from "./match-score-circle"
import type { Job } from "../types"

interface JobCardProps {
  job: Job
}

export function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-card rounded-lg border border-border p-5 flex gap-6 items-start">
      <div className="flex-1">
        <JobCardHeader
          logoUrl={job.logoUrl}
          title={job.title}
          company={job.company}
          industry={job.industry}
          postedAt={job.postedAt}
        />
        <JobCardDetails location={job.location} type={job.type} salary={job.salary} level={job.level} />
        <JobCardActions applicants={job.applicants} showAutofill={job.isStrongMatch} />
      </div>
      <MatchScoreCircle score={job.matchScore} label={job.matchLabel} isStrong={job.isStrongMatch} />
    </div>
  )
}
