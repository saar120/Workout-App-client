import { atom } from "recoil";

const exerciseState = atom({
  key: "exerciseState", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export default exerciseState;
