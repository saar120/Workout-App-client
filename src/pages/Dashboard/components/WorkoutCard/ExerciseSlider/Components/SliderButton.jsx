import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { IconButton } from "@mui/material";

const SliderButton = ({ next, swiperRef }) => {
  return (
    <IconButton onClick={() => (next ? swiperRef.current.swiper.slideNext() : swiperRef.current.swiper.slidePrev())}>
      {next ? <ArrowForwardIosIcon /> : <ArrowBackIosIcon />}
    </IconButton>
  );
};
export default SliderButton;
