import React, { useState } from "react";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  function ListItems(props) {
    return (
      <>
        <div
          className="sm:mx-4 my-4 sm:my-0 text-center text-white"
          onClick={() => setNavOpen(!navOpen)}
        >
          <a className="flex flex-col gap-[8px] md:block hover:text-zinc-400 active:to-primary-org" href={`${props.href}`}>
            <i className={`fa ${props.icon} md:hidden`}></i>
            <p className="text-[13px] md:text-base">{props.text}</p>
          </a>
        </div>
      </>
    );
  }

  return (
    <>
      <header className="sm:h-[50px] w-full flex items-center justify-center">
        <nav className="w-full mt-0 h-12 sm:h-28 md:h-[50px] md:m-auto sm:justify-center top-0 b sm:items-center z-10 fixed bg-slate-900 lg:w-[1200px] sm:flex lg:justify-between lg:mx-auto">
          <div className="flex items-center justify-between mt-[13px] sm:mt-0 mx-[30px] sm:mx-0">
            <div id="logo" className=" h-[39px]">
              <p className="text-orange-500 font-semibold text-[15px] sm:text-[26px] leading-[34px]">
                {" "}
                &lt;/J<span className="text-white">amal</span>
                <span className="text-orange-500">&gt;</span>
              </p>
            </div>
            <button
              className="mx-2 cursor-pointer h-[26px] sm:hidden"
              onClick={() => setNavOpen(!navOpen)}
            >
              <i
                id="icon"
                className={`fa fa-th-large text-[20px] ${
                  navOpen ? "hidden" : "block"
                }`}
                aria-hidden="true"
              ></i>
              <i
                className={`fa fa-times text-[20px] ${
                  navOpen ? "block" : "hidden"
                }`}
              ></i>
            </button>
          </div>

          <div
            className={`flex md:font-bold justify-between md:justify-center items-center sm:z-auto relative sm:static sm:top-0 w-[300px] sm:w-[700px] md:w-[400px] m-auto md:m-0  sm:py-6 md:py-0 h-[200px] sm:h-12 sm:opacity-100 bg-slate-950 sm:bg-slate-900 rounded-2xl transition-opacity ease-in-out duration-500 cursor-pointer ${
              navOpen
                ? " opacity-100 z-10 top-[35px] xs:"
                : "opacity-0 z-[-1] top-[-1000px]"
            }`}
          >
            <ul className="grid grid-cols-3 sm:flex justify-between items-center m-auto w-full h-full md:h-auto sm:w-[442px] md:w-[600px]">
              <ListItems text="Home" href="#home" icon='fa-home' />
              <ListItems text="About" href="#about" icon='fa-user' />
              <ListItems text="Skills" href="#skills" icon='fa-book' />
              <ListItems text="Portfolio" href="#portfolio" icon='fa-picture-o' />
              <ListItems text="Services" href="#services" icon='fa-briefcase' />
              <ListItems text="Contact" href="#services" icon='fa-paper-plane-o' />
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
