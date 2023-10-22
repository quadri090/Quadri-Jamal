import React, { useState } from 'react'

export default function Header() {

    const [navOpen, setNavOpen] = useState(false);
  
    function ListItems(props) {
    
      return (
        <>
          <li className="sm:mx-4 my-4 sm:my-0 text-center" onClick={() => setNavOpen(!navOpen)}>
            <a className="hover:text-zinc-400" href={`${props.href}`}>
              {props.text}
            </a>
          </li>
        </>
      )
    }
  
    return (
      <>
        <header className="sm:h-[50px] w-full  ">
          <nav className="w-full mt-0 h-16 sm:h-28 md:h-[50px] md:m-auto z-10 sm:justify-center top-0 relative sm:items-center lg:w-[1200px] sm:flex lg:justify-between lg:mx-auto">
  
            <div className="flex items-center justify-between mt-[13px] sm:mt-0 mx-[30px] sm:mx-0">
              <div id="logo" className=" h-[39px]">
                    <p className="text-orange-500 font-semibold text-[20px] sm:text-[26px] leading-[34px]"> &lt;/J<span className="text-black">amal</span><span className="text-orange-500">&gt;</span></p>
                </div>
              <button className="mx-2 cursor-pointer h-[26px] text-black sm:hidden" onClick={() => setNavOpen(!navOpen)}>
                <i id="icon" className={`fa fa-th-large text-[20px] ${navOpen ? "hidden" : "block"}`} aria-hidden="true"></i>
                <i className={`fa fa-times text-[20px] ${navOpen ? 'block' : 'hidden'}`}></i>
              </button>
            </div>
  
            <div
              className={`flex text-[16x] font-bold justify-center md:justify-center items-center sm:z-auto relative sm:static sm:top-0 w-[300px] sm:w-[700px] md:w-[400px] m-auto md:m-0  sm:py-6 md:py-0 h-[200px] sm:h-12 sm:opacity-100 bg-white transition-all ease-in duration-300 cursor-pointer ${navOpen ? " opacity-100 z-10 top-[35px] xs:" : "opacity-0 z-[-1] top-[-1000px]"}`}
            >
              <ul className="sm:flex m-auto sm:w-[442px]">
                <ListItems 
                text='Home'
                href='#home'/>
                <ListItems 
                text='Services'
                href='#Services'/>
                <ListItems 
                text='About'
                href='#about'/>
                <ListItems 
                text='Contact'
                href='#contact'/>
              </ul>
            </div>
          </nav>
        </header>
      </>
    );
  }