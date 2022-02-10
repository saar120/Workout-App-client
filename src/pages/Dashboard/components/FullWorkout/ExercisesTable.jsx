import React from "react";
import { Table, TableRow, TableCell, TableHead, TableBody } from "@mui/material";

function ExercisesTable({ exercise }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="center" colSpan={3} sx={{ fontWeight: 700 }}>
            {exercise.name}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center"># Set</TableCell>
          <TableCell align="center">Reps</TableCell>
          <TableCell align="center">Weight (Kg)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {exercise.sets.map((set, i) => (
          <TableRow key={set._id}>
            <TableCell align="center">{i + 1}</TableCell>
            <TableCell align="center">{set.reps}</TableCell>
            <TableCell align="center">{set.weight}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ExercisesTable;
