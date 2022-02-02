import React, { useState, useEffect } from "react";
import { TextField, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { ResultsHolder, Result } from "./SearchBar.styled";
import { fetchExercises } from "../../../../../api/api";
import muscles from "../../../../../mock-data/muscles.json";

function SearchBar({ addExercise, closeModal }) {
  const [category, setCategory] = useState("name");
  const [searchTerm, setSearchTerm] = useState("");
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("exercises"))) {
      return setExercises(JSON.parse(localStorage.getItem("exercises")));
    }
    const getExercises = async () => {
      try {
        const { data: exercisesRes } = await fetchExercises();
        setExercises(exercisesRes);
        localStorage.setItem("exercises", JSON.stringify(exercisesRes));
      } catch (err) {
        console.log(err);
      }
    };
    getExercises();
  }, []);

  const handleSelect = ({ target: { value } }) => {
    setCategory(value);
    setSearchTerm("");
  };

  const handleSearchTerm = ({ target: { value } }) => {
    setSearchTerm(value);
  };

  const renderFilteredExercises = () => {
    if (exercises.length === 0) return;
    const filtered =
      category === "name"
        ? exercises.filter((ex) => ex.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
        : exercises.filter((ex) => ex.primaryMuscles.join(" ").indexOf(searchTerm.toLowerCase()) !== -1);
    return filtered.map((ex) => (
      <Result onClick={() => exerciseClick(ex.name)} key={ex.name}>
        {ex.name}
      </Result>
    ));
  };

  const exerciseClick = (exercise) => {
    addExercise(exercise);
    closeModal();
  };

  return (
    <>
      <FormControl>
        <InputLabel id="category">Search Category</InputLabel>
        <Select labelId="category" value={category} onChange={handleSelect} defaultValue="name" label="Search Category">
          <MenuItem value="name">Exercise</MenuItem>
          <MenuItem value="primaryMuscles">Muscle</MenuItem>
        </Select>
      </FormControl>
      {category === "name" ? (
        <TextField name="exercise" variant="outlined" label="Search" value={searchTerm} onChange={handleSearchTerm} />
      ) : (
        <FormControl>
          <InputLabel id="muscle">Muscle</InputLabel>
          <Select labelId="muscle" label="Muscle" value={searchTerm} onChange={handleSearchTerm}>
            {muscles &&
              muscles.map((muscle) => (
                <MenuItem key={muscle} value={muscle}>
                  {muscle}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      )}
      <ResultsHolder>{renderFilteredExercises()}</ResultsHolder>
    </>
  );
}

export default SearchBar;
