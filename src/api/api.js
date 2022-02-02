import axios from "axios";

const workoutTrackerAPI = axios.create({
  baseURL: "http://localhost:8080/api/",
});

const fetchExercises = () => workoutTrackerAPI.get("/exercises/all");

export { fetchExercises };
