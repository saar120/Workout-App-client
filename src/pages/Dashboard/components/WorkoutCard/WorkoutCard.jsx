import React, { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { WorkoutCardStyled, WorkoutTitle, SmallText, Group, ExercisesHolder, Header } from "./WorkoutCard.styles";
import Description from "../../../../components/Description/Description";
import ExerciseSlider from "./ExerciseSlider/ExerciseSlider";
import { Button, ButtonGroup, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { COLORS } from "../../../../constants/colors.constants";
import FullWorkoutModal from "../FullWorkout/FullWorkout";

function WorkoutCard({ workout, isLatest, redoHandler, deleteHandler }) {
  const [showModal, setShowModal] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState(null);

  const handleMenuClick = ({ currentTarget }) => {
    setMenuAnchor(currentTarget);
  };

  const openModal = () => {
    setShowModal(true);
    setMenuAnchor(null);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDelete = () => {
    setMenuAnchor(null);
    deleteHandler(workout._id);
  };

  return (
    <WorkoutCardStyled>
      <Group>
        <Header>
          <WorkoutTitle>{workout?.title}</WorkoutTitle>
          <ButtonGroup size="small" variant="outlined" aria-label="small outlined primary button group">
            <Button onClick={redoHandler}>Redo</Button>
            <Button onClick={handleMenuClick}>
              <MoreVertIcon />
            </Button>
          </ButtonGroup>
        </Header>
        <SmallText>{formatDistanceToNow(new Date(workout.date)) + " ago"}</SmallText>
        <SmallText color={COLORS.secondary}>{isLatest ? "Latest workout" : ""}</SmallText>
      </Group>
      <Description title="Volume" body={workout.volume + " KG"} />

      <ExercisesHolder>
        <ExerciseSlider exercises={workout.exercises} />
      </ExercisesHolder>
      <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={() => setMenuAnchor(null)}>
        <MenuItem onClick={openModal}>View Workout</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
      <FullWorkoutModal open={showModal} closeModal={closeModal} workout={workout} />
    </WorkoutCardStyled>
  );
}

export default WorkoutCard;
