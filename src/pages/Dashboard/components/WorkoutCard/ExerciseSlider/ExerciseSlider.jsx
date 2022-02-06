import React from "react";
import { Navigation, Pagination } from "swiper";
import SmallExercise from "../SmallExercise/SmallExercise";
import { IconButton, useMediaQuery, Container } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const SliderButton = ({ next }) => {
  const swiper = useSwiper();
  return (
    <IconButton onClick={() => (next ? swiper.slideNext() : swiper.slidePrev())}>
      {next ? <ArrowForwardIosIcon /> : <ArrowBackIosIcon />}
    </IconButton>
  );
};

function ExerciseSlider({ exercises }) {
  const isDesktop = useMediaQuery("(min-width:900px)");
  const isLargeScreen = useMediaQuery("(min-width:1280px)");

  const slidesPerView = () => {
    if (isLargeScreen) return 3;
    if (isDesktop) return 2;
    return 1;
  };

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={slidesPerView()}
      pagination={{
        dynamicBullets: true,
      }}>
      {exercises.map((exercise) => (
        <SwiperSlide key={exercise._id}>
          <SmallExercise exercise={exercise} />
        </SwiperSlide>
      ))}
      <Container sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
        {isDesktop ? (
          <>
            <SliderButton />
            <SliderButton next />
          </>
        ) : (
          <div style={{ height: "2rem" }}></div>
        )}
      </Container>
    </Swiper>
  );
}

export default ExerciseSlider;
