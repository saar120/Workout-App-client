import axios from "axios";

const workoutTrackerAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

workoutTrackerAPI.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("user")).token}`;
  }
  return req;
});

const fetchExercises = () => workoutTrackerAPI.get("/exercises/all");

const signUp = (data) => workoutTrackerAPI.post("/users/signUp", data);

const signIn = (data) => workoutTrackerAPI.post("/users/signIn", data);

const addWorkout = (data) => workoutTrackerAPI.post("/workouts/add", data);

const fetchUserWorkouts = () => workoutTrackerAPI.get("/workouts/getAll");

const allUserExercisesTypes = () => workoutTrackerAPI.get("/workouts/userExercisesTypes");

const userExerciseByName = (data) => workoutTrackerAPI.post("/workouts/exerciseByName", data);

export { fetchExercises, signUp, signIn, addWorkout, fetchUserWorkouts, allUserExercisesTypes, userExerciseByName };
