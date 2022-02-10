import React from "react";
import Container from "../../../../components/StyledComponents/Container";
import { Button, Typography } from "@mui/material";
import { ROUTES } from "../../../../constants/routes.constants";
import { useNavigate } from "react-router-dom";

function GoWorkout() {
  const navigate = useNavigate();

  const goWorkoutHandler = () => {
    navigate(ROUTES.WORKOUT);
  };

  return (
    <Container>
      <Typography variant="h3" align="center">
        Welcome to the
        <br /> Workout Tracker App
      </Typography>
      <Typography variant="h5" align="center">
        Please click the button below to get started
      </Typography>
      <Button onClick={goWorkoutHandler} size="large" variant="contained">
        GO Workout 💪
      </Button>
    </Container>
  );
}

export default GoWorkout;
