import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdSearch } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { FaUser } from "react-icons/fa";

 
 

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-3 h-lo">
      <div className="flex items-center gap-l0">
        <div className="flex items-center gap-2 p-3">
          <div className='hover:bg-gray-200 rounded-full cursor-pointer p-3'>
            <GiHamburgerMenu className=' text-gray-700 ' />
          </div>
          <img className='w-7' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/640px-Gmail_icon_%282020%29.svg.png" alt="" />
          <h1 className='text-2xl text-gray-600 font-normal'>Gmail</h1>
        </div>

      </div>

      <div className='w-[60%] mr-30'>
        <div className='flex items-center rounded-full px-2 py-3 bg-[#eaf1fb]'>
          <IoMdSearch className='text-gray-700' size={'24px'} />
          <input type="text" placeholder='Search Mail' className='rounded-full bg-transparent outline-none px-1 w-full' />
        </div>
      </div>

      <div className='flex items-center'>
        <div className='hover:bg-gray-200 rounded-full cursor-pointer p-2'>
          <CiCircleQuestion className='text-gray-700' size={'26px'} />
        </div>

        <div className='hover:bg-gray-200 rounded-full cursor-pointer p-2'>
          <IoSettingsOutline className='text-gray-700' size={'24px'} />
        </div>

        <div className='hover:bg-gray-200 rounded-full cursor-pointer p-2'>
          <TbGridDots className='text-gray-700' size={'24px'} />
        </div>

        <div className='hover:bg-gray-200 rounded-full cursor-pointer p-2'>
        <FaUser className='text-gray-700' size={'21px'}  />
        </div>


      </div>



    </div>
  )
}

export default Navbar