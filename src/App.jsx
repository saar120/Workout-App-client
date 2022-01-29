import React from "react";
import { RecoilRoot } from "recoil";
import AddWorkoutPage from "./pages/AddWorkout/AddWorkout.page";

export default function App() {
  return (
    <div>
      <RecoilRoot>
        <AddWorkoutPage />
      </RecoilRoot>
    </div>
  );
}
