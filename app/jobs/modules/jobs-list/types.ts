export interface Job {
  id: string
  title: string
  company: string
  industry: string
  logoUrl: string
  location: string
  type: string
  salary: string
  level: string
  applicants: number
  postedAt: string
  matchScore: number
  matchLabel: string
  isStrongMatch: boolean
}
