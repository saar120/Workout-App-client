import React, { useState } from "react";
import { isEqual } from "date-fns";
import { Calendar } from "react-calendar";
import { CalendarContainer } from "./Calendar.styled";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function CalendarComponent() {
  const datesToAddClassTo = [
    new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
    new Date(2021, 11, 27),
    new Date(2022, 0, 29),
    new Date(2022, 0, 30),
    new Date(2022, 1, 12),
  ];

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      if (datesToAddClassTo.find((dDate) => isEqual(dDate, date))) {
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
