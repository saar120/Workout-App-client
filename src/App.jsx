import React from "react";
import { RecoilRoot } from "recoil";
import "./App.css";
import AddWorkoutPage from "./pages/AddWorkout/AddWorkout.page";

export default function App() {
  return (
    <RecoilRoot>
      <AddWorkoutPage />
    </RecoilRoot>
  );
}
