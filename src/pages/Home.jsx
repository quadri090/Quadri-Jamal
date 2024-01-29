import { useState } from "react";
import Btn from "../componemts/Btn";
import polygon from "../assets/Polygon3.png";
import About from "../componemts/About";
import Tech from "../componemts/Tech";
import Qualifications from "../componemts/Qualifications";
import Portfolio from "../componemts/Portfolio";
import Contact from "../componemts/Contact";
import Footer from "../componemts/Footer";
import TypeIt from "typeit-react";

export default function Home() {
  const [visibility, setVisibility] = useState(true);

  return (
    <>
      <div className="mx-[30px] lg:mx-auto lg:w-[1100px]">
        <div
          className="flex flex-col justify-between pt-[100px] sm:flex-row lg:items-center lg:pt-[150px]"
          id="home"
          aria-labelledby="home"
          onMouseEnter={() => setVisibility(true)}
          onMouseLeave={() => setVisibility(false)}
        >
          <div className="flex items-center gap-[50px] sm:gap-[20px] md:gap-[100px] ">
            <div className=" flex flex-col gap-[15px] text-[20px] sm:hidden sm:gap-[20px] md:flex md:text-[24px] lg:gap-[30px] lg:text-[28px] ">
              <a href="#">
                <i className="fa fa-facebook-official hover:text-primary-org"></i>
              </a>
              <a href="https://twitter.com/qadr_jamal?t=B6_1p6bzQqJQEAkjvQ0OhQ&s=09">
                <i className="fa fa-twitter hover:text-primary-org"></i>
              </a>
              <a href="">
                <i className="fa fa-linkedin hover:text-primary-org"></i>
              </a>
              <a href="https://api.whatsapp.com/message/6IRMBIR4FN7NP1">
                <i className="fa fa-whatsapp hover:text-primary-org"></i>
              </a>
              <a href="https://github.com/quadri090">
                <i className="fa fa-github hover:text-primary-org"></i>
              </a>
            </div>
            <div className=" h-[200px] w-[200px] sm:hidden">
              <img src={polygon} alt="" className="h-[200px] w-[200px]" />
            </div>
          </div>

          <div className="mt-[50px] flex flex-col gap-[10px] font-normal md:mt-0 lg:gap-[20px] lg:font-medium">
            <p className="text-[28px] font-black sm:text-[20px] md:text-[28px] lg:text-[45px]">
              Hi, I'm Jamal
            </p>
            <p className="text-[18px] font-medium sm:text-[15px] md:text-[18px] lg:text-[26px]">
              A creative{" "}
              <span className="text-primary-org">
                <TypeIt
                  getBeforeInit={(instance) => {
                    instance
                      .type("web develooer.")
                      .pause(950)
                      .delete(4)
                      .pause(500)
                      .type("per!");
                    return instance;
                  }}
                />
              </span>
            </p>
            <p className="text-[16px] lg:text-[18px]">
              I develop beautiful and responsive{" "}
              <span className="text-primary-org">
                SEO
                <br className="sm:hidden md:block" />
              </span>{" "}
              optimized websites.
            </p>
            <p className="text-[16px] lg:text-[18px]">
              Want to take your <span className="text-primary-org">brand</span>{" "}
              to the next level?
            </p>
            <Btn
              hreff="mailto:quadri090@gmail.com"
              text="Hire Me"
              classes="w-[110px] lg:w-[130px] mt-[10px]"
              awesome="fa-paper-plane "
            />
          </div>
          <div className="hidden h-[250px] w-[300px] sm:flex lg:h-[300px] lg:w-[400px]">
            <img src={polygon} alt="" />
          </div>
        </div>
        <div
          className={` ${visibility ? "flex" : "hidden"} mt-14 animate-bounce flex-col items-center`}
        >
          <i className="fa fa-long-arrow-down text-[28px]"></i>
        </div>

        <About />
        <Tech />
        <Qualifications />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
