import React from "react";

export default function SetForm({ set, onChange }) {
  return (
    <div>
      <input type="number" label="Reps" name="reps" value={set.reps} onChange={onChange} />
      <input type="number" label="Weight" name="weight" value={set.weight} onChange={onChange} />
    </div>
  );
}
