import React from "react";
import { Snackbar } from "@mui/material";
import styled from "styled-components";
import { COLORS } from "../../constants/colors.constants";

const ErrorMessageStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 3rem;
  background-color: ${COLORS.light};
  text-align: center;
  border-radius: 10px;
  color: ${COLORS.primary};
  transition: 2s ease;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
`;

function ErrorMessage({ open, onClose, message }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={6000}
      open={!!open}
      onClose={onClose}>
      <ErrorMessageStyle>{message}</ErrorMessageStyle>
    </Snackbar>
  );
}

export default ErrorMessage;
