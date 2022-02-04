import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import exerciseState from "../../Recoil/atoms/exerciseAtom";
import { v4 as uuid } from "uuid";
import { WorkoutFormStyled } from "./WorkoutPage.styled";
import ExerciseForm from "./components/ExerciseForm/ExerciseForm";
import { TextField, Button } from "@mui/material";
import AddExerciseModal from "./components/AddExerciseModal/AddExerciseModal";
import Container from "../../components/StyledComponents/Container";
import userState from "../../Recoil/atoms/userAtom";
import { addWorkout } from "../../api/api";

export default function WorkoutForm() {
  const user = useRecoilValue(userState);
  const [exercises, setExercises] = useRecoilState(exerciseState);
  const [workoutName, setWorkoutName] = useState("");
  const [showAddExercise, setShowAddExercise] = useState(false);

  const renderExercises = () =>
    exercises.map((exercise, index) => <ExerciseForm key={exercise.id} exercise={exercise} exIndex={index} />);

  const addExercise = (exercise) => {
    const newExercise = { id: uuid(), name: exercise, sets: [{ id: uuid(), reps: "", weight: "" }] };
    setExercises([...exercises, newExercise]);
  };

  const finishWorkout = async () => {
    const workout = {
      creatorID: user.result._id || user.result.googleId,
      title: workoutName || "Workout",
      exercises,
    };
    console.log(workout);
    try {
      const { data } = await addWorkout(workout);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <TextField
        name="title"
        variant="outlined"
        label="Workout Name"
        value={workoutName}
        onChange={({ target: { value } }) => setWorkoutName(value)}
      />
      {exercises.length > 0 && <Button onClick={finishWorkout}>Finish Workout</Button>}
      <WorkoutFormStyled>
        {exercises?.length > 0 && renderExercises()}
        <Button onClick={() => setShowAddExercise(true)}>Add Exercise</Button>
      </WorkoutFormStyled>
      {showAddExercise && <AddExerciseModal setShowAddExercise={setShowAddExercise} addExercise={addExercise} />}
    </Container>
  );
}
