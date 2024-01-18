
'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import { BiSolidDashboard, BiLogOutCircle } from "react-icons/bi";
import { CgAdd } from "react-icons/cg";
import { FaUserPlus } from "react-icons/fa6";
import Image from 'next/image';
import Logo from '/assets/docufind_logo.png';

const Navbar = () => {
    const pathname = usePathname();
    const handleSignOut = () => {
        // Handle sign out logic here
    };

    return (
        <div className="flex flex-col items-center bg-grey text-lightGrey justify-between max-w-[432px] w-full p-10">
            <Image src={Logo} height="auto" width="100%" alt='Docufind Logo' />

            <div className="main-links flex flex-col p-4 w-full">
                <ul className='flex flex-col gap-8 text-xl'>
                    <li className={
                        pathname === '/dashboard' ? 'bg-midGrey p-2 rounded-lg text-grey font-semibold' : 'p-2 font-semibold'
                    }>
                        <a href='/dashboard' 
                            className='flex justify-between items-center'>
                            <p>Dashboard</p>
                            <BiSolidDashboard size={24} />
                        </a>
                    </li>
                    <li className={
                        pathname === '/add-file' ? 'bg-midGrey p-2 rounded-lg text-grey font-semibold' : 'p-2 font-semibold'
                    }>
                        <div className='flex justify-between items-center'>
                            <a href="/add-file">Add New File</a>
                            <CgAdd size={24}/>
                        </div>
                    </li>
                    <li className={
                        pathname === '/add-user' ? 'bg-midGrey p-2 rounded-lg text-grey font-semibold' : 'p-2 font-semibold'
                    }>
                        <div className='flex justify-between items-center'>
                            <a href="/add-user">Add New User</a>
                            <FaUserPlus size={24}/>
                        </div>
                    </li>
                    <div className="h-[2px] bg-lightGrey my-4 w-full" />
                    <li>
                        <div className='flex gap-2 items-center text-base'>
                            <BiLogOutCircle size={24}/>  
                            <a href='/'>Sign Out</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div></div>
        </div>
    );
};

export default Navbar
