import React from "react";

export default function Headings(props) {
  return (
    <div className='leading-6 md:leading-10 text-center'>
      <p className='text-[24px] md:text-[42px] font-night'>{props.header}</p>
      <p className="text-[11px] md:text-[18px] font-medium text-primary-org">
        {props.desc}
      </p>
    </div>
  );
}
