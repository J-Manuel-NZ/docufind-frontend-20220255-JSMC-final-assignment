import React from 'react'
import { FaSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const AddFile = () => {
  return (
    <main className='flex flex-col bg-darkGrey p-10 w-full'>
        <form className='flex flex-col'>

          <label className='mb-2 text-lightGrey'>Document Name:</label>
          <input
          type='text'
          className='w-full bg-darkGrey p-2 rounded-full mb-6 text-[#fff] placeholder:text-lightGrey/50 focus:placeholder-opacity-0 focus:border-none focus:outline-none border-none '
          placeholder='e.g. 1023CDCLD Biopsy Report'
        />

          <label className='mb-2 text-lightGrey'>Upload File:</label>
          <input className='mb-6' type='file' />

          <label className='mb-2' text-lightGrey>Category:</label>
          <div>
            <select className='rounded-full bg-midGrey p-2 mb-6 text-darkGrey font-semibold'>
              <option value=''>Select Category</option>
              <option value=''>Medical</option>
              <option value=''>Insurance</option>
              <option value=''>Financial</option>
              <option value=''>Legal</option>
              <option value=''>Other</option>
            </select>
          </div>


          <label className='mb-2 text-lightGrey'>Document Description:</label>
          <input
          type='text'
          className='w-full bg-darkGrey p-2 rounded-full mb-6 text-[#fff] placeholder:text-lightGrey/50 focus:placeholder-opacity-0 focus:border-none focus:outline-none border-none '
          placeholder='Describe the document in as much detail as possible.'
        />
          <label className='mb-2 text-lightGrey'>Additional Notes:</label>
          <input
          type='text'
          className='w-full bg-darkGrey p-2 rounded-full italic mb-6 text-[#fff] placeholder:text-lightGrey/50 focus:placeholder-opacity-0 focus:border-none focus:outline-none border-none '
          placeholder='optional'
        />

        <div className='flex gap-4'>

          <button className='flex gap-2 bg-accent rounded-lg py-2 px-5 text-xl items-center shadow-md'>
            <FaSave size={24} />
            <p>Save</p>
          </button>
          
          <button className='flex gap-2 bg-grey rounded-lg py-2 px-5 text-lightGrey text-xl items-center shadow-md'>
            <MdCancel size={24} />
            <p>Cancel</p>
          </button>

        </div>
        </form>
    </main>
  )
}

export default AddFile
