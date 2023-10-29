import React from "react";
import Btn from "./Btn";
import polygon from "../assets/Polygon3.png";
import Headings from "./Headings";

function Count(props) {
  return (
    <div className="text-center w-[90px] lg:w-[100px]">
      <p className="text-[20px] lg:text-[24px] font-night">{props.num}+</p>
      <p className="text-[13px] lg:text-[14px] leading-4">{props.text}</p>
    </div>
  );
}

export default function About() {
  return (
    <section className="flex flex-col items-center justify-center text-center pt-[100px] lg:mt-[200px]" id='about' aria-labelledby="about">
      
      <Headings header='About Me' desc='Get to know me'/>

      <div className=" mt-[70px] lg:flex justify-between items-center">
        <div className="lg:w-[550px]">
          <img
            src={polygon}
            alt=""
            className="w-[180px]lg:w-[300px] h-[190px] lg:h-[300px] mx-auto"
          />
        </div>

        <div className="md:w-[400px] lg:w-[550px] text-[16px] leading-6 lg:text-[20px] lg:text-left mt-[30px] lg:mt-0">
          <p className="lg:leading-7">
            With over 1+ years experience in building{" "}
            <br className="hidden lg:block" /> proffessional websites for
            businesses, <br className="hidden lg:block" /> brands and
            individuals, I bring you closer <br className="hidden lg:block" />{" "}
            to your customers with my developer and +{" "}
            <br className="hidden lg:block" /> SEO skills.
          </p>
          <p className="mt-[20px]">
            Got a project? Hire me and enjoy quality & excellence in delivery.{" "}
          </p>
          <div className="flex justify-center lg:justify-start gap-[15px] lg:gap-[30px] mt-[50px]">
            <Count num="01" text="Years experience" />
            <Count num="09" text="Completed Projects" />
            <Count num="01" text="Helped Companies" />
          </div>
          <Btn
            text="Download CV"
            classes="w-[150px] lg:w-[200px] mt-[40px] mx-auto lg:mx-0"
            awesome="fa-download"
          />
        </div>
      </div>
    </section>
  );
}
