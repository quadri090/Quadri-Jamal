import React from "react";

export default function Headings(props) {
  return (
    <div className='leading-6 lg:leading-10 text-center'>
      <p className='text-[24px] md:text-[28px] lg:text-[36px] font-night'>{props.header}</p>
      <p className="text-[11px] md:text-[14px] lg:text-[18px] font-medium text-primary-org">
        {props.desc}
      </p>
    </div>
  );
}
