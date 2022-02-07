import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import workoutsState from "../../Recoil/userWorkoutsAtom";
import userState from "../../Recoil/atoms/userAtom";
import { fetchUserWorkouts } from "../../api/api";
import CalendarComponent from "../../components/Calendar/Calendar";
import WorkoutCard from "./components/WorkoutCard/WorkoutCard";
import WorkoutSlider from "./components/WorkoutCard/WorkoutsSlider/WorkoutSlider";
import Container from "../../components/StyledComponents/Container";
import { DashboardPageStyled, WorkoutHolder } from "./Dashboard.Styles";
import WorkoutChart from "./components/Chart/WorkoutChart";

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
        <DashboardPageStyled>
          {/* <Button onClick={() => setCurrentWorkoutIndex(0)}>Show Latest</Button> */}
          <WorkoutHolder>
            <WorkoutCard workout={workouts[currentWorkoutIndex]} isLatest={isLatest()} />
            <WorkoutSlider workouts={workouts} setCurrentWorkout={(index) => setCurrentWorkoutIndex(index)} />
          </WorkoutHolder>
          <CalendarComponent datesToShow={getWorkoutDates()} />
          <WorkoutChart />
        </DashboardPageStyled>
      )}
    </Container>
  );
}

export default DashboardPage;
