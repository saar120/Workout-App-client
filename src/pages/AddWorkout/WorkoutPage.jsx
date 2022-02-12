import React, { useState, useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import exerciseState from "../../Recoil/atoms/exerciseAtom";
import workoutsState from "../../Recoil/userWorkoutsAtom";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes.constants";
import { v4 as uuid } from "uuid";
import { addWorkout, getSuggestedMuscles } from "../../api/api";
import { InputGroup, WorkoutFormStyled } from "./WorkoutPage.styled";
import ExerciseForm from "./components/ExerciseForm/ExerciseForm";
import { TextField, Button, Modal, Slide } from "@mui/material";
import Container from "../../components/StyledComponents/Container";
import DatePicker from "../../components/DatePicker/DatePicker";
import { COLORS } from "../../constants/colors.constants";
import { ModalContainer } from "./components/AddExerciseModal/AddExercise.styled";
import SearchBar from "./components/AddExerciseModal/SearchBar/SearchBar";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Spinner from "../../components/Spinner/Spinner";
import Suggestions from "./components/Suggestions/Suggestions";

export default function WorkoutForm() {
  const setWorkouts = useSetRecoilState(workoutsState);
  const [exercises, setExercises] = useRecoilState(exerciseState);
  const [workoutName, setWorkoutName] = useState("");
  const [showAddExercise, setShowAddExercise] = useState(false);
  const [workoutDate, setWorkoutDate] = useState(new Date());
  const [error, setError] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestedMuscle, setSuggestedMuscle] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const getSuggestions = async () => {
      try {
        const { data } = await getSuggestedMuscles();
        setSuggestions(data);
      } catch (err) {
        setSuggestions([]);
      }
      setLoading(false);
    };
    getSuggestions();
  }, []);

  const renderExercises = () =>
    exercises.map((exercise, index) => (
      <ExerciseForm key={exercise.id || exercise._id} exercise={exercise} exIndex={index} />
    ));

  const addExercise = (exercise) => {
    const newExercise = { id: uuid(), name: exercise, sets: [{ id: uuid(), reps: "", weight: "" }] };
    setSuggestedMuscle("");
    setExercises([...exercises, newExercise]);
  };

  const resetWorkout = () => {
    setExercises([]);
    setWorkoutName("");
  };

  const finishWorkout = async () => {
    const workout = {
      title: workoutName || "Workout",
      date: workoutDate || new Date(),
      exercises,
    };
    try {
      const { data } = await addWorkout(workout);
      setWorkouts(data.workouts);
      resetWorkout();
      navigate(ROUTES.DASH);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const muscleClick = (muscle) => {
    setSuggestedMuscle(muscle);
    setShowSuggestions(false);
    setShowAddExercise(true);
  };

  const workoutModalClose = () => {
    setShowAddExercise(false);
    setSuggestedMuscle("");
  };

  if (loading)
    return (
      <Container>
        <Spinner />
      </Container>
    );
  return (
    <Container>
      <InputGroup>
        <TextField
          name="title"
          label="Workout Name"
          sx={{ backgroundColor: COLORS.light }}
          value={workoutName}
          variant="filled"
          onChange={({ target: { value } }) => setWorkoutName(value)}
        />
        <DatePicker
          label="Workout Date"
          value={workoutDate}
          variant="filled"
          onChange={(newDate) => {
            setWorkoutDate(newDate);
          }}
        />
      </InputGroup>
      <div style={{ display: "flex", gap: "1rem" }}>
        {exercises.length > 0 && (
          <Button variant="contained" onClick={finishWorkout}>
            Finish Workout
          </Button>
        )}
        {suggestions.length > 0 && (
          <Button onClick={() => setShowSuggestions(true)} variant="contained">
            Suggestions
          </Button>
        )}
      </div>
      <WorkoutFormStyled>
        {exercises?.length > 0 && renderExercises()}
        <Button onClick={() => setShowAddExercise(true)}>Add Exercise</Button>
      </WorkoutFormStyled>
      <Modal
        open={showAddExercise}
        onClose={workoutModalClose}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        closeAfterTransition>
        <Slide direction="up" in={showAddExercise}>
          <ModalContainer>
            <SearchBar addExercise={addExercise} closeModal={workoutModalClose} muscle={suggestedMuscle} />
          </ModalContainer>
        </Slide>
      </Modal>
      <Suggestions
        open={showSuggestions}
        close={() => setShowSuggestions(false)}
        suggestions={suggestions}
        muscleClick={muscleClick}
      />
      <ErrorMessage open={!!error} onClose={() => setError("")} message={error} />
    </Container>
  );
}
