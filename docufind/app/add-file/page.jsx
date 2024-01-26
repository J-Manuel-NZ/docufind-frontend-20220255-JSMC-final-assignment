'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';

import { FaSave, FaFileUpload } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { MdOutlineDownloading } from 'react-icons/md';
import { useAppContext } from '@/app/context';

import nodeServerRoute from '../localServerConfig';

const AddFile = () => {
  const {userData} = useAppContext();
  const router = useRouter();
  const [file, setFile] = useState("Choose File");
  const [title, setTitle] = useState("");
  const [id, setID] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState("");
  const [saving, setSaving] = useState(false);

  
  if (!userData) {
    console.log("User not logged in")
    router.push("/");
  }

  const submitDocument = async(e) => {
    setSaving(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("id", id);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("notes", notes);
    console.log(file, title, category, description, notes);

    const result = await axios.post(`${nodeServerRoute}/upload-files`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((response) => {;
    console.log(response);
    router.push("/dashboard");
    }).catch((error) => {console.log(error);})
  }

 

  useEffect(() => {
    console.log("Category: ", category);
  }, [category]);

  return (
    <main className='flex flex-col bg-darkGrey pt-16 md:pt-10 h-screen p-4 md:p-10 w-full'>
        <form className='flex flex-col' onSubmit={submitDocument}>

          {/* NAME */}
          <label className='mb-2 text-lightGrey'>Document Name:</label>
          <input
          onChange={(e) => setTitle(e.target.value)}
          required
          type='text'
          className='w-full bg-darkGrey p-2 rounded-full mb-6 text-[#fff] placeholder:text-lightGrey/50 focus:placeholder-opacity-0 focus:border-none focus:outline-none border-none '
          placeholder='e.g. 1023CDCLD Biopsy Report'
        />
          {/* DOC ID */}
          <label className='mb-2 text-lightGrey'>Document ID:</label>
          <input
          onChange={(e) => setID(e.target.value)}
          required
          type='text'
          className='w-full bg-darkGrey p-2 rounded-full mb-6 text-[#fff] placeholder:text-lightGrey/50 focus:placeholder-opacity-0 focus:border-none focus:outline-none border-none '
          placeholder='e.g. 1023CDCLD Biopsy Report'
        />

          {/* FILE */}
          <label className='mb-2 text-lightGrey '>Upload File:</label>
          <input 
          onChange={(e) => setFile(e.target.files[0])}
            required 
            type='file' 
            className='mb-6 cursor-pointer' 
            accept='application/pdf' 
          />

          {/* CATEGORY */}
          <label className='mb-2 text-lightGrey'>Category:</label>
          <div>
            <select 
              data-testid='category-dropdown'
              onChange={(e) => setCategory(e.target.value)}
              className='rounded-full cursor-pointer transition-all bg-midGrey p-2 mb-6 w-full max-w-[432px] text-darkGrey font-semibold'
            >
              <option value="">Select Category</option>
              <option value="Canterbury Health Laboratories">Canterbury Health Laboratories</option>
              <option value="Gender Testing/DNA">Gender Testing/DNA</option>
              <option value="Insurance">Insurance</option>
              <option value="Commercial">Commercial</option>
              <option value="Misc. (Acute Demand, 24hr Surgery, Hepatitis Foundation)">Misc. (Acute Demand, 24hr Surgery, Hepatitis Foundation)</option>
              <option value="Animal Tests (Gribbles)">Animal Tests (Gribbles)</option>
              <option value="NZBS">NZBS</option>
              <option value="Endoscopes, Environmental Swabs, RCPA">Endoscopes, Environmental Swabs, RCPA</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* DESCRIPTION */}
          <label className='mb-2 text-lightGrey'>Document Description:</label>
          <input
          onChange={(e) => setDescription(e.target.value)}
          required
          type='text'
          className='flex bg-darkGrey p-2 rounded-full mb-6 text-[#fff] placeholder:text-lightGrey/50 focus:placeholder-opacity-0 focus:border-none focus:outline-none border-none '
          placeholder='Describe the document in as much detail as possible.'
        />

          {/* NOTES */}
          <label className='mb-2 text-lightGrey'>Additional Notes:</label>
          <input
          onChange={(e) => setNotes(e.target.value)}
          type='text'
          className='w-full bg-darkGrey p-2 rounded-full italic mb-6 text-[#fff] placeholder:text-lightGrey/50 focus:placeholder-opacity-0 focus:border-none focus:outline-none border-none '
          placeholder='optional'
        />

        <div className='flex gap-4'>
          {saving
          ? <button className='flex gap-2 bg-accent/50 rounded-lg py-2 px-5 text-xl items-center shadow-md'>
            <MdOutlineDownloading size={24} />
            <p className='italic opacity-50'>Saving...</p>
          </button>
          : <button className='flex gap-2 bg-accent rounded-lg py-2 px-5 text-xl items-center shadow-md border border-accent transition-all hover:border-lightGrey hover:border'>
            <FaSave size={24} />
            <p>Save</p>
          </button>}
          
          <button className='flex gap-2 bg-grey rounded-lg py-2 px-5 text-lightGrey text-xl items-center shadow-md border border-grey hover:border-grey/50 hover:bg-midGrey/50 transition-all'>
            <MdCancel size={24} />
            <p>Cancel</p>
          </button>

        </div>
        </form>
    </main>
  )
}

export default AddFile
