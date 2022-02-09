import styled from "styled-components";
import { COLORS } from "../../../../../constants/colors.constants";
import { Button } from "@mui/material";

const ResultsHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  overflow: hidden;
  overflow-y: auto;
  background-color: ${COLORS.light};
  &&::-webkit-scrollbar {
    display: none;
  }
`;

const Result = styled(Button)`
  && {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 15px;
    background-color: ${COLORS.light};
    color: #121616;
    border: 2px solid ${COLORS.primary};
    cursor: pointer;
    .MuiTouchRipple-child {
      background-color: ${COLORS.secondary};
    }
  }
`;

export { ResultsHolder, Result };
