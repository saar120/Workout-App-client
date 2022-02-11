import React from "react";
import styled from "styled-components";

const SpinnerStyled = styled.div`
  display: flex;
  height: ${({ small }) => (small ? 100 : 250)}px;
  width: ${({ small }) => (small ? 100 : 250)}px;
  justify-content: center;
  align-items: center;
  animation: spin 0.8s linear infinite;
  img {
    height: 90%;
    width: 90%;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

function Spinner({ small }) {
  return (
    <SpinnerStyled small={small ? true : false}>
      <img src="/logo512.png" alt="dumbbell spinner" />
    </SpinnerStyled>
  );
}

export default Spinner;
