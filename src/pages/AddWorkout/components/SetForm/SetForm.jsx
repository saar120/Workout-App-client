import React from "react";
import { useRecoilState } from "recoil";
import exerciseState from "../../../../Recoil/atoms/exerciseAtom";
import _ from "lodash";

export default function SetForm({ set, exIndex, setIndex }) {
  const [exercises, setExercises] = useRecoilState(exerciseState);

  const onChangeHandler = ({ target }) => {
    const updatedExercises = _.cloneDeep(exercises);
    updatedExercises[exIndex].sets[setIndex][target.name] = Number(target.value);
    setExercises(updatedExercises);
  };

  return (
    <div>
      <input type="number" label="Reps" name="reps" value={set.reps} onChange={onChangeHandler} />
      <input type="number" label="Weight" name="weight" value={set.weight} onChange={onChangeHandler} />
    </div>
  );
}
