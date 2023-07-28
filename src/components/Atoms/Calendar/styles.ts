import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const StyledDatePicker = styled(DatePicker)`
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #713edc;
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
    border-bottom: 1px solid #eaeaea;
    border-radius: 0;
  }

  .MuiInputBase-input {
    order: 2;
    padding: 0 20px 8px 20px;
  }

  .MuiInputAdornment-root {
    order: 1;
    button {
      padding-bottom: 15px;
      svg {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cg clip-path='url(%23clip0_115_3237)'%3E%3Crect x='2.5' y='3.3335' width='15' height='15' rx='2' stroke='%236E6E6E'/%3E%3Cpath d='M15.3128 3.64338V1.56257C15.3128 1.15991 14.9864 0.833496 14.5837 0.833496C14.1811 0.833496 13.8546 1.15991 13.8546 1.56257V3.64338H5.96985V1.56257C5.96985 1.15991 5.64343 0.833496 5.24077 0.833496C4.83812 0.833496 4.5117 1.15991 4.5117 1.56257V3.64338C3.40713 3.64338 2.5 4.53881 2.5 5.64338V7.36993H17.5V5.64338C17.5 4.53881 16.6046 3.64338 15.5 3.64338H15.3128Z' fill='%236E6E6E'/%3E%3Crect x='12.5' y='10' width='1.66667' height='1.66667' rx='0.5' fill='%236E6E6E'/%3E%3Crect x='9.16602' y='10' width='1.66667' height='1.66667' rx='0.5' fill='%236E6E6E'/%3E%3Crect x='5.83398' y='10' width='1.66667' height='1.66667' rx='0.5' fill='%236E6E6E'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_115_3237'%3E%3Crect width='20' height='20' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
        background-size: cover;
        width: 20px;
        height: 20px;
        path {
          display: none;
        }
      }
    }
  }
`;

export const StyledPaper = styled(Paper)`
  margin-top: 10px;
  box-shadow: none;

  .MuiPickersLayout-contentWrapper {
    padding: 10px;
    background-color: white;
    border: 1px solid #eaeaea;
    border-radius: 10px;
  }

  .MuiDateCalendar-root {
    align-items: center;
  }

  .MuiButtonBase-root {
    padding: 0;
  }

  .MuiPickersCalendarHeader-root {
    width: 280px;
    padding: 0;
    margin: 5px;
    justify-content: center;
  }

  .MuiPickersCalendarHeader-switchViewButton {
    display: none;
  }

  .MuiPickersArrowSwitcher-root {
    width: 280px;
    position: absolute;
    justify-content: space-between;
  }

  .MuiPickersCalendarHeader-labelContainer {
    margin: auto;
    text-align: center;
    font-family: PretendardMedium, sans-serif;
  }

  .MuiDayCalendar-header {
    gap: 3px;
    span {
      font-family: PretendardMedium, sans-serif;
    }

    span:last-of-type {
      color: #f36262;
    }
    span:first-of-type {
      color: #2b6590;
    }
  }

  .MuiDayCalendar-weekContainer {
    gap: 3px;
    button {
      font-family: PretendardMedium, sans-serif;
    }

    button:last-of-type:not(:disabled) {
      color: #f36262;
    }
    button:first-of-type:not(:disabled) {
      color: #2b6590;
    }
  }

  .MuiPickersFadeTransitionGroup-root {
    width: 100%;
  }

  .MuiPickersDay-root.Mui-selected {
    border-radius: 10px;
    background: var(--grad, linear-gradient(270deg, #6e72fc 0%, #ad1deb 100%));
  }
`;
