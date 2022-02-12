import styled from "styled-components";
import { COLORS } from "../../../../../constants/colors.constants";

const ResultsHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 200px;
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
  border: none;
  color: ${COLORS.primary};
  box-shadow: ${COLORS.boxShadow3};
  cursor: pointer;
`;

export { ResultsHolder, Result };
