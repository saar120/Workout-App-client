import styled from "styled-components";

const NumInput = styled.input`
  width: 3rem;
  height: 2rem;
  padding: 0.25rem;
  font-size: 1.1rem;
  border: none;
  text-align: center;
  &&::-webkit-inner-spin-button,
  &&::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

export { NumInput };
