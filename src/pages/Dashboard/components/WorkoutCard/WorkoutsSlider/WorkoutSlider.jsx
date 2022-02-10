import React, { useRef } from "react";
import { format } from "date-fns";
import { Pagination, Mousewheel, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, useMediaQuery } from "@mui/material";
import "swiper/css";
import styled from "styled-components";
import { COLORS } from "../../../../../constants/colors.constants";
import SliderButton from "../ExerciseSlider/Components/SliderButton";

const SmallWorkout = styled.div`
  width: 100px;
  height: 60px;
  border-radius: 10px;
  background-color: ${COLORS.light};
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  text-align: center;
  cursor: pointer;
`;

const Text = styled.div`
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  font-size: ${(props) => props.fontSize || 1}rem;
`;

function WorkoutSlider({ workouts, setCurrentWorkout }) {
  const isDesktop = useMediaQuery("(min-width:900px)");
  const isLargeScreen = useMediaQuery("(min-width:1280px)");

  const swiperRef = useRef(null);

  const slidesPerView = () => {
    if (isLargeScreen && workouts.length >= 5) return 5;
    if (isDesktop && workouts.length >= 4) return 4;
    if (isDesktop && workouts.length >= 3) return 3;
    if (workouts.length >= 2) return 2;
    return 1;
  };

  const workoutClickHandler = (index) => {
    setCurrentWorkout(index);
  };

  return (
    <Container
      sx={{
        width: "clamp(350px,90vw,800px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
      }}>
      <SliderButton swiperRef={swiperRef} />
      <Swiper
        ref={swiperRef}
        modules={[Pagination, Navigation, Mousewheel]}
        navigation={true}
        spaceBetween={10}
        mousewheel={true}
        slidesPerView={slidesPerView()}>
        {workouts.map((workout, index) => (
          <SwiperSlide key={workout._id} onClick={() => workoutClickHandler(index)} style={{ height: "120px" }}>
            <SmallWorkout>
              <Text fontSize={0.8} color={COLORS.secondary} bold>
                {workout.title}
              </Text>
              <Text fontSize={0.7}>{format(new Date(workout.date), "dd/MM/yy E")}</Text>
            </SmallWorkout>
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderButton next swiperRef={swiperRef} />
    </Container>
  );
}

export default WorkoutSlider;
