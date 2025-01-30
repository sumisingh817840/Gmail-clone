import React from 'react'
import { HiPencil } from "react-icons/hi2";
import { MdInbox } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";
import { GoClock } from "react-icons/go";
import { CiPaperplane } from "react-icons/ci";
import { RxCaretDown } from "react-icons/rx";

const sidebarItems = [
    {
        icon: <MdInbox size={'20px'} />,
        text: "Inbox"
    },
    {
        icon: <IoMdStarOutline size={'20px'} />,
        text: "Starred"
    },
    {
        icon: <GoClock size={'20px'} />,
        text: "Snoozed"
    },
    {
        icon: <CiPaperplane size={'20px'} />,
        text: "Sent"
    },
    {
        icon: <RxCaretDown size={'20px'} />,
        text: "Drafts"
    },

]



const Sidebar = () => {
    return (
        <div className='w-[15%]'>
            <div className='p-3'>
                <button className='flex items-center gap-2 bg-[#C2E7FF] p-4 rounded-2xl hover:shadow-md cursor-pointer' >
                    <HiPencil size={'23px'} />
                    Compose
                </button>
            </div>
            <div className='text-gray-800'>
                {
                    sidebarItems.map((item, index) => {
                        return (
                            <div className='flex items-center pl-6 py-1 rounded-n-full gap-4 my-2 hover:cursor-pointer hover:bg-gray-200 rounded-full'>
                                {item.icon}
                                <p>{item.text}</p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}


export default Sidebar





