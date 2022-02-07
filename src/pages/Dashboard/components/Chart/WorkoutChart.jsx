import React, { useEffect, useState } from "react";
import Chart from "./Chart";
import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";
import { allUserExercisesTypes, userExerciseByName } from "../../../../api/api";
import { COLORS } from "../../../../constants/colors.constants";

const datasets = [
  { label: "1RM", value: "rm1", des: "KG" },
  { label: "Total Reps", value: "totalReps", des: "Reps" },
  { label: "Volume", value: "volume", des: "KG" },
];

function WorkoutChart() {
  const [userExercises, setUserExercises] = useState([]);
  const [currentName, setCurrentName] = useState("");
  const [currentExercise, setCurrentExercise] = useState([]);
  const [currentDataset, setCurrentDataset] = useState(0);

  useEffect(() => {
    const getAllUserExercisesTypes = async () => {
      try {
        const { data } = await allUserExercisesTypes();
        setUserExercises(data);
        setCurrentName(data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getAllUserExercisesTypes();
  }, []);

  useEffect(() => {
    if (!currentName) return;
    const getExercisesData = async () => {
      try {
        const exName = currentName;
        const { data } = await userExerciseByName({ exName });
        setCurrentExercise(data);
      } catch (error) {
        console.log(error);
      }
    };
    getExercisesData();
  }, [currentName]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        justifyContent: "center",
        height: "clamp(500px,60vh,600px)",
        width: "clamp(320px,70vw,1000px)",
        boxShadow: COLORS.boxShadow,
        backgroundColor: COLORS.light,
        borderRadius: "10px",
        gap: "5px",
      }}>
      {currentName && (
        <>
          <div>
            <FormControl sx={{ width: "clamp(150px,50%,200px)" }}>
              <InputLabel id="userExercises">Exercises</InputLabel>
              <Select
                labelId="userExercises"
                label="Exercises"
                value={currentName}
                onChange={({ target: { value } }) => setCurrentName(value)}>
                {userExercises.length > 0 &&
                  userExercises.map((ex) => (
                    <MenuItem key={ex} value={ex}>
                      {ex}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            <FormControl sx={{ width: "clamp(150px,50%,200px)" }}>
              <InputLabel id="data">Data</InputLabel>
              <Select
                labelId="data"
                label="Data"
                value={currentDataset}
                onChange={({ target: { value } }) => setCurrentDataset(value)}>
                {datasets.map((set, i) => (
                  <MenuItem key={set.label} value={i}>
                    {set.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <Chart exerciseData={currentExercise} dataset={datasets[currentDataset]} />
        </>
      )}
    </div>
  );
}

export default WorkoutChart;
