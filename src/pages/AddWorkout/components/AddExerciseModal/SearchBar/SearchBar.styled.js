import styled from "styled-components";
import { COLORS } from "../../../../../constants/colors.constants";

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

const Result = styled.button`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  padding: 10px;
  min-height: 50px;
  border-radius: 10px;
  background-color: ${COLORS.light};
  color: ${COLORS.primary};
  border: 2px solid ${COLORS.primary};
  cursor: pointer;
  background-position: center;
`;

export { ResultsHolder, Result };
