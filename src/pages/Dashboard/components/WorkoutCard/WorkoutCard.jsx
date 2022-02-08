import React from "react";
import { formatDistanceToNow } from "date-fns";

import { WorkoutCardStyled, WorkoutTitle, SmallText, Group, ExercisesHolder } from "./WorkoutCard.styles";
import Description from "../../../../components/Description/Description";
import ExerciseSlider from "./ExerciseSlider/ExerciseSlider";
import { Button } from "@mui/material";

function WorkoutCard({ workout, isLatest, redoHandler }) {
  return (
    <WorkoutCardStyled>
      <Group>
        <WorkoutTitle>{workout?.title}</WorkoutTitle>
        <Button onClick={redoHandler} variant="contained">
          Redo Workout
        </Button>
        {isLatest && <SmallText>Latest workout</SmallText>}
        <SmallText>{formatDistanceToNow(new Date(workout.date)) + " ago"}</SmallText>
      </Group>
      <Description title="Volume" body={workout.volume + " KG"} />

      <ExercisesHolder>
        <ExerciseSlider exercises={workout.exercises} />
      </ExercisesHolder>
    </WorkoutCardStyled>
  );
}

export default WorkoutCard;
