import { atom } from "recoil";

const workoutsState = atom({
  key: "workoutsState",
  default: [],
});

export default workoutsState;
