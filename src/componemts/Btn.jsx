import React from "react";

export default function Btn(props) {
  return (
    <a
      className={`${props.classes} flex items-center justify-center gap-[10px] h-[50px] lg:h-[60px] text-[15px] lg:text-[18px] text-white font-semibold bg-primary-org  rounded-[6px] sm:hover:opacity-80 hover:cursor-pointer`}
      href={props.hreff}
      target="blank"
    >
      {props.text} <i className={`fa ${props.awesome}`}></i>
    </a>
  );
}
