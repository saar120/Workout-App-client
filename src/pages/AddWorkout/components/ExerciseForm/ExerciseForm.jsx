import React from "react";
import { useRecoilState } from "recoil";
import exerciseState from "../../../../Recoil/atoms/exerciseAtom";
import produce from "immer";
import { v4 as uuid } from "uuid";
import {
  Typography,
  Button,
  IconButton,
  TableBody,
  TableContainer,
  TableRow,
  TableHead,
  TableCell,
  Table,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ExerciseFormStyled, HeadContainer } from "./ExerciseForm.styles";
import SetForm from "../SetForm/SetForm";

export default function ExerciseForm({ exercise, exIndex }) {
  const [exercises, setExercises] = useRecoilState(exerciseState);

  const removeExercise = () => {
    const updatedExercises = produce(exercises, (draft) => {
      draft.splice(exIndex, 1);
    });
    setExercises(updatedExercises);
  };

  const renderSets = (set, setIndex) => {
    const onChangeHandlerCB = onChangeHandler(exIndex, setIndex);
    return (
      <SetForm key={set.id || set._id} set={set} setIndex={setIndex} exIndex={exIndex} onChange={onChangeHandlerCB} />
    );
  };

  const addSet = () => {
    const lastSet = exercises[exIndex].sets[exercises[exIndex].sets.length - 1];
    if (lastSet.weight === "" || lastSet.reps === "") return;
    const updatedExercises = produce(exercises, (draft) => {
      draft[exIndex].sets.push({ id: uuid(), reps: "", weight: "" });
    });
    setExercises(updatedExercises);
  };

  const onChangeHandler =
    (exIndex, setIndex) =>
    ({ target: { value, name } }) => {
      const updatedExercises = produce(exercises, (draft) => {
        draft[exIndex].sets[setIndex][name] = +value;
      });
      setExercises(updatedExercises);
    };

  return (
    <ExerciseFormStyled>
      <HeadContainer>
        <Typography variant="p">{exercise.name}</Typography>
        <IconButton variant="contained" onClick={removeExercise}>
          <CloseIcon />
        </IconButton>
      </HeadContainer>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center"># Set</TableCell>
              <TableCell align="center">Reps</TableCell>
              <TableCell align="center">Weight (Kg)</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{exercises[exIndex].sets.map(renderSets)}</TableBody>
        </Table>
      </TableContainer>
      <Button variant="filled" fullWidth onClick={addSet}>
        Add Set
      </Button>
    </ExerciseFormStyled>
  );
}
