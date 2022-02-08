import React from "react";
import { formatDistanceToNow } from "date-fns";
import { WorkoutCardStyled, WorkoutTitle, SmallText, Group, ExercisesHolder, Header } from "./WorkoutCard.styles";
import Description from "../../../../components/Description/Description";
import ExerciseSlider from "./ExerciseSlider/ExerciseSlider";
import { Button, ButtonGroup } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function WorkoutCard({ workout, isLatest, redoHandler }) {
  return (
    <WorkoutCardStyled>
      <Group>
        <Header>
          <WorkoutTitle>{workout?.title}</WorkoutTitle>
          <ButtonGroup size="small" variant="outlined" aria-label="small outlined primary button group">
            <Button onClick={redoHandler}>Redo</Button>
            <Button>
              <MoreVertIcon />
            </Button>
          </ButtonGroup>
        </Header>
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
