import React, { useState } from "react";
import Headings from "./Headings";

function Stats(props) {
  return (
    <div className={`${props.classs} w-[50%]`}>
      <p className="text-sm font-semibold lg:text-[20px]">{props.course}</p>
      <p className="w-[130px] text-[13px] text-zinc-500 sm:w-full lg:text-[16px]">
        {props.institution}
      </p>
      <div className="mt-[15px] flex items-center gap-[10px] text-[14px] text-zinc-500 lg:text-[17px]">
        <i className="fa fa-calendar"></i>
        <p className=" ">{props.date}</p>
      </div>
    </div>
  );
}

export default function Qualifications() {
  const classes = [
    "flex items-center gap-[8px] text-[16px] md:text-[22px] font-semibold hover:cursor-pointer hover:text-primary-org",
  ];
  const border = ["border-r border-primary-org"];
  const dot = ["w-[10px] h-[10px] bg-primary-org opacity-80 rounded-full"];

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(true);

  const toggle = () => {
    if (show == false) {
      setShow(true);
      setShow1(false);
    }
  };

  const toggle1 = () => {
    if (show1 == false) {
      setShow1(true);
      setShow(false);
    }
  };

  return (
    <section className="pt-[100px] lg:pt-[150px]">
      <Headings header="Qualifications" desc="Why you should hire me" />
      <div className="mx-auto mt-[70px] flex w-[300px] justify-between">
        <div className="">
          <div
            className={`${classes} ${show && "text-primary-org"}`}
            onClick={() => toggle()}
          >
            <i className="fa fa-graduation-cap text-[25px] font-bold"></i>
            <p className="">Education</p>
          </div>
        </div>
        <div className="">
          <div
            className={`${classes} ${show1 && "text-primary-org"}`}
            onClick={() => toggle1()}
          >
            <i className="fa fa-briefcase text-[25px] font-bold"></i>
            <p className="">Work</p>
          </div>
          <div className=""></div>
        </div>
      </div>

      {show && (
        <div className="mt-[40px] sm:mx-auto sm:w-[400px] lg:w-[600px]">
          <div>
            <div className="flex items-center justify-center">
              <div className={dot}></div>
            </div>

            <div className="flex">
              <Stats
                course="Meta Frontend Developer"
                institution="Coursera.org"
                date="2023 - inView"
              />

              <div className={border}></div>
              <div className="w-[50%]"></div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-center">
              <div className={dot}></div>
            </div>
            <div className="flex">
              <div className="w-[50%]"></div>
              <div className={border}></div>
              <Stats
                course="Software Engineering"
                institution="Alt School Africa"
                date="2023 - inView"
                classs="pl-[30px]"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-center">
              <div className={dot}></div>
            </div>
            <div className="flex">
              <Stats
                course="Computer Science"
                institution="Harvard University - CS50 Program"
                date="2023 - inView"
              />

              <div className={border}></div>
              <div className="w-[50%]"></div>
            </div>

            <div className="flex items-center justify-center">
              <div className={dot}></div>
            </div>
          </div>
        </div>
      )}

      {show1 && (
        <div className="mt-[40px] sm:mx-auto sm:w-[400px] lg:w-[600px]">
          <div className="flex items-center justify-center">
            <div className={dot}></div>
          </div>

          <div className="flex">
            <Stats
              course="Software Developer"
              institution="ShopBuddy.com"
              date="2024"
            />

            <div className={border}></div>
            <div className="w-[50%]"></div>
          </div>

          <div className="flex items-center justify-center">
            <div className={dot}></div>
          </div>
          <div className="flex">
            <div className="w-[50%]"></div>
            <div className={border}></div>
            <Stats
              course="Software Developer"
              institution="chowshop.ng"
              date="2023 - present"
              classs="pl-[30px]"
            />
          </div>

          <div className="flex items-center justify-center">
            <div className={dot}></div>
          </div>
          <div className="flex">
            <Stats
              course="Frontend Developer"
              institution="Fintech"
              date="2023 - present"
            />
            <div className={border}></div>
            <div className="w-[50%]"></div>
          </div>
          <div className="flex items-center justify-center">
            <div className={dot}></div>
          </div>
        </div>
      )}
    </section>
  );
}
