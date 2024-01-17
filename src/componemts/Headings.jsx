import React from "react";

export default function Headings(props) {
  return (
    <div className="text-center leading-6 lg:leading-10">
      <p className="font-night text-[24px] md:text-[28px] lg:text-[36px]">
        {props.header}
      </p>
      <p className="text-primary-org text-[11px] font-medium md:text-[14px] lg:text-[18px]">
        {props.desc}
      </p>
    </div>
  );
}
