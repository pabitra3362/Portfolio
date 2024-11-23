import React from 'react'

const InfineScrollText = ({text,animate}) => {
  return (
    <div className="w-full overflow-hidden py-3">
      <div className={`hollow-text-stroke inline-block ${animate} text-xl md:text-5xl lg:text-[100px] whitespace-nowrap `}>
      <span>{text}</span>
      <span>{text}</span>
      <span>{text}</span>
      <span>{text}</span>
      </div>
    </div>
  )
}

export default InfineScrollText
