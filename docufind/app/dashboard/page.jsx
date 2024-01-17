import React from 'react';
import { IoSearch } from "react-icons/io5";
import DocumentTile from '@/components/DocumentTile';

const documents = [
  {
    id: 1,
    title: "Medical History Form",
    pdfUrl: "https://example.com/medical-history.pdf",
    description: "Form to collect patient's medical history information."
  },
  {
    id: 2,
    title: "Consent Form",
    pdfUrl: "https://example.com/consent-form.pdf",
    description: "Form to obtain patient's consent for medical procedures."
  },
  {
    id: 3,
    title: "Insurance Information Form",
    pdfUrl: "https://example.com/insurance-info.pdf",
    description: "Form to collect patient's insurance information."
  },
  {
    id: 4,
    title: "Release of Information Form",
    pdfUrl: "https://example.com/release-of-info.pdf",
    description: "Form to authorize the release of patient's medical records."
  },
  {
    id: 5,
    title: "HIPAA Privacy Notice",
    pdfUrl: "https://example.com/hipaa-privacy-notice.pdf",
    description: "Notice explaining patient's rights regarding the privacy of their health information."
  }
];

const Dashboard = () => {
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
            description={document.description}
            pdfUrl={document.pdfUrl}
            id={document.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Dashboard
