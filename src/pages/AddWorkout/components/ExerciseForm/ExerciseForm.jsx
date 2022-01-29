import React from "react";
import { useRecoilState } from "recoil";
import exerciseState from "../../../../Recoil/atoms/exerciseAtom";
import _ from "lodash";
import { v4 as uuid } from "uuid";
import { Typography, Button, IconButton } from "@mui/material";
import SetForm from "../SetForm/SetForm";

export default function ExerciseForm({ exercise, exIndex }) {
  const [exercises, setExercises] = useRecoilState(exerciseState);

  const removeExercise = () => {
    const newExercise = [...exercises];
    newExercise.splice(exIndex, 1);
    setExercises(newExercise);
  };

  const renderSets = (set, setIndex) => {
    const onChangeHandlerCB = onChangeHandler(exIndex, setIndex);
    return <SetForm key={set.id} set={set} onChange={onChangeHandlerCB} />;
  };

  const addSet = () => {
    const updatedExercises = _.cloneDeep(exercises);
    updatedExercises[exIndex].sets.push({ id: uuid(), reps: "", weight: "" });
    setExercises(updatedExercises);
  };

  const onChangeHandler =
    (exIndex, setIndex) =>
    ({ target: { value, name } }) => {
      const updatedExercises = _.cloneDeep(exercises);
      updatedExercises[exIndex].sets[setIndex][name] = +value;
      setExercises(updatedExercises);
    };

  return (
    <div>
      <Typography variant="p">{exercise.name}</Typography>
      <IconButton variant="contained" onClick={removeExercise}>
        <span>X</span>
      </IconButton>
      {exercises[exIndex].sets.map(renderSets)}
      <Button variant="contained" fullWidth onClick={addSet}>
        Add Set
      </Button>
    </div>
  );
}
