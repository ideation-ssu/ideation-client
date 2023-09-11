import differenceInCalendarDays from "date-fns/differenceInCalendarDays/index";

export function parseIsoDate(isoDate: string) {
  const date = new Date(isoDate);

  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");

  return `${year}. ${month}. ${day}`;
}

export function getDueDate(isoDate: string) {
  const targetDate = new Date(isoDate);
  const nowDate = new Date();

  return differenceInCalendarDays(targetDate, nowDate);
}
