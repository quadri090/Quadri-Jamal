import React from "react";
import Btn from "../componemts/Btn";
import polygon from "../assets/polygon 3.png";
import About from "./About";

export default function Home() {
  return (
    <div>


      <div className="flex flex-col sm:flex-row sm:items-center justify-between  mt-[40px] sm:mt-[130px] mx-[30px] md:w-[1100px] md:mx-auto">
            <div className="flex gap-[50px] md:gap-[100px]">
              <div className="flex flex-col gap-[25px] sm:gap-[40px] text-[20px] sm:text-[28px] text-primary-org">
                <i className="fa fa-facebook-official"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-linkedin"></i>
                <i className="fa fa-whatsapp"></i>
                <i className="fa fa-github"></i>
              </div>
              <div className=" w-[180px] h-[180px] sm:hidden ">
                <img src={polygon} alt="" />
              </div>
            </div>

            <div className="flex flex-col gap-[10px] md:gap-[20px] mt-[30px] md:mt-0">
              <p className="text-[30px] md:text-[45px] font-bold">Hi, I'm Jamal</p>
              <p className="text-[20px] md:text-[26px] font-medium">
                Creative <span className="text-primary-org"> web developer</span>
              </p>
              <p className="text-[16px] md:text-[20px]">
                I create beautiful and responsive{" "}
                <span className="text-primary-org font-medium">SEO<br /></span> optimized websites.
              </p>
              <p className="text-[16px] md:text-[20px]">
                Want to take your <span className="text-primary-org font-medium">brand</span> to
                the next level?
              </p>
              <Btn
                text='Hire me'
                classes='w-[110px] md:w-[130px] mt-[10px]'
                awesome='fa-paper-plane '
              />
            </div>
            <div className="hidden sm:flex w-[400px] h-[300px]">
              <img src={polygon} alt="" />
            </div>
      </div>
      <About />
    </div>
    
  );
}
