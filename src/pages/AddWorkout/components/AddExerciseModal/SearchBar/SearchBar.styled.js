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

const Result = styled.div`
  width: 90%;
  min-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 15px;
  background-color: ${COLORS.light};
  color: #121616;
  border: 2px solid ${COLORS.primary};
  cursor: pointer;
  &&:hover {
    border-color: ${COLORS.secondary};
  }
`;

export { ResultsHolder, Result };
