'use client'

import React, { useState, useEffect, useContext } from 'react'
import { FaUserPlus } from "react-icons/fa6";
import Image from 'next/image';
import { MdCancel } from "react-icons/md";
import { MdOutlineDownloading } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useAppContext } from '@/app/context';
import Illustration from '../../assets/illustration.png'

import nodeServerRoute from '../localServerConfig';



const AddUser = () => {
  const { userData } = useAppContext();
  const router = useRouter();
  const [name, setName] = useState("Molly James");
  const [id, setID] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState(false);
  const [saving, setSaving] = useState(false);

  const [userAddedMessage, setUserAddedMessage] = useState(false);

  const [existsMessage, setExistsMessage] = useState(false);

  if (!userData) {
    console.log("User not logged in")
    router.push("/");
  }


  const registerUser = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("id", id);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("admin", admin);
    console.log(name, id, email, password, admin);

    await axios.post(`${nodeServerRoute}/auth/register`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {;
      console.log(response.data);
      if (response.data.status === 'User already exists') {
        setExistsMessage(true);
      } else {
        setUserAddedMessage(true);
      }
    }).catch((error) => {console.log(error);})
  }

  return (
    <main className='flex flex-col bg-darkGrey pt-16 md:pt-10 h-screen p-4 md:p-10 w-full'>
      {userAddedMessage 
      ? 
      <div className='flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 md:justify-between h-full'>
        <div className='text-center'>
          <h3 className='font-light text-4xl mb-16'>Successfully added 
          <span className='text-accent'> {name}</span>!</h3> 
          <p className='font-light text-3xl'>They may now log in to view your documents.</p> 
        </div>
        <Image src={Illustration} alt="Illustration of a person" width="100%" height="auto" />
      </div>
      : 
        <form className='flex flex-col'>

          <label className='mb-2 text-lightGrey'>Employee Name:</label>
          <input
          onChange={(e) => setName(e.target.value)}
          type='text'
          className='w-full bg-darkGrey p-2 rounded-full mb-6 text-[#fff] placeholder:text-lightGrey/50 focus:placeholder-opacity-0 focus:border-none focus:outline-none border-none '
          placeholder='e.g. Anna Smith'
        />
          <label className='mb-2 text-lightGrey'>Employee ID:</label>
          <input
          onChange={(e) => setID(e.target.value)}
          type='text'
          className='w-full bg-darkGrey p-2 rounded-full italic mb-6 text-[#fff] placeholder:text-lightGrey/50 focus:placeholder-opacity-0 focus:border-none focus:outline-none border-none '
          placeholder='optional'
        />
          <label className='mb-2 text-lightGrey'>Email:</label>
          <input
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          className='w-full bg-darkGrey p-2 rounded-full mb-6 text-[#fff] placeholder:text-lightGrey/50 focus:placeholder-opacity-0 focus:border-none focus:outline-none border-none '
          placeholder='e.g. example@work.com'
        />

          <label className='mb-2 text-lightGrey'>Password:</label>
          <input
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          security='true'
          className='w-full bg-darkGrey p-2 rounded-full mb-6 text-[#fff] placeholder:text-lightGrey/50 focus:placeholder-opacity-0 focus:border-none focus:outline-none border-none '
          placeholder='***********'
        />

          <div className='flex items-center gap-2 mb-6'>
            <label className='text-lightGrey'>Admin:</label>
            <select onChange={(e) => setAdmin(e.target.value)} className='rounded-full bg-midGrey p-2 text-darkGrey font-semibold'>
              <option value={false}>No</option>
              <option value={true}>Yes</option>
            </select>
          </div>
        

        <div className='flex gap-4'>
          {saving
          ? <button onClick={registerUser} className='flex gap-2 bg-accent/50 rounded-lg py-2 px-5 text-xl items-center shadow-md'>
            <MdOutlineDownloading size={24} />
            <p className='italic opacity-50'>Adding user...</p>
          </button>
          : <button onClick={registerUser} className='flex gap-2 bg-accent rounded-lg py-2 px-5 text-xl items-center shadow-md border border-accent transition-all hover:border-lightGrey hover:border'>
            <FaUserPlus size={24} />
            <p>Add User</p>
          </button>}
          
          <button className='flex gap-2 bg-grey rounded-lg py-2 px-5 text-lightGrey text-xl items-center shadow-md border border-grey transition-all hover:bg-midGrey/50'>
            <MdCancel size={24} />
            <p>Cancel</p>
          </button>

        </div>
        {existsMessage ? <p className='text-red/90 mt-4'>*Email is already in use!</p> : null}
        </form>
        }
    </main>
  )
}

export default AddUser
