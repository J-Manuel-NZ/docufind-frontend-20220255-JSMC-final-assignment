'use client'
import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import axios from 'axios';
import { useRouter } from 'next/navigation';


const DocumentTile = ({title, description, id, pdf, category, notes, db_id, refresh}) => {
  const router = useRouter();
  const showPDF = (pdf) => {
    window.open(`http://localhost:3000/files/${pdf}`, '_blank');
  }
  const deleteDocument = async () => {
        await axios.delete(`http://localhost:3000/${db_id}/delete`)
        refresh();
    }
  

  return (
    <div className='flex mb-4 w-full bg-grey rounded-lg shadow-md p-4 items-center justify-between'>
        <div className='flex flex-col gap-1'>
          <div className='flex gap-4'>
            <h1 className='text-xl font-medium'>{title}</h1>
            <div className='bg-darkGrey rounded-full px-2 py-1 flex items-center justify-center shadow-md'>
              <p className='font-medium text-lightGrey text-xs'>{category}</p>
            </div>

          </div>
            <p className='text-sm font-light'>DOC_ID: {id}</p>
            <p className='font-light'>{description}</p>
            {/* <a href={pdf} className='text-lg'>View PDF</a> */}
        </div>
        <div className='flex gap-6 items-center'>
            <div onClick={() => showPDF(pdf)} className='cursor-pointer flex items-center justify-center p-2 px-6 bg-accent text-white text-xl rounded-lg shadow-md'>
                View
            </div>
            <MdOutlineEdit size={36} color='#F4F9E9' className='cursor-pointer' />
            <FaTrashAlt size={28}  color='#FF3E3E' className='cursor-pointer' onClick={() => deleteDocument()}/>
        </div>
    </div>
  )
}

export default DocumentTile
