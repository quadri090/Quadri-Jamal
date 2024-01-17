import React from "react";

function GetInTouch(props) {
  return (
    <div className="flex items-center gap-[15px] pt-[30px]">
      <div className="">
        <i
          className={`fa ${props.awesome} text-primary-org w-[40px] text-[32px] opacity-80`}
        ></i>
      </div>
      <div className="">
        <p className="text-[17px] font-semibold ">{props.head}</p>
        <p className="text-[13px]">{props.desc}</p>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="mt-[150px] rounded-t-3xl bg-slate-950 px-[30px] lg:py-[40px]">
      <div className="  justify-center gap-[100px] lg:flex">
        <div id="logo" className=" h-[39px] pt-[30px]">
          <p className="text-primary-org text-[18px] font-semibold leading-[34px] md:text-[20px] lg:text-[26px]">
            {" "}
            &lt;/J<span className="text-zinc-400">amal</span>
            <span className="text-primary-org">&gt;</span>
          </p>
          <p className="text-[12px]  ">Creative web developer</p>
        </div>

        <div className="mt-[80px] justify-center gap-[100px] md:flex lg:mt-0">
          <GetInTouch
            awesome="fa-phone mail"
            head="Prefer calling?"
            desc="+2347010816900"
          />
          <GetInTouch
            awesome="fa-envelope-o mail"
            head="Email"
            desc="quadri090@gmail.com"
          />
          <GetInTouch awesome="fa-globe spin" head="Location" desc="Earth" />
        </div>
      </div>

      <div className="mt-[70px] py-[30px]">
        <p className="text-center text-[12px] lg:text-[14px]">
          © Quadri Jamal 2023. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
