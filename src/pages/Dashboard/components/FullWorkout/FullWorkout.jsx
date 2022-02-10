import React from "react";
import { Modal, Paper, TableContainer, Zoom } from "@mui/material";
import ExercisesTable from "./ExercisesTable";
import { COLORS } from "../../../../constants/colors.constants";

const tableSx = {
  width: "clamp(350px,90vw,600px)",
  maxHeight: "600px",
  padding: "1rem",
  borderRadius: "15px",
  outline: "none",
  boxShadow: COLORS.boxShadow2,
};

function FullWorkout({ open, closeModal, workout }) {
  return (
    <Modal open={open} onClose={closeModal} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Zoom in={open}>
        <TableContainer component={Paper} sx={tableSx}>
          {workout.exercises.map((ex) => (
            <ExercisesTable key={ex._id} exercise={ex} />
          ))}
        </TableContainer>
      </Zoom>
    </Modal>
  );
}

export default FullWorkout;
