import React from "react";
import Btn from "./Btn";

export default function PortfolioCard(props) {
  return (
    <div className="flex flex-col px-[20px] py-12 sm:mx-auto sm:w-[400px] md:p-0 md:pb-20 lg:w-[1000px] lg:flex-row lg:justify-evenly">
      <img
        src={props.src}
        alt="alt"
        className=" h-[170px] w-full rounded-xl opacity-60 md:h-[220px] lg:w-[350px]"
      />
      <div className="lg:w-[350px]">
        <p className="mt-[25px] text-[18px] font-semibold md:text-[24px] lg:mt-[-5px]">
          {props.head}
        </p>
        <p className="mt-[5px] text-[15px] font-normal md:mt-[10px] md:text-[18px]">
          {props.desc}
        </p>
        <Btn
          text="Demo"
          awesome="fa-paper-plane-o"
          classes="w-[100px] lg:w-[120px] mt-[15px]"
          hreff={props.hrefff}
        />
      </div>
    </div>
  );
}
