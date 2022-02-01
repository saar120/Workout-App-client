import React from "react";
import { InputAdornment, TextField, IconButton } from "@mui/material";

function SearchBar() {
  return (
    <div className="search">
      <div className="searchInputs">
        <TextField
          name="exercise"
          variant="outlined"
          label="Exercise"
          value={exerciseValue}
          onChange={({ target: { value } }) => setExerciseValue(value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" color="primary" onClick={addExercise}>
                  +
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className="results"></div>
    </div>
  );
}

export default SearchBar;
