import React, { useRef, useState } from "react";
import PortfolioCard from "./PortfolioCard";
import chow from "../assets/chow.png";
import fintekk from "../assets/fintekk.png";
import construction from "../assets/construction.png";
import smtp from "../assets/smtp-app.png";
import shopbuddy from "../assets/shopbuddy.png";
import shopbuddyfe from "../assets/shopbuddyfe.png"
import Headings from "./Headings";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";

export default function Portfolio() {
  return (
    <section
      className="py-[100px] lg:mt-[200px]"
      id="portfolio"
      aria-labelledby="portfolio"
    >
      <Headings header="Portfolio" desc="My past projects" />
      <div className=" rounded-xl shadow-2xl ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
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
              src={shopbuddy}
              head="ShopBuddy"
              desc="An ecommerce app built on TailwindCSS, ReactJS, NextJS, Prisma & Mongodb. Responsive across devices."
              hrefff="https://shopbuddy1.vercel.app/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard
              src={shopbuddyfe}
              head="ShopBuddyFE"
              desc="An ecommerce app built on TailwindCSS, ReactJS. Responsive across all devices."
              hrefff="https://shopbuddyfe.vercel.app/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard
              src={chow}
              head="ChowShop"
              desc="A food ordering app utilizing TailwindCSS, ReactJS, NextJS, Mongoose & MongoDB, and flutterwave(demo)."
              hrefff="https://chowchow-three.vercel.app/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard
              src={smtp}
              head="Email Server"
              desc="An Email client built with TailwindCSS, React & Nextjs, Nodejs & gmail SMTP."
              hrefff="https://smtp-app.vercel.app/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard
              src={construction}
              head="Eco-Builders"
              desc="Construction website landing page. Responsive on all devices."
              hrefff="https://construction-landing-page-seven.vercel.app/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard
              src={fintekk}
              head="Fintekk"
              desc="Fintech company landing page. TailwindCSS & JavaScript. Responsive across devices."
              hrefff="https://fintekk-project.vercel.app/"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
