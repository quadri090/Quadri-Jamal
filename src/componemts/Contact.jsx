import React from 'react'
import Btn from './Btn'
import suit from '../assets/suit.png'
import shirt from '../assets/shirt.png'

export default function Contact() {
  return (
    <div className='text-base text-center sm:text-left pt-[30px] md:mt-[50px] md:w-[900px] md:mx-auto md:py-[30px] sm:px-[50px] sm:flex flex-row bg-slate-800 rounded-[15px]'>
        <div className='md:w-[50%]'>
            <p className='text-[18px] md:text-[24px] text-white font-semibold'>Got A New Project?</p>
            <div className='md:text-[18px] mt-[20px] mx-[10px] md:mx-0'>
                <p className=''>Hire me, let's add value to your brand.</p>
                <p className='mt-[20px]'>I create <span className='text-primary-org'>high quality</span> & <span className='text-primary-org'>audience-specific</span> modern websites that communicate your <span className='text-primary-org'>brand values</span> and help you stay ahead of competition</p>
                <p className='text-primary-org mt-[10px]'>Send me a message now to get started!</p>
                <Btn hreff='https://api.whatsapp.com/message/6IRMBIR4FN7NP1' text='Contact Me' awesome='fa-paper-plane-o' classes='w-[140px] md:w-[170px] mt-[20px] mx-auto md:mx-0 relative z-50'/>
            </div>
        </div>
        <div className='h-[260px] md:w-[50%] flex items-center justify-center'>
            <img src={shirt} alt="" className='h-[450px]'/>
        </div>
    </div>
  )
}
