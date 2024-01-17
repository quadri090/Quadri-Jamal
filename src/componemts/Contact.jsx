import React from "react";
import Btn from "./Btn";
import shirt from "../assets/shirt.png";

export default function Contact() {
  return (
    <section
      className="flex-row rounded-[15px] border border-slate-500 bg-slate-950 pt-[30px] text-center text-base sm:flex sm:p-[15px] sm:text-left md:mx-auto md:mt-[50px] md:px-[50px] md:py-[30px] lg:w-[900px]"
      id="contact"
      aria-labelledby="contact"
    >
      <div className="sm:w-[50%]">
        <p className="text-[18px] font-semibold lg:text-[24px]">
          Got A New Project?
        </p>
        <div className="mx-[10px] mt-[20px] text-[15px] sm:mx-0 lg:text-[18px]">
          <p className="">Hire me, let's add value to your brand.</p>
          <p className="mt-[20px]">
            I create <span className="text-primary-org">high quality</span> &{" "}
            <span className="text-primary-org">audience-specific</span> modern
            websites that communicate your{" "}
            <span className="text-primary-org">brand values</span> and help you
            stay ahead of competition
          </p>
          <p className="text-primary-org mt-[10px]">
            Send me a message now to get started!
          </p>
          <Btn
            hreff="https://wa.me/2347010816900?text=Hi%20Jamal.%0A%0AI've%20just%20gone%20through%20your%20profile%20and%20i'm%20interested%20in%20"
            text="WhatsApp"
            awesome="fa-whatsapp text-green-500 text-[24px] font-bold"
            classes="w-[140px] md:w-[170px] mt-[20px] mx-auto sm:mx-0 relative z-40"
          />
        </div>
      </div>
      <div className="flex h-[260px] items-center justify-center sm:w-[50%]">
        <img src={shirt} alt="" className="h-[450px]" />
      </div>
    </section>
  );
}
