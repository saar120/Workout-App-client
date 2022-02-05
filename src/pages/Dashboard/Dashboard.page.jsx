import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import workoutsState from "../../Recoil/userWorkoutsAtom";
import userState from "../../Recoil/atoms/userAtom";
import { fetchUserWorkouts } from "../../api/api";
import CalendarComponent from "../../components/Calendar/Calendar";
import Container from "../../components/StyledComponents/Container";
import WorkoutCard from "./components/WorkoutCard/WorkoutCard";
import { Button } from "@mui/material";

function DashboardPage() {
  const user = useRecoilValue(userState);
  const [workouts, SetWorkouts] = useRecoilState(workoutsState);
  const [currentWorkoutIndex, setCurrentWorkoutIndex] = useState(null);

  useEffect(() => {
    if (!user) return;
    const getWorkouts = async () => {
      try {
        const {
          data: { workouts: userWorkouts },
        } = await fetchUserWorkouts();
        SetWorkouts(userWorkouts);
        setCurrentWorkoutIndex(userWorkouts.length - 1);
      } catch (error) {
        console.log(error);
      }
    };
    getWorkouts();
  }, [SetWorkouts, user]);

  const getWorkoutDates = () => {
    if (workouts.length === 0) return [];
    return workouts.map((workout) => {
      return workout.date;
    });
  };

  const isLatest = () => {
    return workouts.length - 1 === currentWorkoutIndex;
  };

  return (
    <Container>
      {workouts.length === 0 || currentWorkoutIndex === null ? (
        <h1>Loading</h1>
      ) : (
        <>
          <Button onClick={() => setCurrentWorkoutIndex(workouts.length - 1)}>Show Latest</Button>
          <WorkoutCard workout={workouts[currentWorkoutIndex]} isLatest={isLatest()} />
          <CalendarComponent datesToShow={getWorkoutDates()} />
        </>
      )}
    </Container>
  );
}

export default DashboardPage;

// const onClickDay = (value) => {
//   const clickedIndex = workouts.findIndex((workout) => {
//     const workoutDate = new Date(workout.date).setHours(0, 0, 0, 0);
//     return isEqual(workoutDate, value);
//   });
//   clickedIndex >= 0 && setCurrentWorkoutIndex(clickedIndex);
// };
