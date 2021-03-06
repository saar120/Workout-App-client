import styled from "styled-components";
import { COLORS } from "../../constants/colors.constants";

export const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */
  max-width: 600px;
  background-color: ${COLORS.light};
  padding: 10px;
  border-radius: 15px;
  box-shadow: ${COLORS.boxShadow};
  /* ~~~ navigation styles ~~~ */
  .react-calendar__navigation {
    display: flex;
    .react-calendar__navigation__label {
    }
    .react-calendar__navigation__arrow {
      cursor: pointer;
      flex-grow: 0.333;
    }
  }
  /* ~~~ label styles ~~~ */
  .react-calendar__month-view__weekdays {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;
    text-align: center;
  }
  /* ~~~ button styles ~~~ */
  button {
    margin: 3px;
    background-color: #b0afb4;
    border: 0;
    border-radius: 3px;
    color: black;
    padding: 5px 0;
  }
  /* ~~~ day grid styles ~~~ */
  .react-calendar__month-view__days {
    display: grid !important;
    row-gap: 0.5rem;
    justify-content: center;
    align-items: center;
    justify-items: center;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;

    .react-calendar__tile {
      width: clamp(30px, 10vw, 50px) !important;
      height: clamp(30px, 10vw, 50px);
      border-radius: 50%;
    }
    .react-calendar__tile--range {
      box-shadow: 0 0 6px 2px black;
    }
  }
  /* ~~~ neighboring month & weekend styles ~~~ */
  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.7;
  }
  /* .react-calendar__month-view__days__day--weekend {
    color: #e4e4e4;
  } */
  /* ~~~ other view styles ~~~ */
  .react-calendar__year-view__months,
  .react-calendar__decade-view__years,
  .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: 20% 20% 20% 20% 20%;
    &.react-calendar__year-view__months {
      grid-template-columns: 33.3% 33.3% 33.3%;
    }

    .react-calendar__tile {
      max-width: initial !important;
    }
  }

  .picked {
    color: white;
    cursor: pointer;
    background-color: ${COLORS.secondary};
  }

  .react-calendar__month-view__days .react-calendar__tile--range {
    box-shadow: none !important;
  }

  abbr[title] {
    font-size: 1.2rem;
    text-decoration: none !important;
  }
`;
