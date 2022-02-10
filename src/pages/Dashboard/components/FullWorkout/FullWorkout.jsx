import React, { useEffect } from "react";
import { Paper, TableContainer, Zoom, Dialog } from "@mui/material";
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

function FullWorkout({ open, closeModal, workout }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
    //eslint-disable-next-line
  }, []);

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      onClose={closeModal}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "15px" }}>
      <TableContainer component={Paper} sx={tableSx}>
        {workout.exercises.map((ex) => (
          <ExercisesTable key={ex._id} exercise={ex} />
        ))}
      </TableContainer>
    </Dialog>
  );
}

export default FullWorkout;
