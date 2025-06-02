import React from 'react'
import Button from './Button'

function SideBar() {
  return (
    <div className='sidebar mr-4'>
    <div className='sidebar-container h-40 border border-gray rounded-md'>
       <div className='h-16 border border-gray mb-2 card p-4 flex-col gap-2 items-center'
       style={{
        background:"#FFE7D4	",
        borderRadius:"4px 4px 0px 0px !important"
       }}>
        <img src="https://i.pinimg.com/736x/ab/a0/22/aba022d6c03e679a567bfba156800080.jpg" alt="" 
        className='h-20 w-20 rounded-full mb-2 border-1 border-white shadow-sm'/>
        <span className='text-lg'>@ Stephan Salvatore  스테판 </span>
       </div>

    </div>
    <div className="card bg-gray-100 p-2 mt-4 h-20">
      Feel free to reach out :)
    </div>
    <div className='card bg-gray-100 h-20 mt-4 flex justify-between items-center p-2'>
        <span>Your Contribution</span>
        <span className='text-green-600'>+ 60%</span>

    </div>
           </div>
  )
}

export default SideBar