import React from "react";
import Btn from "./Btn";
import polygon from "../assets/Polygon3.png";
import Headings from "./Headings";

function Count(props) {
  return (
    <div className="text-center w-[90px] md:w-[100px]">
      <p className="text-[20px] md:text-[24px] font-night">{props.num}+</p>
      <p className="text-[13px] md:text-[14px] leading-4">{props.text}</p>
    </div>
  );
}

export default function About() {
  return (
    <section className="flex flex-col items-center justify-center text-center pt-[100px] md:mt-[200px]" id='about' aria-labelledby="about">
      
      <Headings header='About Me' desc='Get to know me'/>

      <div className=" mt-[70px] md:flex justify-between items-center">
        <div className="md:w-[550px]">
          <img
            src={polygon}
            alt=""
            className="w-[180px]md:w-[300px] h-[190px] md:h-[300px] mx-auto"
          />
        </div>

        <div className="md:w-[550px] text-[16px] leading-6 md:text-[20px] md:text-left mt-[30px] md:mt-0">
          <p className="md:leading-7">
            With over 1+ years experience in building{" "}
            <br className="hidden md:block" /> proffessional websites for
            businesses, <br className="hidden md:block" /> brands and
            individuals, I bring you closer <br className="hidden md:block" />{" "}
            to your customers with my developer and +{" "}
            <br className="hidden md:block" /> SEO skills.
          </p>
          <p className="mt-[20px]">
            Got a project? Hire me and enjoy quality & excellence in delivery.{" "}
          </p>
          <div className="flex justify-center md:justify-start gap-[15px] md:gap-[30px] mt-[50px]">
            <Count num="01" text="Years experience" />
            <Count num="09" text="Completed Projects" />
            <Count num="01" text="Helped Companies" />
          </div>
          <Btn
            text="Download CV"
            classes="w-[150px] md:w-[200px] mt-[40px] mx-auto md:mx-0"
            awesome="fa-download"
          />
        </div>
      </div>
    </section>
  );
}
