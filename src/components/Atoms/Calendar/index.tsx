import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";

import { StyledDatePicker, StyledPaper } from "./styles";

function Calendar({
  date,
  setDate,
}: {
  date: Dayjs;
  setDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
}): React.ReactElement {
  const today = dayjs();
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale={"en"}
      dateFormats={{
        monthAndYear: "YYYY년 MM월",
      }}
    >
      <StyledDatePicker
        value={date}
        onChange={(date) => setDate(date as Dayjs)}
        format="YYYY년 MM월 DD일"
        dayOfWeekFormatter={(day) =>
          daysOfWeek[["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].indexOf(day)]
        }
        shouldDisableDate={(day) => {
          return dayjs(day as Dayjs).isBefore(today);
        }}
        components={{
          DesktopPaper: StyledPaper,
        }}
      />
    </LocalizationProvider>
  );
}

export default Calendar;
