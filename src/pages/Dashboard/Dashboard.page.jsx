import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes.constants";
import workoutsState from "../../Recoil/userWorkoutsAtom";
import _ from "lodash";
import userState from "../../Recoil/atoms/userAtom";
import { fetchUserWorkouts } from "../../api/api";
import CalendarComponent from "../../components/Calendar/Calendar";
import WorkoutCard from "./components/WorkoutCard/WorkoutCard";
import WorkoutSlider from "./components/WorkoutCard/WorkoutsSlider/WorkoutSlider";
import Container from "../../components/StyledComponents/Container";
import { DashboardPageStyled, WorkoutHolder } from "./Dashboard.Styles";
import WorkoutChart from "./components/Chart/WorkoutChart";
import exerciseState from "../../Recoil/atoms/exerciseAtom";

function DashboardPage() {
  const user = useRecoilValue(userState);
  const setExercises = useSetRecoilState(exerciseState);
  const [workouts, SetWorkouts] = useRecoilState(workoutsState);
  const [currentWorkoutIndex, setCurrentWorkoutIndex] = useState(0);

  const navigate = useNavigate();

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

  const redoHandler = () => {
    const exercisesCopy = _.cloneDeep(workouts[currentWorkoutIndex].exercises);
    exercisesCopy.forEach((exercise) => {
      delete exercise.rm1;
      delete exercise.totalReps;
      delete exercise.volume;
      delete exercise.validSets;
      delete exercise.totalWeight;
    });
    setExercises(exercisesCopy);
    navigate(ROUTES.WORKOUT);
  };

  return (
    <Container>
      {workouts.length === 0 ? (
        <h1>Loading</h1>
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
