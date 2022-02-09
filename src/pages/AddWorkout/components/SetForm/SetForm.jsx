import React from "react";
import { useRecoilState } from "recoil";
import exerciseState from "../../../../Recoil/atoms/exerciseAtom";
import produce from "immer";
import { NumInput, TableCellStyled } from "./SetForm.styles";
import { TableRow, IconButton } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

export default function SetForm({ set, onChange, exIndex, setIndex }) {
  const [exercises, setExercises] = useRecoilState(exerciseState);
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

  const deleteSet = () => {
    if (exercises[exIndex].sets.length <= 1) return;
    const updatedExercises = produce(exercises, (draft) => {
      draft[exIndex].sets.splice(setIndex, 1);
    });
    setExercises(updatedExercises);
  };

  return (
    <TableRow>
      <TableCellStyled>{setIndex + 1}</TableCellStyled>
      <TableCellStyled>
        <NumInput
          type="text"
          label="Reps"
          autoComplete="off"
          name="reps"
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
          autoComplete="off"
          name="weight"
          onKeyPress={checkValidKey}
          value={set.weight}
          placeholder={weightPlaceholder}
          onChange={onChange}
        />
      </TableCellStyled>
      <TableCellStyled>
        <IconButton onClick={deleteSet}>
          <CancelIcon color="secondary" />
        </IconButton>
      </TableCellStyled>
    </TableRow>
  );
}
