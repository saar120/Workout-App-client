import axios from "axios";

const workoutTrackerAPI = axios.create({
  baseURL: "http://localhost:8080/api/",
});

const fetchExercises = () => workoutTrackerAPI.get("/exercises/all");

const signUp = (data) => workoutTrackerAPI.post("/users/signUp", data);

const signIn = (data) => workoutTrackerAPI.post("/users/signIn", data);

export { fetchExercises, signUp, signIn };
