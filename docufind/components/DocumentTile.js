'use client'
import React, { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { BiCheck } from 'react-icons/bi';
import axios from 'axios';
import { useAppContext } from '../app/context/index';



const DocumentTile = ({title, description, id, pdf, category, notes, db_id, refresh, testParams}) => {
  // Allow editing
  const [editing, setEditing] = useState(false);

  const {userData} = useAppContext();

  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newCategory, setNewCategory] = useState(category);
  const [newID, setNewID] = useState(id);




  // Edit document
  const updateDocument = async () => {
    try {
      await axios.put(`http://localhost:3000/update/${db_id}`, {title: newTitle, description: newDescription, category: newCategory, id: newID});
      setEditing(false);
      refresh();
    } catch (err) {
      console.log(err);
    }
  }


  const showPDF = (pdf) => {
    window.open(`http://localhost:3000/files/${pdf}`, '_blank');
  }
  const deleteDocument = async () => {
        await axios.delete(`http://localhost:3000/${db_id}/delete`)
        refresh();
    }
  

  return (
    <div className="flex flex-col gap-2 md:flex-row mb-4 w-full bg-grey rounded-lg shadow-md p-4 md:items-center justify-between">
      <div className="flex flex-col gap-1">
        <div className={editing ? "flex-row" : "" + " flex gap-4"}>
          {/* TITLE */}
          {editing ? (
            <>
              <label className="mb-2 text-lightGrey">Document Name:</label>
              <input
                className="w-full bg-darkGrey p-2 rounded-full mb-2 text-[#fff] placeholder:text-lightGrey/50 focus:placeholder-opacity-0 focus:border-none focus:outline-none border-none "
                placeholder={title}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </>
          ) : (
            <h1 className="text-xl font-medium">{title}</h1>
          )}

          {/* CATEGORY */}
          {editing ? (
            <>
              <label className="mb-2  text-lightGrey">Category:</label>
              <div>
                <select
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="rounded-full bg-midGrey p-2 mb-2 text-darkGrey font-semibold"
                >
                  <option value="">Select Category</option>
                  <option value="Canterbury Health Laboratories">
                    Canterbury Health Laboratories
                  </option>
                  <option value="Gender Testing/DNA">Gender Testing/DNA</option>
                  <option value="Insurance">Insurance</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Misc. (Acute Demand, 24hr Surgery, Hepatitis Foundation)">
                    Misc. (Acute Demand, 24hr Surgery, Hepatitis Foundation)
                  </option>
                  <option value="Animal Tests (Gribbles)">
                    Animal Tests (Gribbles)
                  </option>
                  <option value="NZBS">NZBS</option>
                  <option value="Endoscopes, Environmental Swabs, RCPA">
                    Endoscopes, Environmental Swabs, RCPA
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </>
          ) : (
            <div className="bg-darkGrey rounded-full px-2 py-1 flex items-center justify-center shadow-md">
              <p className="font-medium text-center text-lightGrey text-xs">{category}</p>
            </div>
          )}
        </div>
        {/* ID */}
        {editing ? (
          <>
            <label className="mb-2 text-lightGrey">Document ID:</label>
            <input
              className="w-full bg-darkGrey p-2 rounded-full mb-2 text-[#fff] placeholder:text-lightGrey/50 focus:placeholder-opacity-0 focus:border-none focus:outline-none border-none "
              placeholder={id}
              onChange={(e) => setNewID(e.target.value)}
            />
          </>
        ) : (
          <p className="text-sm font-light">ID: {id}</p>
        )}
        {/* DESCRIPTION */}
        {editing ? (
          <>
            <label className="mb-2 text-lightGrey">Description:</label>
            <input
              className="w-full bg-darkGrey p-2 rounded-full mb-2 text-[#fff] placeholder:text-lightGrey/50 focus:placeholder-opacity-0 focus:border-none focus:outline-none border-none "
              placeholder={description}
              onChange={(e) => setNewDescription(e.target.value)}
            />
          </>
        ) : (
          <p className="font-light">{description}</p>
        )}
      </div>
      <div className="flex gap-6 items-center w-full md:w-auto justify-between md:justify-normal">
        <div
          onClick={() => showPDF(pdf)}
          className="cursor-pointer flex items-center justify-center p-2 px-6 bg-accent text-white text-xl rounded-lg shadow-md"
        >
          View
        </div>
        {userData && userData.isAdmin || testParams && testParams.isAdmin ? 
        <div className='flex items-center gap-6'>
          {/* EDIT BUTTON */}
          {editing ? (
            <BiCheck
              size={36}
              color="#00FF00"
              className="cursor-pointer"
              onClick={updateDocument}
            />
          ) : (
            <MdOutlineEdit
              data-testid="edit-button"
              size={36}
              color="#F4F9E9"
              className="cursor-pointer"
              onClick={() => setEditing(true)}
            />
          )}
          <FaTrashAlt
            size={28}
            color="#FF3E3E"
            className="cursor-pointer"
            onClick={() => deleteDocument()}
          />
        </div>
        : null}
      </div>
    </div>
  );
}

export default DocumentTile
