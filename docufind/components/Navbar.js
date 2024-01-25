
'use client'

import React, {useState, useContext, useEffect} from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BiSolidDashboard, BiLogOutCircle, BiMenu, BiXCircle } from "react-icons/bi";
import { CgAdd } from "react-icons/cg";
import { FaUserPlus } from "react-icons/fa6";
import Image from 'next/image';
import Logo from '/assets/docufind_logo.png';
import { useRouter } from 'next/navigation';
import { useAppContext } from '../app/context/index';


const Navbar = ({testParams}) => {
    const {userData, updateUserData } = useAppContext();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
      // Will stop scrolling the element beneath the menu when open on the dashboard
      if (isMenuOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
  
      // Clean up function
      return () => {
        document.body.style.overflow = 'auto'
      }
    }, [isMenuOpen])

    // console.log(userData)
    const router = useRouter();
    const pathname = usePathname();
    
    const handleSignOut = () => {
      testParams = {};
      updateUserData({});
      router.push("/");
      setIsMenuOpen(false);
    };

    return (
      <>
      {/* // Mobile Menu */}
      {isMenuOpen 
      ? 
      <div className="absolute h-full flex flex-col items-center bg-grey text-lightGrey justify-between w-full p-10 pt-12">
        
          <BiXCircle size={36} onClick={() => setIsMenuOpen(false)} className='absolute right-2 top-3 cursor-pointer' />
          <Image src={Logo} height="auto" width="100%" alt="Docufind Logo" priority />
        

        <div className="main-links flex flex-col p-4 w-full">
          <ul className="flex flex-col gap-8 text-xl">
            <li
              className={
                pathname === "/dashboard"
                  ? "bg-midGrey p-2 rounded-lg text-grey font-semibold"
                  : "p-2 font-semibold"
              }
            >
              <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>
              <div
                className="flex justify-between items-center"
              >
                <p>Dashboard</p>
                <BiSolidDashboard size={24} />
              </div>
                </Link>
            </li>
            {userData && userData.isAdmin || testParams && testParams.isAdmin ? (
              <>
                <li
                  className={
                    pathname === "/add-file"
                      ? "bg-midGrey p-2 rounded-lg text-grey font-semibold"
                      : "p-2 font-semibold"
                  }
                >
                  <Link href='/add-file' data-testid='addNewFileButton' onClick={() => setIsMenuOpen(false)} >
                  <div className="flex justify-between items-center">
                    <p >Add New File</p>
                    <CgAdd size={24} />
                  </div>
                  </Link>
                </li>
                <li
                  className={
                    pathname === "/add-user"
                      ? "bg-midGrey p-2 rounded-lg text-grey font-semibold"
                      : "p-2 font-semibold"
                  }
                >

                  <Link href="/add-user" onClick={() => setIsMenuOpen(false)} >
                    <div className="flex justify-between items-center">
                    <p >Add New User</p>
                    <FaUserPlus size={24} />
                    </div>
                  </Link>
                </li>
              </>
            ) : null}
            <div className="h-[2px] bg-lightGrey my-4 w-full" />
            <li>
    
              <div onClick={handleSignOut} data-testid='signOutButton' className="flex gap-2 items-center text-base cursor-pointer">
                <BiLogOutCircle size={24} />
                <p >Sign Out</p>
              </div>
        
            </li>
          </ul>
        </div>
        <div></div>
      </div>
      : 
      <div onClick={() => setIsMenuOpen(true)}
      className='absolute md:hidden w-full p-2 px-2 bg-darkGrey'>
        <BiMenu size={40}/>
      </div>}

      {/* // Desktop Menu */}
      <div className="hidden md:flex flex-col items-center bg-grey text-lightGrey justify-between max-w-[432px] w-full p-10">
        <Image src={Logo} height="auto" width="100%" alt="Docufind Logo" priority />

        <div className="main-links flex flex-col p-4 w-full">
          <ul className="flex flex-col gap-8 text-xl">
            <li
              className={
                pathname === "/dashboard"
                  ? "bg-midGrey p-2 rounded-lg text-grey font-semibold"
                  : "p-2 font-semibold"
              }
            >
              <Link href="/dashboard">
              <div
                className="flex justify-between items-center"
              >
                <p>Dashboard</p>
                <BiSolidDashboard size={24} />
              </div>
                </Link>
            </li>
            {userData && userData.isAdmin || testParams && testParams.isAdmin ? (
              <>
                <li
                  className={
                    pathname === "/add-file"
                      ? "bg-midGrey p-2 rounded-lg text-grey font-semibold"
                      : "p-2 font-semibold"
                  }
                >
                  <Link href='/add-file' data-testid='addNewFileButton' >
                  <div className="flex justify-between items-center">
                    <p >Add New File</p>
                    <CgAdd size={24} />
                  </div>
                  </Link>
                </li>
                <li
                  className={
                    pathname === "/add-user"
                      ? "bg-midGrey p-2 rounded-lg text-grey font-semibold"
                      : "p-2 font-semibold"
                  }
                >

                  <Link href="/add-user" >
                    <div className="flex justify-between items-center">
                    <p >Add New User</p>
                    <FaUserPlus size={24} />
                    </div>
                  </Link>
                </li>
              </>
            ) : null}
            <div className="h-[2px] bg-lightGrey my-4 w-full" />
            <li>
    
              <div onClick={handleSignOut} data-testid='signOutButton' className="flex gap-2 items-center text-base cursor-pointer">
                <BiLogOutCircle size={24} />
                <p >Sign Out</p>
              </div>
        
            </li>
          </ul>
        </div>
        <div></div>
      </div>
      </>
    );
};

export default Navbar
