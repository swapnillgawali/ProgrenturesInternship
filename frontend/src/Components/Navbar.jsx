import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import logo from './logo.png';

function Navbar(){
    return <>
    <header className="bg-white">
  <div className="mx-auto shadow-md max-w-screen-l px-4 sm:px-6 lg:px-8 py-1">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12">
        <a className="block text-teal-600" href="#">
        </a>
        <img class="h-12 cursor-pointer"  src={logo} alt="" />
      </div>

      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="/">Home</a>
            </li>
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="/AboutUs">About Progrentures</a>
            </li>
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="/ContactUs">Contact Us</a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <a
              className="rounded-xl  bg-[#34344F] px-8 py-2.5 text-sm font-medium text-white shadow-sm"
              href="/LoginPage"
            >
              PRS Login
            </a>

            <div className="hidden sm:flex">
              <a
                className="flex justify-center items-center gap-1 rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-[#7676AA] border-2"
                href="/StudentRegister"
              >
                <span>Register for free</span>
                <BsArrowRight />  
              </a>
            </div>
          </div>

          <div className="block md:hidden">
            <button
              className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
    </>
}

export default Navbar;