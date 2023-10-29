import React from "react";

function GetInTouch(props) {
  return (
    <div className="flex gap-[15px] pt-[30px] items-center">
      <div className="">
        <i
          className={`fa ${props.awesome} text-[32px] text-orange-500 w-[40px]`}
        ></i>
      </div>
      <div className="">
        <p className="font-semibold text-[18px] ">{props.head}</p>
        <p className="text-[14px]">{props.desc}</p>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-slate-900 px-[30px] sm:py-[40px] mt-[150px] rounded-t-3xl">
      <div className="  sm:flex justify-center gap-[100px]">
        <div id="logo" className=" h-[39px] pt-[30px]">
          <p className="text-orange-500 font-semibold text-[18px] sm:text-[26px] leading-[34px]">
            {" "}
            &lt;/J<span className="text-white">amal</span>
            <span className="text-orange-500">&gt;</span>
          </p>
          <p className="text-[12px]  ">Creative web developer</p>
        </div>

        <div className="mt-[80px] sm:mt-0 sm:flex justify-center gap-[100px]">
          <GetInTouch
            awesome="fa-phone"
            head="Prefer calling?"
            desc="07010816900"
          />
          <GetInTouch
            awesome="fa-envelope-o"
            head="Email"
            desc="quadri090@gmail.com"
          />
          <GetInTouch awesome="fa-globe" head="Location" desc="Earth" />
        </div>
      </div>

      <div className="py-[30px] mt-[70px]">
        <p className="text-center text-[12px] sm:text-[14px]">© Quadri Jamal 2023. All rights reserved.</p>
      </div>
    </div>
  );
}
