import React from "react";
import { useRecoilValue } from "recoil";
import exerciseState from "../../../../Recoil/atoms/exerciseAtom";

export default function SetForm({ set, onChange, exIndex, setIndex }) {
  const exercises = useRecoilValue(exerciseState);
  let weightPlaceholder = "Weight";
  let repsPlaceholder = "Reps";
  if (setIndex !== 0) {
    repsPlaceholder = exercises[exIndex].sets[setIndex - 1].reps;
    weightPlaceholder = exercises[exIndex].sets[setIndex - 1].weight;
  }

  return (
    <div>
      <input
        type="number"
        label="Reps"
        name="reps"
        placeholder={repsPlaceholder}
        value={set.reps}
        onChange={onChange}
      />
      <input
        type="number"
        label="Weight"
        name="weight"
        value={set.weight}
        placeholder={weightPlaceholder}
        onChange={onChange}
      />
    </div>
  );
}
