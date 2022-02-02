import styled from "styled-components";

const ExerciseFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
  -webkit-box-shadow: 1px 2px 15px -3px #000000;
  box-shadow: 1px 2px 15px -3px #000000;
  padding: 0.3rem;
  border-radius: 10px;
`;

const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export { ExerciseFormStyled, HeadContainer };
