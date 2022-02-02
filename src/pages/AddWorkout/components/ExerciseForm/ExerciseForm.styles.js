import styled from "styled-components";

const ExerciseFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: clamp(300px, 30vw, 650px);
`;

const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { ExerciseFormStyled, HeadContainer };
