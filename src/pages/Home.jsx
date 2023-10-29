import React from "react";
import Btn from "../componemts/Btn";
import polygon from "../assets/Polygon3.png";
import About from "../componemts/About";
import Tech from "../componemts/Tech";
import Qualifications from "../componemts/Qualifications";
import Portfolio from "../componemts/Portfolio";
import Contact from "../componemts/Contact"
import Footer from "../componemts/Footer";
import TypeIt from "typeit-react";

export default function Home() {

  return (
    <div >
      <div className="mx-[30px] lg:w-[1100px] lg:mx-auto">

      <div className="flex flex-col sm:flex-row lg:items-center justify-between pt-[100px] lg:pt-[150px]" id='home' aria-labelledby="home">
        <div className="flex gap-[50px] sm:gap-[20px] md:gap-[100px] items-center ">
          <div className="flex sm:hidden md:flex flex-col gap-[15px] sm:gap-[20px] lg:gap-[30px] text-[20px] md:text-[24px] lg:text-[28px] text-primary-org ">
            <a href="https://facebook.com">
              <i className="fa fa-facebook-official"></i>
            </a>
            <a href="https://twitter.com/qadr_jamal?t=B6_1p6bzQqJQEAkjvQ0OhQ&s=09">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://api.whatsapp.com/message/6IRMBIR4FN7NP1">
              <i className="fa fa-whatsapp"></i>
            </a>
            <a href="https://github.com/quadri090">
              <i className="fa fa-github"></i>
            </a>
          </div>
          <div className=" sm:hidden w-[200px] h-[200px]">
            <img src={polygon} alt="" className="w-[200px] h-[200px]"/>
          </div>
        </div>

        <div className="flex flex-col gap-[10px] lg:gap-[20px] mt-[50px] md:mt-0 font-normal lg:font-medium">
          <p className="text-[28px] sm:text-[20px] md:text-[28px] lg:text-[45px] font-black">Hi, I'm Jamal</p>
          <p className="text-[18px] sm:text-[15px] md:text-[18px] lg:text-[26px] font-medium">
            A creative <span className="text-primary-org">
            <TypeIt
                getBeforeInit={(instance) => {
                    instance
                        .type("web developre.")
                        .pause(950)
                        .delete(3)
                        .pause(500)
                        .type("er!");
                    return instance;
                }}
            />
            </span>
          </p>
          <p className="text-[16px] lg:text-[18px]">
            I develop beautiful and responsive{" "}
            <span className="text-primary-org">
              SEO
              <br className="sm:hidden md:block"/>
            </span>{" "}
            optimized websites.
          </p>
          <p className="text-[16px] lg:text-[18px]">
            Want to take your{" "}
            <span className="text-primary-org">brand</span> to the
            next level?
          </p>
          <Btn
            hreff='https://api.whatsapp.com/message/6IRMBIR4FN7NP1'
            text="Hire Me"
            classes="w-[110px] lg:w-[130px] mt-[10px]"
            awesome="fa-paper-plane "
          />
        </div>
        <div className="hidden sm:flex w-[300px] h-[250px] lg:w-[400px] lg:h-[300px]">
          <img src={polygon} alt="" />
        </div>
      </div>
      <About />
      <Tech />
      <Qualifications />
      <Portfolio />
      <Contact />
      </div>
      <Footer />
    </div>
  );
}
