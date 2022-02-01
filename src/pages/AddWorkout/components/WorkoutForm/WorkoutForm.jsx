import React, { useState } from "react";
import { useRecoilState } from "recoil";
import exerciseState from "../../../../Recoil/atoms/exerciseAtom";
import { v4 as uuid } from "uuid";
import { WorkoutFormStyled } from "./WorkoutForm.styled";
import ExerciseForm from "../ExerciseForm/ExerciseForm";
import { TextField } from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";
export default function WorkoutForm() {
  const [exercises, setExercises] = useRecoilState(exerciseState);
  const [exerciseValue, setExerciseValue] = useState("");

  const renderExercises = () =>
    exercises.map((exercise, index) => <ExerciseForm key={exercise.id} exercise={exercise} exIndex={index} />);

  const addExercise = () => {
    const newExercise = { id: uuid(), name: exerciseValue, sets: [{ id: uuid(), reps: "", weight: "" }] };
    setExercises([...exercises, newExercise]);
    setExerciseValue("");
  };

  return (
    <WorkoutFormStyled>
      <TextField name="title" variant="outlined" label="Workout Name" fullWidth />
      <SearchBar />
      {exercises?.length > 0 && renderExercises()}
    </WorkoutFormStyled>
  );
}
