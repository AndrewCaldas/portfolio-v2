import { formatDateRange } from "@/utils/formatDate";
import Link from "next/link";

interface ExperienceCardProps {
  position: string;
  companyUrl: string;
  companyName: string;
  companyLocation: string;
  startDate: string;
  endDate?: string;
}

export function ExperienceCard({
  position,
  companyUrl,
  companyName,
  companyLocation,
  startDate,
  endDate,
}: ExperienceCardProps) {
  const formatted = formatDateRange({
    start: startDate,
    end: endDate,
  });

  return (
    <div className="flex flex-col gap-1.5">
      <div className="text-md font-semibold">{position}</div>
      <div className="text-muted-foreground">
        <Link
          target="_blank"
          href={companyUrl}
          className="dark:text-zinc-50 underline"
        >
          {companyName}
        </Link>
        {" • "}
        {companyLocation}
      </div>
      <div className="text-muted-foreground">{formatted}</div>
    </div>
  );
}
