import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import exerciseState from "../../Recoil/atoms/exerciseAtom";
import workoutsState from "../../Recoil/userWorkoutsAtom";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes.constants";
import { v4 as uuid } from "uuid";
import { addWorkout } from "../../api/api";
import { InputGroup, WorkoutFormStyled } from "./WorkoutPage.styled";
import ExerciseForm from "./components/ExerciseForm/ExerciseForm";
import { TextField, Button } from "@mui/material";
import AddExerciseModal from "./components/AddExerciseModal/AddExerciseModal";
import Container from "../../components/StyledComponents/Container";
import DatePicker from "../../components/DatePicker/DatePicker";
import { COLORS } from "../../constants/colors.constants";

export default function WorkoutForm() {
  const setWorkouts = useSetRecoilState(workoutsState);
  const [exercises, setExercises] = useRecoilState(exerciseState);
  const [workoutName, setWorkoutName] = useState("");
  const [showAddExercise, setShowAddExercise] = useState(false);
  const [workoutDate, setWorkoutDate] = useState(new Date());

  const navigate = useNavigate();

  const renderExercises = () =>
    exercises.map((exercise, index) => <ExerciseForm key={exercise.id} exercise={exercise} exIndex={index} />);

  const addExercise = (exercise) => {
    const newExercise = { id: uuid(), name: exercise, sets: [{ id: uuid(), reps: "", weight: "" }] };
    setExercises([...exercises, newExercise]);
  };

  const resetWorkout = () => {
    setExercises([]);
    setWorkoutName("");
  };

  const finishWorkout = async () => {
    const workout = {
      title: workoutName || "Workout",
      date: workoutDate || new Date(),
      exercises,
    };
    try {
      const { data } = await addWorkout(workout);
      setWorkouts(data.workouts);
      resetWorkout();
      navigate(ROUTES.DASH);
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  return (
    <Container>
      <InputGroup>
        <TextField
          name="title"
          label="Workout Name"
          sx={{ backgroundColor: COLORS.light }}
          value={workoutName}
          variant="filled"
          onChange={({ target: { value } }) => setWorkoutName(value)}
        />
        <DatePicker
          label="Workout Date"
          value={workoutDate}
          variant="filled"
          onChange={(newDate) => {
            setWorkoutDate(newDate);
          }}
        />
      </InputGroup>
      {exercises.length > 0 && (
        <Button variant="contained" onClick={finishWorkout}>
          Finish Workout
        </Button>
      )}
      <WorkoutFormStyled>
        {exercises?.length > 0 && renderExercises()}
        <Button onClick={() => setShowAddExercise(true)}>Add Exercise</Button>
      </WorkoutFormStyled>
      {showAddExercise && <AddExerciseModal setShowAddExercise={setShowAddExercise} addExercise={addExercise} />}
    </Container>
  );
}
