'use client'
import { useState } from 'react'
import Image from 'next/image'
import Logo from '../assets/docufind_logo.png'
import Illustration from '../assets/illustration.png'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { setUser } from './userStore'

import { useAppContext } from '@/app/context';

export default function Home() {
  const { userData, updateUserData } = useAppContext();
  const router = useRouter();
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const loginDetails = {password, email}

  // Show user not found message
  const [userNotFound, setUserNotFound] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:3000/auth/sign-in", loginDetails, {
      headers: {
        "Content-Type": "application/json",
      },
      }).then((response) => {
        const userDetails = response.data.data;
        console.log("User logged in: " + JSON.stringify(userDetails))
        if (response.data.status === 'User authenticated') {
          updateUserData(userDetails);
          router.push('/dashboard');
        } else {
          setUserNotFound(true);
        }
      console.log(response);
      }).catch((error) => {console.log(error);})
    }

  return (
    <main className="flex items-center justify-center bg-darkGrey w-full h-full p-10">
      <div className="flex flex-col items-center justify-center md:flex-row">
        <div className="flex flex-col items-center gap-16">
          <Image src={Logo} alt="Docufind Logo" width="100%" height="auto" />
          {/* SIGN IN FORM */}
          <form className="w-full sm:w-1/2 mb-10 md:mb-0" method='POST'>

            <label className="mb-2 text-lightGrey" htmlFor='email'>email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text" id='email' name='email' required 
              className="w-full bg-darkGrey p-2 rounded-full mb-6 text-[#fff] placeholder:text-lightGrey/50 focus:placeholder-opacity-0 focus:border-none focus:outline-none border-none "
              placeholder="e.g. Anna Smith"
            />

            <label className="mb-2 text-lightGrey" htmlFor='password'>password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password" id='password' name='password' required security="true"
              className="w-full bg-darkGrey p-2 rounded-full mb-6 text-[#fff] placeholder:text-lightGrey/50 focus:placeholder-opacity-0 focus:border-none focus:outline-none border-none "
              placeholder="********"
            />

            <button onClick={handleSubmit}  className="flex gap-2 bg-accent rounded-full min-w-40 justify-center py-2 w-full text-xl items-center shadow-md">
              <p>Sign In</p>
            </button>
          </form>
          {/* ____________________________________ */}

          {/* User Not found message */}
          {userNotFound 
            ? <p className="text-center text-red/90 font-light">User not found</p>
            : null}

          <p className="text-center mt-4 font-light">
            to create an account,
            <br />
            please contact your IT department
          </p>
        </div>
        <Image
          src={Illustration}
          alt="Docufind Illustration"
          className="md:w-1/2"
        />
      </div>
    </main>
  );
}
