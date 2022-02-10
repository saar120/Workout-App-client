import React from "react";
import { Modal, Paper, Table, TableBody, TableContainer, TableRow, TableCell, TableHead } from "@mui/material";

function FullWorkout({ open, closeModal, workout }) {
  return (
    <Modal open={open} onClose={closeModal} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <TableContainer component={Paper} sx={{ width: "clamp(350px,90vw,1000px)" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center"># Set</TableCell>
              <TableCell align="center">Reps</TableCell>
              <TableCell align="center">Weight (Kg)</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell># Set</TableCell>
              <TableCell>Reps</TableCell>
              <TableCell>Weight (Kg)</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Modal>
  );
}

export default FullWorkout;
