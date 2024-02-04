import React, { useState } from "react";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  function ListItems(props) {
    return (
      <>
        <div
          className="my-4 text-center lg:mx-4 lg:my-0"
          onClick={() => setNavOpen(!navOpen)}
        >
          <a
            className="hover:text-primary-org flex flex-col gap-[8px] lg:block"
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
      <header className="flex w-full items-center justify-center lg:h-[50px]">
        <nav className="fixed top-0 z-50 mt-0 h-12 w-full items-center justify-center bg-white bg-opacity-10 backdrop-blur rounded-b-3xl bg-blend-soft-light sm:bg-slate-900 lg:m-auto lg:mx-auto lg:flex lg:h-[50px] lg:w-[1200px] lg:justify-between">
          <div className="mx-[30px] mt-[5px] flex items-center justify-between lg:mx-0 lg:mt-0">
            <div id="logo" className=" h-[39px]">
              <p className="text-primary-org text-[15px] font-semibold leading-[34px] md:text-[20px] lg:text-[26px]">
                {" "}
                &lt;/J<span className="text-zinc-400">amal</span>
                <span className="text-primary-org">&gt;</span>
              </p>
            </div>
            <button
              className="mx-2 h-[26px] cursor-pointer lg:hidden"
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
            className={`relative m-auto flex h-[200px] w-[300px] cursor-pointer items-center justify-between rounded-2xl bg-slate-950 outline outline-zinc-600 transition-opacity duration-500   ease-in-out sm:h-[100px] sm:w-[500px] md:w-[700px] md:outline-none lg:static lg:top-0 lg:z-auto lg:m-0 lg:h-12 lg:justify-center lg:bg-slate-900 lg:py-0 lg:font-bold lg:opacity-100  ${
              navOpen
                ? " xs: top-[35px] z-10 opacity-100"
                : "top-[-1000px] z-[-1] opacity-0"
            }`}
          >
            <ul className="m-auto grid h-full w-full grid-cols-3 items-center justify-between sm:grid-cols-6 lg:mr-[100px] lg:flex lg:h-auto lg:w-[600px]">
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
