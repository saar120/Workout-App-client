import React from "react";
import { useRecoilState } from "recoil";
import exerciseState from "../../../../Recoil/atoms/exerciseAtom";
import _ from "lodash";
import { v4 as uuid } from "uuid";
import { Typography, Button } from "@mui/material";

import SetForm from "../SetForm/SetForm";

export default function ExerciseForm({ exercise, exIndex }) {
  const [exercises, setExercises] = useRecoilState(exerciseState);

  const renderSets = () => {
    return exercises[exIndex].sets.map((set, setIndex) => {
      return <SetForm key={set.id} set={set} exIndex={exIndex} setIndex={setIndex} />;
    });
  };

  const addSets = () => {
    const updatedExercises = _.cloneDeep(exercises);
    console.log(updatedExercises[exIndex].sets);
    updatedExercises[exIndex].sets.push({ id: uuid(), reps: 0, weight: 0 });
    setExercises(updatedExercises);
  };

  return (
    <div>
      <Typography variant="p">{exercise.name}</Typography>
      {renderSets()}
      <Button variant="contained" fullWidth onClick={addSets}>
        Add Set
      </Button>
    </div>
  );
}
