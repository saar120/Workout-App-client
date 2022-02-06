import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import workoutsState from "../../Recoil/userWorkoutsAtom";
import userState from "../../Recoil/atoms/userAtom";
import { fetchUserWorkouts } from "../../api/api";
import CalendarComponent from "../../components/Calendar/Calendar";
import WorkoutCard from "./components/WorkoutCard/WorkoutCard";
import { Button } from "@mui/material";
import WorkoutSlider from "./components/WorkoutCard/WorkoutsSlider/WorkoutSlider";
import Container from "../../components/StyledComponents/Container";

function DashboardPage() {
  const user = useRecoilValue(userState);
  const [workouts, SetWorkouts] = useRecoilState(workoutsState);
  const [currentWorkoutIndex, setCurrentWorkoutIndex] = useState(0);

  useEffect(() => {
    if (!user) return;
    const getWorkouts = async () => {
      try {
        const {
          data: { workouts: userWorkouts },
        } = await fetchUserWorkouts();
        SetWorkouts(userWorkouts);
      } catch (error) {
        console.log(error);
      }
    };
    getWorkouts();
    //eslint-disable-next-line
  }, [SetWorkouts]);

  const getWorkoutDates = () => {
    if (workouts.length === 0) return [];
    return workouts.map((workout) => {
      return workout.date;
    });
  };

  const isLatest = () => {
    return currentWorkoutIndex === 0;
  };

  return (
    <Container>
      {workouts.length === 0 ? (
        <h1>Loading</h1>
      ) : (
        <div
          style={{
            display: "flex",
            width: "100%",
            flexWrap: "wrap",
            alignItems: "baseline",
            justifyContent: "center",
            gap: "2rem",
          }}>
          <Button onClick={() => setCurrentWorkoutIndex(0)}>Show Latest</Button>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <WorkoutCard workout={workouts[currentWorkoutIndex]} isLatest={isLatest()} />
            <WorkoutSlider workouts={workouts} setCurrentWorkout={(index) => setCurrentWorkoutIndex(index)} />
          </div>
          <CalendarComponent datesToShow={getWorkoutDates()} />
        </div>
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
