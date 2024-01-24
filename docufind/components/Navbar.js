
'use client'

import React, {useContext, useEffect} from 'react';
import { usePathname } from 'next/navigation';
import { BiSolidDashboard, BiLogOutCircle } from "react-icons/bi";
import { CgAdd } from "react-icons/cg";
import { FaUserPlus } from "react-icons/fa6";
import Image from 'next/image';
import Logo from '/assets/docufind_logo.png';
import { useRouter } from 'next/navigation';
import { useAppContext } from '../app/context/index';


const Navbar = () => {
    const {userData, updateUserData } = useAppContext();
    console.log(userData)
    const router = useRouter();
    const pathname = usePathname();
    
    const handleSignOut = () => {
      updateUserData({});
      router.push("/");
    };

    return (
      <div className="flex flex-col items-center bg-grey text-lightGrey justify-between max-w-[432px] w-full p-10">
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
              <a
                href="/dashboard"
                className="flex justify-between items-center"
              >
                <p>Dashboard</p>
                <BiSolidDashboard size={24} />
              </a>
            </li>
            {userData.isAdmin ? (
              <>
                <li
                  className={
                    pathname === "/add-file"
                      ? "bg-midGrey p-2 rounded-lg text-grey font-semibold"
                      : "p-2 font-semibold"
                  }
                >
                  <div className="flex justify-between items-center">
                    <a href="/add-file">Add New File</a>
                    <CgAdd size={24} />
                  </div>
                </li>
                <li
                  className={
                    pathname === "/add-user"
                      ? "bg-midGrey p-2 rounded-lg text-grey font-semibold"
                      : "p-2 font-semibold"
                  }
                >
                  <div className="flex justify-between items-center">
                    <a href="/add-user">Add New User</a>
                    <FaUserPlus size={24} />
                  </div>
                </li>
              </>
            ) : null}
            <div className="h-[2px] bg-lightGrey my-4 w-full" />
            <li>
              <div onClick={handleSignOut} className="flex gap-2 items-center text-base cursor-pointer">
                <BiLogOutCircle size={24} />
                <p >Sign Out</p>
              </div>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    );
};

export default Navbar
