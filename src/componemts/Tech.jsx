import React, { useState } from "react";
import Headings from "./Headings";

function TechTools(props) {
  return (
    <div className="ml-[45px]">
      <p className="mb-[8px] lg:text-[18px] lg:font-medium">{props.text}</p>
      <div className="  rounded-[10px] bg-[#fff] opacity-70">
        <div
          className={`${props.width} border-primary-org rounded-[10px] border-[3px] lg:border-[4px]`}
        ></div>
      </div>
    </div>
  );
}

export default function Tech() {
  const [visibility, setVisibility] = useState(false);
  const [visibility1, setVisibility1] = useState(false);
  const container = [
    "flex items-center gap-[15px] lg:gap-[30px] my-[40px] lg:my-[60px] hover:cursor-pointer",
  ];

  const toggle = () => {
    if (visibility == false) {
      setVisibility(true);
      setVisibility1(false);
    } else if (visibility == true) {
      setVisibility(false);
    }
  };

  const toggle1 = () => {
    if (visibility1 == false) {
      setVisibility1(true);
      setVisibility(false);
    } else if (visibility1 == true) {
      setVisibility1(false);
    }
  };

  return (
    <section
      className="pt-[100px] lg:pt-[150px]"
      id="skills"
      aria-labelledby="skills"
    >
      <Headings header="Technologies" desc="Expert proficiency" />

      <div className="justify-around sm:flex">
        <div>
          <div className={container} onClick={() => toggle()}>
            <p className="text-primary-org w-[40px] text-[24px] font-black lg:w-[50px] animate-bounce">{`{ }`}</p>
            <div className="w-full leading-5 lg:leading-7">
              <p className="text-[18px] font-semibold lg:text-[24px]">
                Frontend Development
              </p>
              <p className="text-primary-org text-[12px] lg:text-[14px]">
                With 1+ years experience
              </p>
            </div>
            {!visibility && (
              <i className="fa fa-chevron-down text-primary-org lg:text-[20px]"></i>
            )}
            {visibility && (
              <i className="fa fa-chevron-up text-primary-org lg:text-[20px]"></i>
            )}
          </div>
          {visibility && (
            <div className="flex flex-col gap-[20px]">
              <TechTools text="HTML" width="w-[80%]" />
              <TechTools text="CSS" width="w-[65%]" />
              <TechTools text="JavaScript" width="w-[60%]" />
              <TechTools text="TailwindCSS" width="w-[80%]" />
              <TechTools text="React.js" width="w-[60%]" />
            </div>
          )}
        </div>

        <div>
          <div className={container} onClick={() => toggle1()}>
            <i className="fa fa-database text-primary-org w-[40px] text-[24px] font-black lg:w-[50px] animate-bounce"></i>
            <div className="w-full leading-5 lg:leading-7">
              <p className="text-[18px] font-semibold lg:text-[24px]">
                Backend Development
              </p>
              <p className="text-primary-org text-[12px] lg:text-[14px]">
                With 0+ years experience
              </p>
            </div>
            {!visibility1 && (
              <i className="fa fa-chevron-down text-primary-org lg:text-[20px]"></i>
            )}
            {visibility1 && (
              <i className="fa fa-chevron-up text-primary-org lg:text-[20px]"></i>
            )}
          </div>
          {visibility1 && (
            <div className="flex flex-col gap-[20px]">
              <TechTools text="NextJs" width="w-[55%]" />
              <TechTools text="NodeJS" width="w-[25%]" />
              <TechTools text="ExpressJs" width="w-[20%]" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
