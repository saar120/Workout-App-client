import { TextField } from "@mui/material";
import styled from "styled-components";
import { COLORS } from "../../constants/colors.constants";

const FormStyled = styled.form`
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 1rem;
  a {
    cursor: pointer;
  }
`;

const TextFieldStyled = styled(TextField)`
  width: 90%;
`;

const Header = styled.h4`
  text-align: center;
`;

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: clamp(300px, 50vw, 500px);
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: ${COLORS.light};
  -webkit-box-shadow: 1px 2px 15px -3px #000000;
  box-shadow: ${COLORS.boxShadow};
  border-radius: 20px;
`;
export { FormStyled, TextFieldStyled, Header, AuthContainer };
