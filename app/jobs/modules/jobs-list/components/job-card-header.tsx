import Image from "next/image";

interface JobCardHeaderProps {
  logoUrl: string;
  title: string;
  company: string;
  industry: string;
  postedAt: string;
}

export function JobCardHeader({
  logoUrl,
  title,
  company,
  industry,
  postedAt,
}: JobCardHeaderProps) {
  return (
    <div className="flex items-start justify-between mb-3">
      <div className="flex items-center gap-4">
        <Image
          src={""}
          alt={`${company} logo`}
          width={48}
          height={48}
          className="rounded object-contain bg-white"
        />
        <div>
          <h2 className="text-lg font-bold text-foreground">{title}</h2>
          <p className="text-sm text-muted-foreground">
            {company} / {industry}
          </p>
        </div>
      </div>
      <span className="text-xs bg-secondary text-muted-foreground px-2 py-1 rounded">
        {postedAt}
      </span>
    </div>
  );
}
