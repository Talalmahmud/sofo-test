"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

export default function CustomSwiperSlide() {
  return (
    <>
      <Swiper
        slidesPerView={1.5}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className=" "
      >
        <SwiperSlide>
          {" "}
          <Image
            src={"/screen.png"}
            alt="Logo"
            width={100}
            height={50}
            className="max-w-[434px] max-h-[200px] object-fill"
          />
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <Image
            src={"/screen.png"}
            alt="Logo"
            width={100}
            height={50}
            className="max-w-[434px] max-h-[200px] object-fill"
          />
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <Image
            src={"/screen.png"}
            alt="Logo"
            width={100}
            height={50}
            className="max-w-[434px] max-h-[200px] object-fill"
          />
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <Image
            src={"/screen.png"}
            alt="Logo"
            width={100}
            height={50}
            className="max-w-[434px] max-h-[200px] object-fill"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
