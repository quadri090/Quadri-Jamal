import React from "react";

function GetInTouch(props) {
  return (
    <div className="flex gap-[15px] pt-[30px] items-center">
      <div className="">
        <i
          className={`fa ${props.awesome} text-[32px] w-[40px] text-primary-org opacity-80`}
        ></i>
      </div>
      <div className="">
        <p className="font-semibold text-[17px] ">{props.head}</p>
        <p className="text-[13px]">{props.desc}</p>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-slate-950 px-[30px] lg:py-[40px] mt-[150px] rounded-t-3xl">
      <div className="  lg:flex justify-center gap-[100px]">
        <div id="logo" className=" h-[39px] pt-[30px]">
          <p className="text-primary-org font-semibold text-[18px] md:text-[20px] lg:text-[26px] leading-[34px]">
            {" "}
            &lt;/J<span className="text-zinc-400">amal</span>
            <span className="text-primary-org">&gt;</span>
          </p>
          <p className="text-[12px]  ">Creative web developer</p>
        </div>

        <div className="mt-[80px] lg:mt-0 md:flex justify-center gap-[100px]">
          <GetInTouch
            awesome="fa-phone"
            head="Prefer calling?"
            desc="+2347010816900"
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
        <p className="text-center text-[12px] lg:text-[14px]">© Quadri Jamal 2023. All rights reserved.</p>
      </div>
    </div>
  );
}
