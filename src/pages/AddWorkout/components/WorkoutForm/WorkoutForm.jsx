import React, { useState } from "react";
import { useRecoilState } from "recoil";
import exerciseState from "../../../../Recoil/atoms/exerciseAtom";
import { v4 as uuid } from "uuid";
import { WorkoutFormStyled } from "./WorkoutForm.styled";
import ExerciseForm from "../ExerciseForm/ExerciseForm";
import { TextField, Button } from "@mui/material";
import AddExerciseModal from "../AddExerciseModal/AddExerciseModal";
export default function WorkoutForm() {
  const [exercises, setExercises] = useRecoilState(exerciseState);
  const [showAddExercise, setShowAddExercise] = useState(false);

  const renderExercises = () =>
    exercises.map((exercise, index) => <ExerciseForm key={exercise.id} exercise={exercise} exIndex={index} />);

  const addExercise = (exercise) => {
    const newExercise = { id: uuid(), name: exercise, sets: [{ id: uuid(), reps: "", weight: "" }] };
    setExercises([...exercises, newExercise]);
  };

  return (
    <>
      <WorkoutFormStyled>
        <TextField name="title" variant="outlined" label="Workout Name" fullWidth />
        <Button onClick={() => setShowAddExercise(true)}>Add Exercise</Button>
        {exercises?.length > 0 && renderExercises()}
      </WorkoutFormStyled>
      {showAddExercise && <AddExerciseModal setShowAddExercise={setShowAddExercise} addExercise={addExercise} />}
    </>
  );
}
