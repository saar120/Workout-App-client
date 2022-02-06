import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, useMediaQuery } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";

const SmallWorkout = styled.div`
  width: 80px;
  height: 50px;
  border: 2px solid red;
  font-size: 0.9rem;
`;

function WorkoutSlider({ workouts, setCurrentWorkout }) {
  const isDesktop = useMediaQuery("(min-width:900px)");
  const isLargeScreen = useMediaQuery("(min-width:1280px)");

  const slidesPerView = () => {
    if (isLargeScreen && workouts.length >= 5) return 5;
    if (isDesktop && workouts.length >= 4) return 4;
    if (workouts.length >= 3) return 3;
    return 1;
  };

  const workoutClickHandler = (index) => {
    setCurrentWorkout(index);
  };

  return (
    <Container sx={{ width: "clamp(300px,50vw,800px)" }}>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={slidesPerView()}
        pagination={{
          dynamicBullets: true,
        }}>
        {workouts.map((workout, index) => (
          <SwiperSlide key={workout._id} onClick={() => workoutClickHandler(index)}>
            <SmallWorkout>{workout.title}</SmallWorkout>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default WorkoutSlider;
