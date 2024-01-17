import React from 'react'
import { FaUserPlus } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";


const AddUser = () => {
  return (
    <main className='flex flex-col bg-darkGrey p-10 w-full'>
        <form className='flex flex-col'>

          <label className='mb-2 text-lightGrey'>Employee Name:</label>
          <input
          type='text'
          className='w-full bg-darkGrey p-2 rounded-full mb-6 text-[#fff] placeholder:text-lightGrey/50 focus:placeholder-opacity-0 focus:border-none focus:outline-none border-none '
          placeholder='e.g. Anna Smith'
        />
          <label className='mb-2 text-lightGrey'>Employee ID:</label>
          <input
          type='text'
          className='w-full bg-darkGrey p-2 rounded-full italic mb-6 text-[#fff] placeholder:text-lightGrey/50 focus:placeholder-opacity-0 focus:border-none focus:outline-none border-none '
          placeholder='optional'
        />
          <label className='mb-2 text-lightGrey'>Email:</label>
          <input
          type='email'
          className='w-full bg-darkGrey p-2 rounded-full mb-6 text-[#fff] placeholder:text-lightGrey/50 focus:placeholder-opacity-0 focus:border-none focus:outline-none border-none '
          placeholder='e.g. example@work.com'
        />

          <label className='mb-2 text-lightGrey'>Password:</label>
          <input
          type='password'
          security='true'
          className='w-full bg-darkGrey p-2 rounded-full mb-6 text-[#fff] placeholder:text-lightGrey/50 focus:placeholder-opacity-0 focus:border-none focus:outline-none border-none '
          placeholder='***********'
        />
          <label className='mb-2 text-lightGrey'>Confirm Password:</label>
          <input
          type='password'
          security='true'
          className='w-full bg-darkGrey p-2 rounded-full mb-6 text-[#fff] placeholder:text-lightGrey/50 focus:placeholder-opacity-0 focus:border-none focus:outline-none border-none '
          placeholder='***********'
        />

          <div className='flex items-center gap-2 mb-6'>
            <label className='' text-lightGrey>Admin:</label>
            <select className='rounded-full bg-midGrey p-2 text-darkGrey font-semibold'>
              <option value=''>No</option>
              <option value=''>Yes</option>
            </select>
          </div>
        

        <div className='flex gap-4'>

          <button className='flex gap-2 bg-accent rounded-lg py-2 px-5 text-xl items-center shadow-md'>
            <FaUserPlus size={24} />
            <p>Add User</p>
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

export default AddUser
