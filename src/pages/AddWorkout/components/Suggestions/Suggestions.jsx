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
  height: 100%;
  max-width: 600px;
  gap: 0.5rem;
  padding: 0.6rem;
`;

const Text = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Muscle = styled.div`
  font-size: 1rem;
  text-align: center;
  background-color: ${COLORS.light};
  color: ${COLORS.secondary};
  padding: 5px 15px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 0.5rem;
`;

function Suggestions({ suggestions, open, close }) {
  return (
    <Modal
      open={open}
      onClose={close}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      closeAfterTransition>
      <Slide direction="left" in={open}>
        <ModalContainer>
          <Description title="Based On Your Recent Workouts" />
          <Text>We advise you to train one or more from the muscles bellow</Text>
          <Container>
            {suggestions.map((suggestion) => (
              <Muscle key={suggestion}>{suggestion}</Muscle>
            ))}
          </Container>
        </ModalContainer>
      </Slide>
    </Modal>
  );
}

export default Suggestions;
