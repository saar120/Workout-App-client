import React from "react";
import styled from "styled-components";

const SpinnerStyled = styled.div`
  display: flex;
  height: ${({ small }) => (small ? 50 : 250)}px;
  width: ${({ small }) => (small ? 50 : 250)}px;
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

function Spinner({ small, white }) {
  const src = white ? "/logo512white.png" : "/logo512.png";
  return (
    <SpinnerStyled small={small ? true : false}>
      <img src={src} alt="dumbbell spinner" />
    </SpinnerStyled>
  );
}

export default Spinner;
