import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import workoutsState from "../../Recoil/userWorkoutsAtom";

import CalendarComponent from "../../components/Calendar/Calendar";
import Container from "../../components/StyledComponents/Container";

function DashboardPage() {
  const [workouts, SetWorkouts] = useRecoilState(workoutsState);

  const getWorkoutDates = () => {
    if (workouts.length === 0) return [];
    return workouts.map((workout) => {
      return workout.date;
    });
  };

  return (
    <Container>
      <CalendarComponent datesToShow={getWorkoutDates()} />
    </Container>
  );
}

export default DashboardPage;
