import React from "react";
import { TextField } from "@mui/material";
import { ResultsHolder, Result } from "./SearchBar.styled";
import data from "../../../../../mock-data/exercises.json";

function SearchBar({ addExercise, closeModal }) {
  // const [filteredData, setFilteredData] = useState([]);
  const exerciseClick = (exercise) => {
    addExercise(exercise);
    closeModal();
  };

  return (
    <>
      <TextField name="exercise" variant="outlined" label="Exercise" />
      <ResultsHolder>
        {data.map((ex) => {
          return (
            <Result onClick={() => exerciseClick(ex.name)} key={ex.name}>
              {ex.name}
            </Result>
          );
        })}
      </ResultsHolder>
    </>
  );
}

export default SearchBar;
