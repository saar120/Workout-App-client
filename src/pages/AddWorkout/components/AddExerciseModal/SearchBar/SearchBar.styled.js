import styled from "styled-components";

const ResultsHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  overflow: hidden;
  overflow-y: auto;
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
  color: #121616;
  background-color: #d4e9ed;
  border: 2px solid #495a5a;
  cursor: pointer;
  &&:hover {
    border-color: #3891a6;
  }
`;

export { ResultsHolder, Result };
