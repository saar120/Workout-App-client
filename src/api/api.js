import axios from "axios";

const workoutTrackerAPI = axios.create({
  baseURL: "http://localhost:8080/api/",
});

workoutTrackerAPI.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
  }
  return req;
});

const fetchExercises = () => workoutTrackerAPI.get("/exercises/all");

const signUp = (data) => workoutTrackerAPI.post("/users/signUp", data);

const signIn = (data) => workoutTrackerAPI.post("/users/signIn", data);

export { fetchExercises, signUp, signIn };
