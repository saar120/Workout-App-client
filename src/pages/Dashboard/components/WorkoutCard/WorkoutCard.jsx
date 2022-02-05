import { formatDistanceToNow } from "date-fns";
import React from "react";
import Description from "../../../../components/Description/Description";
import SmallExercise from "./SmallExercise/SmallExercise";
import { WorkoutCardStyled, WorkoutTitle, SmallText, Group, ExercisesHolder } from "./WorkoutCard.styles";

function WorkoutCard({ workout, isLatest }) {
  return (
    <WorkoutCardStyled>
      <Group>
        <WorkoutTitle>{workout?.title}</WorkoutTitle>
        {isLatest && <SmallText>Latest workout logged</SmallText>}
        <SmallText>{formatDistanceToNow(new Date(workout.date)) + " ago"}</SmallText>
      </Group>
      <Description title="Volume" body={workout.volume + " KG"} />
      <ExercisesHolder>
        {workout.exercises.map((exercise) => (
          <SmallExercise exercise={exercise} key={exercise._id} />
        ))}
      </ExercisesHolder>
    </WorkoutCardStyled>
  );
}

export default WorkoutCard;
