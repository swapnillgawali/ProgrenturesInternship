import React from "react";
import Navbar from "./Navbar";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import Footer from "./Footer";

function ContactUs() {
  const servicesItems = [
    "Mobile development",
    "UI/UX Design",
    "web development",
    "SEO",
  ];
  return (
    <>
      <Navbar></Navbar>

      <div class="mx-auto  max-w-screen-l bg-[#EFEDF5]">
        <div class="flex flex-col items-center py-20">
          <h1 class="font-Poppins font-bold md:text-5xl">Contact Us</h1>
          <p class="text-[#717171] font-Poppins md:text-xl py-5">
            Any question or remarks? Just write us a message!
          </p>
        </div>

        <div class="grid grid-cols-2 px-5 pb-20 lg:px-20">
          <div class=" flex flex-col justify-between bg-[#7676AA] px-10 rounded-l-2xl">
            <div>
                <h1 class="text-white text-4xl lg:pt-10 font-Poppins font-bold">Contact Information</h1>
                <p class="text-[#C9C9C9]  font-Poppins text-xl pt-5">Say something to start a live chat!</p>
            </div>
            <div class="flex flex-col gap-3"> 
                <div class="text-white flex flex-row gap-3 items-center">
                <FaPhoneAlt class="text-white text-xl"></FaPhoneAlt>
                <p>+1012 3456 789</p>
                </div>
                <div class="text-white flex flex-row gap-3 items-center">
                    <IoIosMailOpen class="text-white text-2xl"></IoIosMailOpen>
                    <p>demo@gmail.com</p>
                </div>
                <div class="text-white flex flex-row gap-3 items-center">
                    <FaLocationDot class="text-white text-2xl"></FaLocationDot>
                    <p>Sr.No. 394/2, Plot No 30A-30B Ashirwad Nagar,Alasshegaon
                    Buldhana Shegaon - 444203</p>
                </div>
            </div>
            <div class="flex - flex-row gap-5 pb-10">
                <FaLinkedin class="text-white text-3xl"></FaLinkedin>
                <FaSquareXTwitter class="text-white text-3xl"></FaSquareXTwitter>
                <FaInstagramSquare class="text-white text-3xl"></FaInstagramSquare>
                <FaFacebook class="text-white text-3xl"></FaFacebook>
            </div>
          </div>
          <div class="bg-white px-10 rounded-r-2xl">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5 mt-12 lg:pb-12"
            >
              <div>
                <label className="font-medium">Full name</label>
                <input
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Phone number</label>
                <div className="relative mt-2">
                  <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                    <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                      <option>US</option>
                      <option>ES</option>
                      <option>MR</option>
                    </select>
                  </div>
                  <input
                    type="number"
                    placeholder="+1 (555) 000-000"
                    required
                    className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="font-medium">Services</label>
                <ul className="grid gap-y-2 gap-x-6 flex-wrap grid-cols-2 mt-3">
                  {servicesItems.map((item, idx) => (
                    <li key={idx} className="flex gap-x-3 text-sm">
                      <div>
                        <input
                          id={`service-${idx}`}
                          type="checkbox"
                          className="checkbox-item peer hidden"
                        />
                        <label
                          htmlFor={`service-${idx}`}
                          className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                        ></label>
                      </div>
                      <label
                        htmlFor={`service-${idx}`}
                        className="cursor-pointer"
                      >
                        {item}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <label className="font-medium">Message</label>
                <textarea
                  required
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                ></textarea>
              </div>
              <button className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default ContactUs;
