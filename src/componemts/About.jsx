import React, { useState } from "react";
import Btn from "./Btn";
import polygon from "../assets/Polygon3.png";
import Headings from "./Headings";

function Count(props) {
  return (
    <div className="w-[90px] text-center lg:w-[100px]">
      <p className="font-night text-[20px] lg:text-[24px]">{props.num}+</p>
      <p className="text-[13px] leading-4 lg:text-[14px]">{props.text}</p>
    </div>
  );
}

export default function About() {
  const [download, setDownload] = useState(true);

  return (
    <section
      className="flex flex-col items-center justify-center pt-[100px] text-center lg:mt-[200px]"
      id="about"
      aria-labelledby="about"
    >
      <Headings header="About Me" desc="Get to know me" />

      <div className=" mt-[70px] items-center justify-between lg:flex">
        <div className="lg:w-[550px]">
          <img
            src={polygon}
            alt=""
            className="w-[180px]lg:w-[300px] mx-auto h-[190px] lg:h-[300px]"
          />
        </div>

        <div className="mt-[30px] text-[16px] leading-6 sm:w-[400px] lg:mt-0 lg:w-[550px] lg:text-left lg:text-[20px]">
          <p className="lg:leading-7">
            With 1 year experience in building{" "}
            <br className="hidden lg:block" /> professional websites for
            businesses, <br className="hidden lg:block" /> brands and
            individuals, I bring you closer <br className="hidden lg:block" />{" "}
            to your customers with my developer +{" "}
            <br className="hidden lg:block" /> SEO skills.
          </p>
          <p className="mt-[20px]">
            Got a project? Hire me and enjoy quality & excellence in delivery.{" "}
          </p>
          <div className="mt-[50px] flex justify-center gap-[15px] lg:justify-start lg:gap-[30px]">
            <Count num="01" text="Years experience" />
            <Count num="09" text="Completed Projects" />
            <Count num="01" text="Helped Companies" />
          </div>
          <div className="" onClick={() => setDownload(false)}>
            {download ? (
              <Btn
                text="Download CV"
                classes="w-[150px] lg:w-[200px] mt-[40px] mx-auto lg:mx-0"
                awesome="fa-download"
              />
            ) : (
              <Btn
                classes="w-[150px] lg:w-[200px] mt-[40px] mx-auto lg:mx-0 bg-zinc-600"
                awesome="fa-ban text-[28px]"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
