import styled from "styled-components";

const ResultsHolder = styled.div`
  width: 300px;
  height: 200px;
  overflow: hidden;
  overflow-y: auto;
  &&::-webkit-scrollbar {
    display: none;
  }
`;

const Result = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: black;
`;

export { ResultsHolder, Result };
