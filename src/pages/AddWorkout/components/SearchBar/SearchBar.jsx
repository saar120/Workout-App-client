import React from "react";
import { InputAdornment, TextField, IconButton } from "@mui/material";
import { ResultsHolder, Result } from "./SearchBar.styled";
import data from "../../../../mock-data/exercises.json";

function SearchBar() {
  return (
    <div className="search">
      <div className="searchInputs">
        <TextField
          name="exercise"
          variant="outlined"
          label="Exercise"
          placeholder="Search Exercise"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" color="primary">
                  +
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <ResultsHolder>
        {data.map((ex) => {
          return (
            <Result onClick={() => console.log(ex.name)} key={ex.name}>
              {ex.name}
            </Result>
          );
        })}
      </ResultsHolder>
    </div>
  );
}

export default SearchBar;
