import React, { useState } from "react";
import { TextField, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { ResultsHolder, Result } from "./SearchBar.styled";
import data from "../../../../../mock-data/exercises.json";

function SearchBar({ addExercise, closeModal }) {
  const [category, setCategory] = useState("name");
  const [filteredData, setFilteredData] = useState([]);

  const handleSelect = ({ target: { value } }) => {
    setCategory(value);
  };

  const handleFilter = ({ target: { value: searchTerm } }) => {
    const filtered = data.filter((ex) => {
      if (category === "name") {
        return ex[category].toLowerCase().includes(searchTerm.toLowerCase());
      }
      if (category === "primaryMuscles") {
        return ex[category].includes(searchTerm.toLowerCase());
      }
      return ex;
    });
    setFilteredData(filtered);
  };

  const exerciseClick = (exercise) => {
    addExercise(exercise);
    closeModal();
  };

  return (
    <>
      <TextField name="exercise" variant="outlined" label="Search" onChange={handleFilter} />
      <FormControl>
        <InputLabel id="category">Search Category</InputLabel>
        <Select labelId="category" value={category} onChange={handleSelect} defaultValue="name" label="Search Category">
          <MenuItem value="name">Exercise</MenuItem>
          <MenuItem value="primaryMuscles">Muscle</MenuItem>
        </Select>
      </FormControl>
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
