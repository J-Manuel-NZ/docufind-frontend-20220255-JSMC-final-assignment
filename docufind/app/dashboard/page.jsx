'use client'
import React, { useEffect, useState } from 'react';
import { IoSearch } from "react-icons/io5";
import DocumentTile from '@/components/DocumentTile';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const router = useRouter();
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    getDocuments();
  }, [])

  const refreshData = () => {
    getDocuments();
  }


  const getDocuments = async () => {
    const result = await axios.get("http://localhost:3000/get-files");
    console.log(result.data.data);
    setDocuments(result.data.data);
  }

  return (
    <main className='flex flex-col bg-darkGrey p-10 w-full'>
      <div className='flex bg-grey p-2 px-4 rounded-full shadow-md'>
        <input
          type='text'
          className='w-full bg-grey text-[#fff] placeholder:text-lightGrey/50 focus:placeholder-opacity-0 focus:border-none focus:outline-none border-none '
          placeholder='Search for document name...'
        />
        <IoSearch size={24}/>
      </div>

      <div className='my-4'>
        categories
      </div>

      <div>
        {documents.map((document) => (
          <DocumentTile
            key={document.id}
            title={document.title}
            id={document.id}
            db_id={document._id}
            description={document.description}
            category={document.category}
            pdf={document.documentFile}
            notes={document.notes}
            refresh={refreshData}
          />
        ))}
      </div>
    </main>
  );
};

export default Dashboard
