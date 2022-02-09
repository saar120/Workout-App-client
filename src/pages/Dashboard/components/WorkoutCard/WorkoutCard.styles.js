import styled from "styled-components";
import { COLORS } from "../../../../constants/colors.constants";
export const WorkoutCardStyled = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${COLORS.light};
  box-shadow: ${COLORS.boxShadow};
  border-radius: 10px;
  width: clamp(350px, 70vw, 800px);
  margin: auto;
`;

export const WorkoutTitle = styled.div`
  color: ${COLORS.secondary};
  font-size: 1.7rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SmallText = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
  min-height: 1rem;
  color: ${(props) => props.color};
`;

export const ExercisesHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
