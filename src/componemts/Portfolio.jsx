import React, { useRef, useState } from "react";
import PortfolioCard from "./PortfolioCard";
import chow from "../assets/chow.png";
import fintekk from "../assets/fintekk.png";
import Headings from "./Headings";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Portfolio() {
  return (
    <div className="py-[100px] md:mt-[200px]">
      <Headings header="Portfolio" desc="My past projects" />

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper mt-[80px] h-auto"
      >
        <SwiperSlide>
          <PortfolioCard
            src={chow}
            head="Food Ordering App"
            desc="Responsive modern components with adaptive UI components for chowShop. Responsive on all devivces."
            hrefff='https://chowshop.vercel.app/'
          />
        </SwiperSlide>
        <SwiperSlide>
          <PortfolioCard
            src={chow}
            head="Construction website"
            desc="Responsive modern components with adaptive UI components for Eco-builders. Responsive on all devivces."
          />
        </SwiperSlide>
        <SwiperSlide>
          <PortfolioCard src={fintekk} head="Fintech Landing Page" desc="Responsive modern components with adaptive UI components for Fintekk. Responsive accross multiple devivces." />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
