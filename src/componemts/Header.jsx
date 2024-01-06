import React, { useState } from "react";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  function ListItems(props) {
    return (
      <>
        <div
          className="lg:mx-4 my-4 lg:my-0 text-center"
          onClick={() => setNavOpen(!navOpen)}
        >
          <a
            className="flex flex-col gap-[8px] lg:block hover:text-primary-org"
            href={`${props.href}`}
          >
            <i className={`fa ${props.icon} lg:hidden`}></i>
            <p className="text-[13px] lg:text-base">{props.text}</p>
          </a>
        </div>
      </>
    );
  }

  return (
    <>
      <header className="lg:h-[50px] w-full flex items-center justify-center">
        <nav className="w-full mt-0 h-12 lg:h-[50px] lg:m-auto top-0 b items-center justify-center z-50 fixed bg-slate-900 lg:w-[1200px] lg:flex lg:justify-between lg:mx-auto">
          <div className="flex items-center justify-between mt-[5px] lg:mt-0 mx-[30px] lg:mx-0">
            <div id="logo" className=" h-[39px]">
              <p className="text-orange-500 font-semibold text-[15px] md:text-[20px] lg:text-[26px] leading-[34px]">
                {" "}
                &lt;/J<span className="text-zinc-400">amal</span>
                <span className="text-orange-500">&gt;</span>
              </p>
            </div>
            <button
              className="mx-2 cursor-pointer h-[26px] lg:hidden"
              onClick={() => setNavOpen(!navOpen)}
            >
              <i
                id="icon"
                className={`fa fa-th-large text-[20px] md:text-[26px] ${
                  navOpen ? "hidden" : "block"
                }`}
                aria-hidden="true"
              ></i>
              <i
                className={`fa fa-times text-[20px] md:text-[26px] ${
                  navOpen ? "block" : "hidden"
                }`}
              ></i>
            </button>
          </div>

          <div
            className={`flex lg:font-bold justify-between lg:justify-center items-center lg:z-auto relative lg:static lg:top-0 w-[300px] sm:w-[500px] md:w-[700px] m-auto lg:m-0   lg:py-0 h-[200px] sm:h-[100px] lg:h-12 lg:opacity-100 bg-slate-950 lg:bg-slate-900 rounded-2xl transition-opacity ease-in-out duration-500 cursor-pointer outline outline-zinc-600 md:outline-none  ${
              navOpen
                ? " opacity-100 z-10 top-[35px] xs:"
                : "opacity-0 z-[-1] top-[-1000px]"
            }`}
          >
            <ul className="grid grid-cols-3 sm:grid-cols-6 lg:flex justify-between items-center m-auto w-full h-full lg:h-auto lg:w-[600px] lg:mr-[100px]">
              <ListItems text="Home" href="#home" icon="fa-home" />
              <ListItems text="About" href="#about" icon="fa-user" />
              <ListItems text="Skills" href="#skills" icon="fa-book" />
              <ListItems
                text="Portfolio"
                href="#portfolio"
                icon="fa-picture-o"
              />
              <ListItems
                text="Contact"
                href="#contact"
                icon="fa-paper-plane-o"
              />
              <ListItems text="Services" href="#services" icon="fa-briefcase" />
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
