import React from "react";
import styled from "styled-components";
import Description from "../../../../../components/Description/Description";
import { COLORS } from "../../../../../constants/colors.constants";
import { Divider } from "@mui/material";

const Container = styled.div`
  display: flex;
  color: ${COLORS.light};
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  background-color: #191d24;
  border-radius: 10px;
  padding: 1rem;
  width: clamp(250px, 50vw, 350px);
  min-height: 175px;
  z-index: 100;
  text-align: center;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
`;

function SmallExercise({ exercise }) {
  return (
    <Container>
      <Description title={exercise.name} />
      <Divider sx={{ borderColor: COLORS.light }} />
      <SubContainer>
        <div>Expected 1RM {Math.round(exercise.rm1) + " KG"}</div>
        <div>Volume {exercise.volume} KG</div>
        <div>{exercise.totalReps} Total Reps</div>
      </SubContainer>
    </Container>
  );
}

export default SmallExercise;
