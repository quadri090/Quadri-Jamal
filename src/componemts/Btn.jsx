import React from "react";

export default function Btn(props) {
  return (
    <a
      className={`${props.classes} flex items-center justify-center gap-[10px] h-[50px] md:h-[60px] text-[15px] md:text-[18px] text-white font-medium bg-primary-org rounded-[6px]`}
      href={props.hreff} target="blank" >

        {props.text} <i className={`fa ${props.awesome}`}></i>
    </a>
  );
}
