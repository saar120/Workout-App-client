import styled from "styled-components";

export const WorkoutFormStyled = styled.div`
  margin: 0.5rem;
  width: clamp(300px, 90%, 650px);
  height: unset;

  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;
