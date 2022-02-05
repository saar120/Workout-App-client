import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import workoutsState from "../../Recoil/userWorkoutsAtom";
import userState from "../../Recoil/atoms/userAtom";
import { fetchUserWorkouts } from "../../api/api";
import CalendarComponent from "../../components/Calendar/Calendar";
import Container from "../../components/StyledComponents/Container";
import { isEqual } from "date-fns";

function DashboardPage() {
  const user = useRecoilValue(userState);
  const [workouts, SetWorkouts] = useRecoilState(workoutsState);

  const onClickDay = (value) => {
    const workoutClicked = workouts.find((workout) => {
      const workoutDate = new Date(workout.date).setHours(0, 0, 0, 0);
      return isEqual(workoutDate, value);
    });
    console.log(workoutClicked);
  };

  useEffect(() => {
    if (!user) return;
    const getWorkouts = async () => {
      const {
        data: { workouts: userWorkouts },
      } = await fetchUserWorkouts();
      SetWorkouts(userWorkouts);
    };
    getWorkouts();
  }, [SetWorkouts, user]);

  const getWorkoutDates = () => {
    if (workouts.length === 0) return [];
    return workouts.map((workout) => {
      return workout.date;
    });
  };

  return (
    <Container>
      <CalendarComponent datesToShow={getWorkoutDates()} onClickDay={onClickDay} />
    </Container>
  );
}

export default DashboardPage;
