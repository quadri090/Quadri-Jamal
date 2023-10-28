import React, { useState } from "react";
import Headings from "./Headings";

function TechTools(props) {
  return (
    <div className="ml-[45px]">
      <p className="mb-[8px] md:text-[18px] md:font-medium">{props.text}</p>
      <div className="  bg-[#f5c685] rounded-[10px]">
        <div
          className={`${props.width} border-[3px] md:border-[4px] border-primary-org rounded-[10px]`}
        ></div>
      </div>
    </div>
  );
}

export default function Tech() {
  const [visibility, setVisibility] = useState(false);
  const [visibility1, setVisibility1] = useState(false);
  const container = ["flex items-center gap-[15px] md:gap-[30px] my-[40px] md:my-[60px] hover:cursor-pointer"]

  const toggle = () => {
    if (visibility == false) {
      setVisibility(true);
      setVisibility1(false)
    } else if (visibility == true) {
      setVisibility(false);
    }
  };

  const toggle1 = () => {
    if (visibility1 == false) {
      setVisibility1(true);
      setVisibility(false)
    } else if (visibility1 == true) {
      setVisibility1(false);
    }
  };

  return (
    <section className="pt-[100px] md:pt-[150px]" id='skills' aria-labelledby="skills">

      <Headings header='Technologies' desc='Expert proficiency'/>

      <div className="sm:flex justify-around">
        
        <div>
          <div
            className={container}
            onClick={() => toggle()}
          >
            <p className="font-black text-[24px] w-[40px] md:w-[50px] text-primary-org">{`{ }`}</p>
            <div className="leading-5 md:leading-7 w-full">
              <p className="text-[18px] md:text-[24px] font-semibold">Frontend Development</p>
              <p className="text-[12px] md:text-[14px] text-primary-org">
                With 1+ years experience
              </p>
            </div>
            {!visibility && <i className="fa fa-chevron-down md:text-[20px] text-primary-org"></i>}
            {visibility && <i className="fa fa-chevron-up md:text-[20px] text-primary-org"></i>}
          </div>
          {visibility && (
            <div className="flex flex-col gap-[20px]">
              <TechTools text="HTML" width="w-[85%]" />
              <TechTools text="CSS" width="w-[70%]" />
              <TechTools text="Tailwind CSS" width="w-[85%]" />
              <TechTools text="React.js" width="w-[70%]" />
              <TechTools text="JavaScript" width="w-[60%]" />
            </div>
          )}
        </div>

        <div>
          <div
            className={container}
            onClick={() => toggle1()}
          >
            <i className="fa fa-database font-black text-[24px] w-[40px] md:w-[50px] text-primary-org"></i>
            <div className="leading-5 md:leading-7 w-full">
              <p className="text-[18px] md:text-[24px] font-semibold">Backend Development</p>
              <p className="text-[12px] md:text-[14px] text-primary-org">
                With 0+ years experience
              </p>
            </div>
            {!visibility1 && (
              <i className="fa fa-chevron-down md:text-[20px] text-primary-org"></i>
            )}
            {visibility1 && <i className="fa fa-chevron-up md:text-[20px] text-primary-org"></i>}
          </div>
          {visibility1 && (
            <div className="flex flex-col gap-[20px]">
              <TechTools text="NodeJS" width="w-[25%]" />
              <TechTools text="ExpressJS" width="w-[20%]" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
