'use client'
import React, { useEffect, useState, useContext } from 'react';
import { IoSearch } from "react-icons/io5";
import { BiRefresh, BiTimer } from 'react-icons/bi';
import DocumentTile from '@/components/DocumentTile';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useFetcher } from 'react-router-dom';
import UserContext from '../userStore';
import { useAppContext } from '@/app/context';

const Dashboard = () => {
  const { userData } = useAppContext();
  const router = useRouter();
  const [documents, setDocuments] = useState([]);
  const [documentsRetrieved, setDocumentsRetrieved] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const allParamPills = [
    {name: "Canterbury Health Laboritories", label: "CHL"}, 
    {name: "Gender Testing/DNA", label: "Gender Testing/DNA"},
    {name: "Insurance", label: "Insurance"},
    {name: "Commercial", label: "Commercial"},
    {name: "Misc. (Acute Demand, 24hr Surgery, Hepatitis Foundation)", label: "Misc."},
    {name: "Animal Tests (Gribbles)", label: "Animal Tests"},
    {name: "NZBS", label: "NZBS"},
    {name: "Endoscopes, Environmental Swabs, RCPA", label: "Endoscopes, Environmental Swabs, RCPA"},
    {name: "Other", label: "Other"},
  ]

  if (!userData) {
    console.log("User not logged in")
    router.push("/");
  }

  // filter options
  const [filterParams, setFilterParams] = useState([]);

  // Add filter params to array
  const addFilterParams = (category) => {
    if (filterParams.includes(category)) {
      const categoryIndex = filterParams.indexOf(category);
      if (categoryIndex > -1) {
        filterParams.splice(categoryIndex, 1);
      }
      setFilterParams(filterParams);
      getDocuments();
    } else {
      setFilterParams(prevParams => [...prevParams, category]);
    }
    console.log(filterParams)
  }

  const resetFilterParams = () => {
    setFilterParams([]);
    getDocuments();
    console.log("Documents retrieved: ", documentsRetrieved)
  }

  useEffect(() => {
    callAPI();
    // resetFilterParams();
    // getDocuments();
  }, [])

  useEffect(() => {
    getDocuments();
  }, [filterParams, searchQuery])

  const refreshData = () => {
    setRefreshing(true);
    getDocuments();
    setRefreshing(false);
  }
 
  // Retrieve all documents from database
  const callAPI = async () => {
    const result = await axios.get("http://localhost:3000/get-files");
    setDocumentsRetrieved(result.data.data);
    resetFilterParams();
    getDocuments();
  }

  // This function handles the search query and filter params
  const getDocuments = () => {
    const filteredDocuments = [];

    // If search query is true, filter documents by title:
    if (searchQuery) {
      for (let i = 0; i < documentsRetrieved.length; i++) {
        if (documentsRetrieved[i].title.toLowerCase().includes(searchQuery.toLowerCase())) {
          filteredDocuments.push(documentsRetrieved[i]);
        }
      }
    } else {
      // If no filter params, set documents to all documents
      if (filterParams.length == 0) {
        setDocuments(documentsRetrieved);
        return
      } else {
        // Two for 
        for (let i = 0; i < filterParams.length; i++) {
          for (let j = 0; j < documentsRetrieved.length; j++) {
            if (filterParams[i] == documentsRetrieved[j].category) {
              filteredDocuments.push(documentsRetrieved[j]);
            }
          }
        }
      }
    }
    setDocuments(filteredDocuments);
    console.log(filteredDocuments);
  }

  return (
    <main className='flex flex-col bg-darkGrey p-10 w-full'>
      <div className='flex bg-grey p-2 px-4 rounded-full shadow-md'>
        <input
          onInput={(e) => setSearchQuery(e.target.value)}
          type='text'
          className='w-full bg-grey text-[#fff] placeholder:text-lightGrey/50 focus:placeholder-opacity-0 focus:border-none focus:outline-none border-none '
          placeholder='Search for document name...'
        />
        <IoSearch size={24}/>
      </div>

      <div className='my-4 flex flex-wrap items-center gap-2'>
        <p className='text-white'>Filter:</p>


        <div onClick={resetFilterParams}
          className={filterParams.length==0 
            ? "bg-midGrey rounded-full px-2 py-1 flex items-center justify-center shadow-md text-darkGrey cursor-pointer" 
            : "bg-grey rounded-full px-2 py-1 flex items-center justify-center shadow-md text-lightGrey cursor-pointer"}>
          <p className="font-medium text-xs">All</p>
        </div>

        {/* ALL filter options */}
        {allParamPills.map((param, index) => (
          <div key={index} onClick={() => addFilterParams(param.name)}
            className={filterParams.includes(param.name)
            ? "bg-midGrey rounded-full px-2 py-1 flex items-center justify-center shadow-md text-darkGrey cursor-pointer" 
            : "bg-grey rounded-full px-2 py-1 flex items-center justify-center shadow-md text-lightGrey cursor-pointer"}>
            <p className="font-medium text-xs">{param.label}</p>
          </div>
        ))}

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
