import React from "react";
import styled from "styled-components";
import Description from "../../../../../components/Description/Description";
import { COLORS } from "../../../../../constants/colors.constants";
import { Divider } from "@mui/material";

const Container = styled.div`
  display: flex;
  color: ${COLORS.light};
  margin: 0.5rem;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  background-color: ${COLORS.grey};
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  border-radius: 10px;
  padding: 0.5rem;
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

const Text = styled.div`
  color: ${COLORS.primary};
`;

function SmallExercise({ exercise }) {
  return (
    <Container>
      <Description title={exercise.name} />
      <Divider sx={{ borderColor: COLORS.primary }} />
      <SubContainer>
        <Text>Expected 1RM {Math.round(exercise.rm1) + " KG"}</Text>
        <Text>Volume {exercise.volume} KG</Text>
        <Text>{exercise.totalReps} Total Reps</Text>
      </SubContainer>
    </Container>
  );
}

export default SmallExercise;
