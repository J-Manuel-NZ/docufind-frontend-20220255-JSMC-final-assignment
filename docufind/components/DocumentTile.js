import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";


const DocumentTile = ({title, description, id, pdf}) => {
  return (
    <div className='flex mb-4 w-full bg-grey rounded-lg shadow-md p-4 items-center justify-between'>
        <div className='flex flex-col gap-1'>
            <h1 className='text-xl font-medium'>{title}</h1>
            <p className='text-sm font-light'>DOC_ID: {id}</p>
            <p className='font-light'>{description}</p>
            {/* <a href={pdf} className='text-lg'>View PDF</a> */}
        </div>
        <div className='flex gap-6 items-center'>
            <div className='cursor-pointer flex items-center justify-center p-2 px-6 bg-accent text-white text-xl rounded-lg shadow-md'>
                View
            </div>
            <MdOutlineEdit size={36} color='#F4F9E9' className='cursor-pointer' />
            <FaTrashAlt size={28}  color='#FF3E3E' className='cursor-pointer'/>
        </div>
    </div>
  )
}

export default DocumentTile
