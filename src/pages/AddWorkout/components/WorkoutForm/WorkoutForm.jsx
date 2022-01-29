import React, { useState } from "react";
import { WorkoutFormStyled } from "./WorkoutForm.styled";
import ExerciseForm from "../ExerciseForm/ExerciseForm";
import { Button, TextField } from "@mui/material";
export default function WorkoutForm() {
  const [exercises, setExercises] = useState([]);

  const renderExercises = () => {
    return exercises.map((exercise, index) => {
      return <ExerciseForm key={index} />;
    });
  };

  const addExercise = () => {
    const newExercise = {};
    setExercises([...exercises, newExercise]);
  };

  return (
    <WorkoutFormStyled>
      <TextField name="title" variant="outlined" label="Workout Name" fullWidth />
      <Button variant="contained" onClick={addExercise}>
        +
      </Button>
      {exercises?.length > 0 && renderExercises()}
    </WorkoutFormStyled>
  );
}
