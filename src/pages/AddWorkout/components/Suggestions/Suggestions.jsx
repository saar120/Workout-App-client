import React from "react";
import { Modal, Slide } from "@mui/material";
import styled from "styled-components";
import { ModalContainer } from "../AddExerciseModal/AddExercise.styled";
import Description from "../../../../components/Description/Description";
import { COLORS } from "../../../../constants/colors.constants";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 70%;
  max-width: 600px;
  gap: 0.7rem;
  padding: 0.6rem;
`;

const Text = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Muscle = styled.div`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  background-color: ${COLORS.light};
  color: ${COLORS.primary};
  padding: 7px;
  box-shadow: ${COLORS.boxShadow2};
  border-radius: 0.5rem;
  cursor: pointer;
`;

function Suggestions({ suggestions, open, close, muscleClick }) {
  const onMuscleClick = (muscle) => {
    muscleClick(muscle);
  };

  return (
    <Modal
      open={open}
      onClose={close}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      closeAfterTransition>
      <Slide direction="left" in={open}>
        <ModalContainer style={{ height: "unset" }}>
          <Description title="Based On Your Recent Workouts" />
          <Text>These are the muscles you should train</Text>
          <Container>
            {suggestions.map((suggestion) => (
              <Muscle onClick={() => onMuscleClick(suggestion)} key={suggestion}>
                {suggestion}
              </Muscle>
            ))}
          </Container>
        </ModalContainer>
      </Slide>
    </Modal>
  );
}

export default Suggestions;
