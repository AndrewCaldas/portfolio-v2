import { format, parse, differenceInMonths, differenceInYears } from "date-fns";

interface formatDateRange {
  start: string;
  end?: string;
}

function formatDate(date: Date) {
  return format(date, "MMM yyyy");
}

function parseDate(date: string | undefined) {
  return date ? parse(date, "dd/MM/yyyy", new Date()) : new Date();
}

export function formatDateRange({ start, end }: formatDateRange): string {
  const startDate = parseDate(start);
  const endDate = parseDate(end);

  const startStr = formatDate(startDate);
  const endStr = end ? formatDate(endDate) : "Present";

  const totalMonths = differenceInMonths(endDate, startDate);
  const totalYears = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const durationStr = [
    totalYears > 0 ? `${totalYears} yr${totalYears > 1 ? "s" : ""}` : "",
    months > 0 ? `${months} mo${months > 1 ? "s" : ""}` : "",
  ].join(" ");

  return `${startStr} --- ${endStr} • ${durationStr}`;
}
