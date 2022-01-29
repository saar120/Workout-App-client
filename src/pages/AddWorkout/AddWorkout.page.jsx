import React, { useState } from "react";
import AddWorkoutPageStyled from "./AddWorkout.styled";
import WorkoutForm from "./components/WorkoutForm/WorkoutForm";

import { Button } from "@mui/material";

export default function AddWorkoutPage() {
  const [showWorkoutForm, setShowWorkoutForm] = useState(false);

  const addResetHandler = () => {
    if (!showWorkoutForm) {
      setShowWorkoutForm(true);
    } else {
      //reset
    }
  };

  return (
    <AddWorkoutPageStyled>
      <h1>Add Workout</h1>
      <Button variant="contained" onClick={addResetHandler}>
        {showWorkoutForm ? "Reset" : "Add Workout"}
      </Button>
      {showWorkoutForm && <WorkoutForm />}
    </AddWorkoutPageStyled>
  );
}
