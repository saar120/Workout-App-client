import React from "react";
import { formatDistanceToNow } from "date-fns";

import { WorkoutCardStyled, WorkoutTitle, SmallText, Group, ExercisesHolder } from "./WorkoutCard.styles";
import Description from "../../../../components/Description/Description";
import ExerciseSlider from "./ExerciseSlider/ExerciseSlider";

function WorkoutCard({ workout, isLatest }) {
  return (
    <WorkoutCardStyled>
      <Group>
        <WorkoutTitle>{workout?.title}</WorkoutTitle>
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
