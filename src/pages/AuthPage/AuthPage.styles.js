import { TextField } from "@mui/material";
import styled from "styled-components";

const FormStyled = styled.form`
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 1rem;
  margin: 1rem;
`;

const TextFieldStyled = styled(TextField)`
  width: 90%;
`;

const Header = styled.h4`
  text-align: center;
`;

export { FormStyled, TextFieldStyled, Header };
