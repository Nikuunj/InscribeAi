import React from 'react'
import Steps from '../componets/Steps'

function HowtoDo() {
  return (
    <div className='z-0'>
      <div className='text-center z-0'>
        <span className='bg-[#96C9F4] px-5 py-2 text-2xl opacity-95 rounded-2xl'>
          How
        </span>
        <span className='px-5 py-2 text-2xl'>
          Does it
        </span>
        <span className='bg-[#FFFAB7] px-5 py-2 text-2xl opacity-95 rounded-2xl'>
          Work?
        </span>
      </div>
      <Steps/>
    </div>
  )
}

export default HowtoDo