import React from "react";
import { IoMdMailOpen } from "react-icons/io";
import { IoBarChart } from "react-icons/io5";
import { LuRepeat2 } from "react-icons/lu";
import { TbReportSearch } from "react-icons/tb";
function Prepareforsuccess() {
  return (
    <>
      <div>
        <div class="flex flex-col  pt-20 justify-center items-center">
          <div>
            <h1 class="text-center text-5xl font-Outfit font-bold text-[#2E2C2D]">
              Prepare for Sucess
            </h1>
            <p class="text-center pt-5 font-Poppins text-[#8A888A]">
              Get Ready for the Internship Test Challenge
            </p>
          </div>
          <div class="pt-15 flex lg:flex-row sm:px-6 flex-col gap-10 justify-center items-center lg:gap-25">
            <div class="flex flex-col justify-center items-center gap-5">
              <div class="flex flex-col h-25 w-25 bg-[#34344F] rounded-full items-center justify-center">
                <h1 class="text-4xl font-Instrument Sans text-white font-semibold">
                  1
                </h1>
              </div>
              <h1 class="text-2xl font-bold">Register</h1>
              <p class="text-center">
                Elevate Your Skills: Conquer the <br /> Internship Test
              </p>
            </div>
            <div class="flex flex-col justify-center items-center gap-5">
              <div class="flex flex-col h-25 w-25 bg-[#34344F] rounded-full items-center justify-center">
                <h1 class="text-4xl font-Instrument Sans text-white font-semibold">
                  2
                </h1>
              </div>
              <h1 class="text-2xl font-bold">Select Plan </h1>
              <p class="text-center">
                Embrace the Internship Test: <br /> Unlock New Opportunities
              </p>
            </div>
            <div class="flex flex-col justify-center items-center gap-5">
              <div class="flex flex-col h-25 w-25 bg-[#34344F] rounded-full items-center justify-center">
                <h1 class="text-4xl font-Instrument Sans text-white font-semibold">
                  3
                </h1>
              </div>
              <h1 class="text-2xl font-bold">Schedule Test/Interview</h1>
              <p class="text-center">
                Unlock Your Future: Conquer the <br /> Internship Test
              </p>
            </div>
            <div class="flex flex-col justify-center items-center gap-5">
              <div class="flex flex-col h-25 w-25 bg-[#34344F] rounded-full items-center justify-center">
                <h1 class="text-4xl font-Instrument Sans text-white font-semibold">
                  4
                </h1>
              </div>
              <h1 class="text-2xl font-bold">Get Guaranteed Internship</h1>
              <p class="text-center">
                Unlock Your Future: Conquer the <br /> Internship Test
              </p>
            </div>
          </div>
          <div class="pt-20 py-20">
            <a
              href=""
              class="bg-[#34344F] text-white px-10 py-2.5 rounded-full font-semibold"
            >
              Apply Now
            </a>
          </div>
        </div>

        <div class="flex flex-col justify-center items-center bg-[#34344F] py-10">
          <h1 class="text-white text-4xl">
            How Will Progrentures Internship Help You?
          </h1>
          <div>
            <div class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center py-10">
              <div class="flex flex-col gap-3">
                <div class="mx-auto w-12 h-12 flex items-center justify-center bg-[#D4EAF6] rounded-lg mb-3">
                  <IoMdMailOpen class="text-3xl text-[#31A0FE]"></IoMdMailOpen>
                </div>
                <h3 class="font-semibold mb-1 text-white">Task Management</h3>
                <p class="text-sm text-gray-300">
                  Industry-Relevant Skills: Hands-on projects to sharpen your
                  expertise.
                </p>
              </div>

              <div class="flex flex-col gap-3">
                <div class="mx-auto w-12 h-12 flex items-center justify-center bg-[#D6F1CC] rounded-lg mb-3">
                  <IoBarChart class="text-3xl text-[#23856D]"></IoBarChart>
                </div>
                <h3 class="font-semibold mb-1 text-white">
                  Team Collaboration
                </h3>
                <p class="text-sm text-gray-300">
                  Efficiently collaborate: Work on live projects like a
                  professional and communicate with your team.
                </p>
              </div>

              <div class="flex flex-col gap-3">
                <div class="mx-auto w-12 h-12 flex items-center justify-center bg-[#F3DCD5] rounded-lg mb-3">
                  <LuRepeat2 class="text-3xl text-[#EC5C2E]"></LuRepeat2>
                </div>
                <h3 class="font-semibold mb-1 text-white">Project Tracking</h3>
                <p class="text-sm text-gray-300">
                  Career Acceleration: Stand out with strong credentials.
                </p>
              </div>

              <div class="flex flex-col gap-3"> 
                <div class="mx-auto w-12 h-12 flex items-center justify-center bg-[#D4EAF6] rounded-lg mb-3">
                  <TbReportSearch class="text-3xl text-[#31A0FE]"></TbReportSearch>
                </div>
                <h3 class="font-semibold mb-1 text-white">
                  Reports and Analytics
                </h3>
                <p class="text-sm text-gray-300">
                  Exclusive Networking: Connect with industry experts and peers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Prepareforsuccess;
