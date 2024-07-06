import React from 'react'

const Sidebar = () => {
  return (
    <div className='bg-orange-300 p-6 '>
      <ul className=' flex justify-start items-center ml-4'>
        <li className='text-xl ml-9 font-bold hover:text-red-500 cursor-pointer'>Home</li>
        <li className='text-xl ml-9 font-bold hover:text-red-500 cursor-pointer'>About</li>
        <li className='text-xl ml-9 font-bold hover:text-red-500 cursor-pointer'>Contact</li>
        <li className='text-xl ml-9 font-bold hover:text-red-500 cursor-pointer'>Blog</li>
        <li className='text-xl ml-9 font-bold hover:text-red-500 cursor-pointer'>Project</li>
      </ul>
    </div>
  )
}

export default Sidebar
