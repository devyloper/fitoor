'use client'
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import Image from "next/image";
type Props = {};

function Slider({}: Props) {
  return (
    <Splide options={ { rewind: true } } aria-label="React Splide Example">
      <SplideSlide>
        <Image src="https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_1280.jpg" alt="Image 1" width="500" height="500" />
      </SplideSlide>
      <SplideSlide>
        <Image src="https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_1280.jpg" alt="Image 2" width="500" height="500" />
      </SplideSlide>
    </Splide>
  );
}

export default Slider;
