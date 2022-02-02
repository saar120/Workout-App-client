import { Paper } from "@mui/material";
import styled from "styled-components";

export const WorkoutFormStyled = styled(Paper)`
  margin: 0.5rem;
  width: clamp(300px, 50vw, 650px);
  padding: 1.3rem;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #e4eff1;
  align-items: center;
  && {
    border-radius: 15px;
    -webkit-box-shadow: 1px 2px 15px -3px #000000;
    box-shadow: 1px 2px 15px -3px #000000;
  }
`;
