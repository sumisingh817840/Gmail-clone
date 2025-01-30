import React, { useState } from 'react'
import { MdOutlineCropSquare } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";
import { IoMdRefresh } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RxCaretRight } from "react-icons/rx";
import { RxCaretLeft } from "react-icons/rx";
import { MdInbox } from "react-icons/md";
import { GoTag } from "react-icons/go";
import { HiOutlineUsers } from "react-icons/hi";
import { CiCircleInfo } from "react-icons/ci";
import Email from './Email';



const mailType = [
    {
        icon: <MdInbox size={'20px'} />,
        text: "Primary"
    },

    {
        icon: <GoTag size={'20px'} />,
        text: "Promotions"
    },

    {
        icon: <HiOutlineUsers size={'20px'} />,
        text: "Social"
    },

    {
        icon: <CiCircleInfo size={'20px'} />,
        text: "Updates"
    },


]



const Inbox = () => {

    const [selected, setSelected] = useState(null);
    return (

        <div className='flex-1 rounded-xl bg-white mx-5 p-3'>

            <div className='flex items-center justify-between gap-1'>
                <div className='flex gap-6 '>
                    <div className='flex items-center gap-1 '>
                        <MdOutlineCropSquare size={'23px'} className='text-zinc-500 ' />
                        <AiFillCaretDown size={'12px'} className='text-zinc-500' />
                    </div>

                    <div className='hover:bg-gray-200 rounded-full cursor-pointer p-2'>
                        <IoMdRefresh size={'18px'} className='text-zinc-500' />
                    </div>

                    <div className='hover:bg-gray-200 rounded-full cursor-pointer p-2'>
                        <BsThreeDotsVertical size={'18px'} className='text-zinc-500' />
                    </div>

                </div>

                <div className='flex items-center gap-3'>
                    <span className='text-md'>1 to 50</span>

                    <div className='hover:bg-gray-200 rounded-full cursor-pointer p-2'>
                        <RxCaretLeft size={'23px'} />
                    </div>

                    <div className='hover:bg-gray-200 rounded-full cursor-pointer p-2'>
                        <RxCaretRight size={'23px'} />
                    </div>

                </div>

            </div>

            <div>
                <div className='flex items-center gap-10 py-3'>
                    {mailType.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setSelected(index)} // Set selected item on click
                            className={`flex items-center gap-3  py-2 cursor-pointer 
            ${selected === index ? "border-b-3 border-b-blue-500 text-blue-500" : "border-b-4 border-b-transparent"}`}
                        >
                            <span>{item.icon}</span>
                            <span>{item.text}</span>
                        </button>
                    ))}
                </div>
            </div>


            <div>
                <Email />
            </div>


        </div>


    )
}

export default Inbox