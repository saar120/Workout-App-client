import { TableCell } from "@mui/material";
import styled from "styled-components";

const NumInput = styled.input`
  width: 3.5rem;
  height: 1.5rem;
  padding: 0.25rem;
  font-size: 1.03rem;
  border: 2px solid transparent;
  border-radius: 10px;
  text-align: center;
  &&::-webkit-inner-spin-button,
  &&::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  &&:focus {
    outline: none;
    border: 2px solid #495a5a;
    caret-color: transparent;
  }
`;

const TableCellStyled = styled(TableCell)`
  && {
    text-align: center;
    padding: 10px;
  }
`;
export { NumInput, TableCellStyled };
