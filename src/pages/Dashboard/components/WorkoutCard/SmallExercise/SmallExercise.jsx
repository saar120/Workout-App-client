import React from "react";
import styled from "styled-components";
import Description from "../../../../../components/Description/Description";
import { COLORS } from "../../../../../constants/colors.constants";

const Container = styled.div`
  display: flex;
  color: ${COLORS.light};
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  background-color: #191d24;
  border-radius: 10px;
  padding: 1rem;
  width: clamp(250px, 50vw, 300px);
  min-height: 170px;
  z-index: 100;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`;

function SmallExercise({ exercise }) {
  return (
    <Container>
      <Description title={exercise.name} />
      <SubContainer>
        <div>Expected 1RM {Math.floor(exercise.rm1) + " KG"}</div>
        <div>Volume {exercise.volume} KG</div>
        <div>{exercise.totalReps} Total Reps</div>
      </SubContainer>
    </Container>
  );
}

export default SmallExercise;
