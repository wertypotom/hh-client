import { JobsHeader } from "./modules/jobs-header/jobs-header";
import { JobsList } from "./modules/jobs-list/jobs-list";

// Mock data - would come from API in real app
const mockJobs = [
  {
    id: "1",
    title: "Senior Frontend Engineer",
    company: "Yandex",
    industry: "Cloud Computing",
    logoUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBjdS4s97roBxIumadJndgiCsze6SURK3WdPginjIquWqWlZyOKRXFSG1HWT0bBCIk3QCdu30X29xuvX6JGUJitg6EbWFA83OBmWLe_XPMGZ4iM1J0Be3oT6_AQ_JZuhPqpS3rx-sogiFjg0VdEk5-cWxhtZKQeSvbJ-J5qCbMXPS7F_gPdfoH5a3sE_hTBX95nCzRpV2IjryWMvusNl1Edmf6wRYrg4HMvEydUHBDVn6xrvrAnYxNfWO9AebevEe-PU2K6ERLwk55f",
    location: "Moscow, Russia",
    type: "Full-time",
    salary: "$195k/yr - $218k/yr",
    level: "Mid, Senior Level",
    applicants: 188,
    postedAt: "2 hours ago",
    matchScore: 84,
    matchLabel: "Good Match",
    isStrongMatch: false,
  },
  {
    id: "2",
    title: "Frontend Developer (React)",
    company: "Ozon",
    industry: "E-commerce",
    logoUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAhMPLmtL-T_MPd1wjY2PXV8Sk_6vwJuJnIkkqMRti2ZUH8CYjqexoaKYdaAjKgwdGpnKPM9yB2QjFhiOGf63LX_SK9uAwo5olijqLpLxxV7XXyzt3hfDhWU15lMUu9HmdPp1fOL0BWe3qiEo8W83reDAcFOXCmm3y38vtBtZBoQcXHIlltKfLy_y6ervJNIq6jYHmO7xCy_MhcS0hdp7dV4rDYfRgczihRWzBJtuxaxKs9IfNrgBwId1i27itTS88mlygG3hKn1lJ4",
    location: "St. Petersburg",
    type: "Hybrid",
    salary: "$187k/yr - $234k/yr",
    level: "Senior Level",
    applicants: 50,
    postedAt: "20 hours ago",
    matchScore: 92,
    matchLabel: "Strong Match",
    isStrongMatch: true,
  },
  {
    id: "3",
    title: "Data Scientist",
    company: "Sber",
    industry: "Fintech",
    logoUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDUYbnccA9BQiUSYmi3VQLNC-9XGGqWQ7Wrl_uG3DM40n1Vd6xyqGF64Y5HM_7q8c8c8xHKWbfn55GgpZmHs2eLYpBNIp83ZRHVJowdCL2zr6Gw70Y8jCUj1TNSTQ30Qfr9LTi_siJ8ci2irZLidsTy1FbbiGrSzWyFurB10dHHgqpZxHJxEvMIvlLC6_Kqc6nGhMR6cqoQ7y7LFNc7F2l26pJ_0rGH16Wu0smUYvJ2FLCcjAaxlmbmVX7ZrrZj7_euTRiHYb1D-Wqc",
    location: "Moscow, Russia",
    type: "Full-time",
    salary: "Not specified",
    level: "Mid Level",
    applicants: 64,
    postedAt: "1 day ago",
    matchScore: 75,
    matchLabel: "Good Match",
    isStrongMatch: false,
  },
];

const activeFilters = [
  "Frontend Software Engineer",
  "React Developer",
  "Moscow",
  "Full-time",
];

export default function JobsPage() {
  return (
    <>
      <JobsHeader activeFilters={activeFilters} />
      <JobsList jobs={mockJobs} />
    </>
  );
}
