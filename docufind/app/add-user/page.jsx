'use client'

import React, { useState, useEffect, useContext } from 'react'
import { FaUserPlus } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { useRouter } from 'next/navigation';
import axios from 'axios';



const AddUser = () => {
  console.log("ADDUSER: " + JSON.stringify(user))
  const router = useRouter();
  const [name, setName] = useState("");
  const [id, setID] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState(false);

  const [existsMessage, setExistsMessage] = useState(false);



  const registerUser = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("id", id);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("admin", admin);
    console.log(name, id, email, password, admin);

    useEffect(() => {
      if (user.authenticated === false) {
        console.log("User not authenticated")
        router.push("/");
      }
    }, []);

    await axios.post("http://localhost:3000/auth/register", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {;
      console.log(response.data);
      if (response.data.status === 'User already exists') {
        setExistsMessage(true);
      } else {
        alert('User added successfully');
      }
    }).catch((error) => {console.log(error);})
  }

  return (
    <main className='flex flex-col bg-darkGrey p-10 w-full'>
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

          <button onClick={registerUser} className='flex gap-2 bg-accent rounded-lg py-2 px-5 text-xl items-center shadow-md'>
            <FaUserPlus size={24} />
            <p>Add User</p>
          </button>
          
          <button className='flex gap-2 bg-grey rounded-lg py-2 px-5 text-lightGrey text-xl items-center shadow-md'>
            <MdCancel size={24} />
            <p>Cancel</p>
          </button>

        </div>
        {existsMessage ? <p className='text-red/90 mt-4'>*Email is already in use!</p> : null}
        </form>
    </main>
  )
}

export default AddUser
