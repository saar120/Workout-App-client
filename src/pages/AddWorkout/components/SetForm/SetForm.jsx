import React from "react";
import { useRecoilValue } from "recoil";
import exerciseState from "../../../../Recoil/atoms/exerciseAtom";
import { NumInput, TableCellStyled } from "./SetForm.styles";
import { TableRow } from "@mui/material";

export default function SetForm({ set, onChange, exIndex, setIndex }) {
  const exercises = useRecoilValue(exerciseState);
  let weightPlaceholder = "Weight";
  let repsPlaceholder = "Reps";
  if (setIndex !== 0) {
    repsPlaceholder = exercises[exIndex].sets[setIndex - 1].reps.toString();
    weightPlaceholder = exercises[exIndex].sets[setIndex - 1].weight.toString();
  }

  const checkValidKey = (e) => {
    //checks if key press is number
    if (e.which < 48 || e.which > 57) {
      e.preventDefault();
    }
  };

  return (
    <TableRow>
      <TableCellStyled>{setIndex + 1}</TableCellStyled>
      <TableCellStyled>
        <NumInput
          type="text"
          label="Reps"
          name="reps"
          autoFocus
          onKeyPress={checkValidKey}
          pattern="[0-9]*"
          placeholder={repsPlaceholder}
          value={set.reps}
          onChange={onChange}
        />
      </TableCellStyled>
      <TableCellStyled>
        <NumInput
          type="text"
          pattern="[0-9]*"
          label="Weight"
          name="weight"
          onKeyPress={checkValidKey}
          value={set.weight}
          placeholder={weightPlaceholder}
          onChange={onChange}
        />
      </TableCellStyled>
    </TableRow>
  );
}
