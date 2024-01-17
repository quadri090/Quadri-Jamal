import React from "react";

export default function Btn(props) {
  return (
    <a
      className={`${props.classes} bg-primary-org flex h-[50px] items-center justify-center gap-[10px] rounded-[6px] text-[15px] font-semibold text-white hover:cursor-pointer  sm:hover:opacity-80 lg:h-[60px] lg:text-[18px]`}
      href={props.hreff}
      target="blank"
    >
      {props.text} <i className={`fa ${props.awesome}`}></i>
    </a>
  );
}
