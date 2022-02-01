import React, { useState } from "react";
import { TextField } from "@mui/material";
import { ResultsHolder, Result } from "./SearchBar.styled";
import data from "../../../../../mock-data/exercises.json";

function SearchBar({ addExercise, closeModal }) {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = ({ target: { value: searchTerm } }) => {
    const filtered = data.filter((ex) => {
      return ex.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredData(filtered);
  };

  const exerciseClick = (exercise) => {
    addExercise(exercise);
    closeModal();
  };

  return (
    <>
      <TextField name="exercise" variant="outlined" label="Exercise" onChange={handleFilter} />
      <ResultsHolder>
        {filteredData?.map((ex) => {
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
