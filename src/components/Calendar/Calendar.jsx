import React from "react";
import { isEqual } from "date-fns";
import { Calendar } from "react-calendar";
import { CalendarContainer } from "./Calendar.styled";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function CalendarComponent({ datesToShow }) {
  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      if (
        datesToShow.find((dDate) => {
          const workoutDate = new Date(dDate);
          workoutDate.setHours(0, 0, 0, 0);
          return isEqual(workoutDate, date);
        })
      ) {
        return "picked";
      }
    }
  };

  return (
    <CalendarContainer>
      <Calendar
        minDetail="month"
        maxDetail="month"
        defaultView="month"
        calendarType="Hebrew"
        locale="en-US"
        prev2Label={
          <>
            <IoIosArrowBack />
            <IoIosArrowBack />
          </>
        }
        prevLabel={<IoIosArrowBack />}
        next2Label={
          <>
            <IoIosArrowForward />
            <IoIosArrowForward />
          </>
        }
        nextLabel={<IoIosArrowForward />}
        tileClassName={tileClassName}
      />
    </CalendarContainer>
  );
}
