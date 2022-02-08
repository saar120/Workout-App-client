import _ from "lodash";
import { v4 as uuid } from "uuid";

export const duplicateExercises = (exercises) => {
  const exercisesCopy = _.cloneDeep(exercises);
  exercisesCopy.forEach((exercise) => {
    delete exercise.rm1;
    delete exercise.totalReps;
    delete exercise.volume;
    delete exercise.validSets;
    delete exercise.totalWeight;
    delete exercise._id;
    exercise.id = uuid();
    exercise.sets.forEach((set) => {
      delete set._id;
      set.id = uuid();
    });
  });
  return exercisesCopy;
};
