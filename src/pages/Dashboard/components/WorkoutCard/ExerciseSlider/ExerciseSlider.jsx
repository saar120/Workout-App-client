import React, { useRef } from "react";
import { Navigation, Pagination } from "swiper";
import SmallExercise from "../SmallExercise/SmallExercise";
import { useMediaQuery, Container } from "@mui/material";
import SliderButton from "./Components/SliderButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

function ExerciseSlider({ exercises }) {
  const swiperRef = useRef(null);
  const isDesktop = useMediaQuery("(min-width:900px)");
  const isLargeScreen = useMediaQuery("(min-width:1280px)");

  const slidesPerView = () => {
    if (exercises.length === 1) return 1;
    if (isLargeScreen && exercises.length >= 3) return 3;
    if (isDesktop && exercises.length >= 2) return 2;
    return 1;
  };

  return (
    <Swiper
      ref={swiperRef}
      modules={[Navigation, Pagination]}
      spaceBetween={exercises.length === 1 ? 0 : 30}
      slidesPerView={slidesPerView()}
      pagination={{
        dynamicBullets: true,
      }}>
      {exercises.map((exercise) => (
        <SwiperSlide key={exercise._id} onClick={() => console.log(exercise)}>
          <SmallExercise exercise={exercise} />
        </SwiperSlide>
      ))}
      <Container sx={{ display: "flex", justifyContent: "space-between", gap: 2, mt: "1rem" }}>
        {isDesktop ? (
          <>
            <SliderButton swiperRef={swiperRef} />
            <SliderButton next swiperRef={swiperRef} />
          </>
        ) : (
          <div style={{ height: "2rem" }}></div>
        )}
      </Container>
    </Swiper>
  );
}

export default ExerciseSlider;
