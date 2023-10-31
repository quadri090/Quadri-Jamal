import React from 'react'
import Btn from './Btn'

export default function PortfolioCard(props) {
  return (
    <div className='px-[20px] py-12 md:pb-20 md:p-0 sm:w-[400px] lg:w-[1000px] sm:mx-auto flex flex-col lg:flex-row lg:justify-evenly'>
        <img src={props.src} alt="alt" className=' h-[170px] md:h-[220px] w-full lg:w-[350px] rounded-xl opacity-60' />
        <div className='lg:w-[350px]'>
            <p className='mt-[25px] lg:mt-[-5px] text-[18px] md:text-[24px] font-semibold'>{props.head}</p>
            <p className='mt-[5px] md:mt-[10px] text-[15px] md:text-[18px] font-normal'>{props.desc}</p>
            <Btn 
                text='Demo'
                awesome='fa-paper-plane-o'
                classes='w-[100px] lg:w-[120px] mt-[15px]'
                hreff={props.hrefff}
            />
        </div>
    </div>
  )
}
