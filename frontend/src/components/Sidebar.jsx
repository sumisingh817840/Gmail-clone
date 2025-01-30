import React from 'react'
import { HiPencil } from "react-icons/hi2";

const Sidebar = () => {
    return (
        <div className='w-[15%]'>
            <div className='p-3'>
                <button className='flex items-center gap-2 bg-[#C2E7FF] p-4 rounded-2xl hover:shadow-md cursor-pointer' >
                <HiPencil  size={'23px'}/>
                    Compose
                </button>
            </div>
        </div>
    )
}


export default Sidebar





