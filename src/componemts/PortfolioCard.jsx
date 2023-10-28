import React from 'react'
import Btn from './Btn'

export default function PortfolioCard(props) {
  return (
    <div className='mx-[20px] md:w-[1000px] md:mx-auto flex flex-col md:flex-row md:justify-evenly'>
        <img src={props.src} alt="alt" className=' h-[170px] sm:h-[220px] w-full sm:w-[350px] rounded-xl' />
        <div className='sm:w-[350px] leading-relaxed'>
            <p className='mt-[25px] sm:mt-[-5px] text-[17px] md:text-[24px] font-semibold'>{props.head}</p>
            <p className='mt-[5px] text-[14px] md:text-[18px] font-medium'>{props.desc}</p>
            <Btn 
                text='Demo'
                awesome='fa-paper-plane-o'
                classes='w-[100px] md:w-[120px] mt-[15px]'
                hreff={props.hrefff}
            />
        </div>
    </div>
  )
}
