import React, { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes.constants";
import workoutsState from "../../Recoil/userWorkoutsAtom";
import { fetchUserWorkouts } from "../../api/api";
import { duplicateExercises } from "./Dashboard.lib";
import CalendarComponent from "../../components/Calendar/Calendar";
import WorkoutCard from "./components/WorkoutCard/WorkoutCard";
import WorkoutSlider from "./components/WorkoutCard/WorkoutsSlider/WorkoutSlider";
import Container from "../../components/StyledComponents/Container";
import { DashboardPageStyled, WorkoutHolder } from "./Dashboard.Styles";
import WorkoutChart from "./components/Chart/WorkoutChart";
import exerciseState from "../../Recoil/atoms/exerciseAtom";
import GoWorkout from "./components/GoWorkout/GoWorkout";

function DashboardPage() {
  const setExercises = useSetRecoilState(exerciseState);
  const [workouts, SetWorkouts] = useRecoilState(workoutsState);
  const [currentWorkoutIndex, setCurrentWorkoutIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const getWorkouts = async () => {
      try {
        const {
          data: { workouts: userWorkouts },
        } = await fetchUserWorkouts();
        setLoading(false);
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

  const redoHandler = () => {
    const exercisesCopy = duplicateExercises(workouts[currentWorkoutIndex].exercises);
    setExercises(exercisesCopy);
    navigate(ROUTES.WORKOUT);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Container>
      {workouts.length === 0 ? (
        <GoWorkout />
      ) : (
        <DashboardPageStyled>
          {/* <Button onClick={() => setCurrentWorkoutIndex(0)}>Show Latest</Button> */}
          <WorkoutHolder>
            <WorkoutCard workout={workouts[currentWorkoutIndex]} isLatest={isLatest()} redoHandler={redoHandler} />
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
