import Image from 'next/image'
import RootLayout from './layout'
import Logo from '../assets/docufind_logo.png'
import Illustration from '../assets/illustration.png'

export default function Home() {
  return (
    <main className="flex items-center justify-center bg-darkGrey w-full h-full p-10">
      <div className="flex flex-col items-center justify-center md:flex-row">
        <div className="flex flex-col items-center gap-16">
          <Image src={Logo} alt="Docufind Logo" width="100%" height="auto" />
          <div className="w-full sm:w-1/2 mb-10 md:mb-0">
            <label className="mb-2 text-lightGrey">email</label>
            <input
              type="text"
              className="w-full bg-darkGrey p-2 rounded-full mb-6 text-[#fff] placeholder:text-lightGrey/50 focus:placeholder-opacity-0 focus:border-none focus:outline-none border-none "
              placeholder="e.g. Anna Smith"
            />
            <label className="mb-2 text-lightGrey">password</label>
            <input
              type="password"
              security="true"
              className="w-full bg-darkGrey p-2 rounded-full mb-6 text-[#fff] placeholder:text-lightGrey/50 focus:placeholder-opacity-0 focus:border-none focus:outline-none border-none "
              placeholder="********"
            />

            <a href='/dashboard'>
              <button className="flex gap-2 bg-accent rounded-full min-w-40 justify-center py-2 w-full text-xl items-center shadow-md">
                <p>Sign In</p>
              </button>
            </a>

            <p className="text-center mt-4 font-light">
              to create an account,
              <br />
              please contact your IT department
            </p>
          </div>
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
