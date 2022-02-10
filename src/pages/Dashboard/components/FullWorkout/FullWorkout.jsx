import React from "react";
import { Modal, Paper, TableContainer } from "@mui/material";
import ExercisesTable from "./ExercisesTable";

function FullWorkout({ open, closeModal, workout }) {
  return (
    <Modal open={open} onClose={closeModal} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <TableContainer component={Paper} sx={{ width: "clamp(350px,90vw,600px)", maxHeight: "600px" }}>
        {workout.exercises.map((ex) => (
          <ExercisesTable key={ex._id} exercise={ex} />
        ))}
      </TableContainer>
    </Modal>
  );
}

export default FullWorkout;
