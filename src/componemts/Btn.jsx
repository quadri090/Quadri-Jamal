import React from 'react'

export default function Btn(props) {
  return (
    <button className={`${props.classes} flex items-center justify-center gap-[10px] h-[50px] md:text-[20px] text-white font-medium bg-primary-org rounded-[6px]`}>{props.text} <i className={`fa ${props.awesome}`}></i></button>
  )
}
