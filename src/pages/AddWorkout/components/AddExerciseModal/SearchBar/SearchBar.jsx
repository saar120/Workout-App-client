import React, { useState, useEffect } from "react";
import { TextField, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { ResultsHolder, Result } from "./SearchBar.styled";
import { fetchExercises } from "../../../../../api/api";
import muscles from "../../../../../mock-data/muscles.json";
import Spinner from "../../../../../components/Spinner/Spinner";

function SearchBar({ addExercise, closeModal }) {
  const [category, setCategory] = useState("name");
  const [searchTerm, setSearchTerm] = useState("");
  const [exercises, setExercises] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("exercises"))) {
      setLoading(false);
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
      setLoading(false);
    };
    getExercises();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setSearchTerm(textInput), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [textInput]);

  const handleTextInput = ({ target: { value } }) => {
    setTextInput(value);
  };

  const handleSelect = ({ target: { value } }) => {
    setCategory(value);
    setSearchTerm("");
  };

  const handleSearchTerm = ({ target: { value } }) => {
    setSearchTerm(value);
  };

  const renderFilteredExercises = () => {
    const filtered = [];
    for (let ex of exercises) {
      if (category === "name") {
        if (ex.name.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) continue;
      } else {
        if (ex.primaryMuscles.join(" ").indexOf(searchTerm.toLowerCase()) === -1) continue;
      }
      filtered.push(
        <Result onClick={() => exerciseClick(ex.name)} key={ex.name}>
          {ex.name}
        </Result>
      );
    }
    return filtered;
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
        <TextField name="exercise" variant="outlined" label="Search" value={textInput} onChange={handleTextInput} />
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
      <ResultsHolder>
        {loading && (
          <div
            style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Spinner small />
          </div>
        )}
        {renderFilteredExercises()}
      </ResultsHolder>
    </>
  );
}

export default SearchBar;
