import React, { useState } from "react";
import { useRecoilState } from "recoil";
import exerciseState from "../../../../Recoil/atoms/exerciseAtom";
import { v4 as uuid } from "uuid";
import { WorkoutFormStyled } from "./WorkoutForm.styled";
import ExerciseForm from "../ExerciseForm/ExerciseForm";
import { TextField, InputAdornment, IconButton } from "@mui/material";
export default function WorkoutForm() {
  const [exercises, setExercises] = useRecoilState(exerciseState);
  const [exerciseValue, setExerciseValue] = useState("");

  const renderExercises = () => {
    return exercises.map((exercise, index) => {
      return <ExerciseForm key={exercise.id} exercise={exercise} exIndex={index} />;
    });
  };

  const addExercise = () => {
    const newExercise = { id: uuid(), name: exerciseValue, sets: [{ id: uuid(), reps: 0, weight: 0 }] };
    setExercises([...exercises, newExercise]);
    setExerciseValue("");
  };

  return (
    <WorkoutFormStyled>
      <TextField name="title" variant="outlined" label="Workout Name" fullWidth />
      <TextField
        name="exercise"
        variant="outlined"
        label="Exercise"
        value={exerciseValue}
        onChange={(e) => setExerciseValue(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" color="primary" onClick={addExercise}>
                +
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {exercises?.length > 0 && renderExercises()}
    </WorkoutFormStyled>
  );
}
