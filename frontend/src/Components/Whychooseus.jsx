import React from "react";
import pexelscottonbro3201696 from "./pexels-cottonbro-3201696.jpg";

function Whychooseus() {
  return (
    <>
      <div class="grid bg-[#DDE1F1] grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 px-10 py-25">
        <div class=" lg:h-150 rounded-lg bg-white  overflow-hidden">
          <img
            class="rounded-lg h-full w-full object-cover"
            src={pexelscottonbro3201696}
            alt=""
          />
        </div>
        <div class=" flex-col justify-center items-center rounded-lg bg-white lg:col-span-2">
          <h1 class="text-center lg:text-4xl lg:leading-20 font-bold pt-10 sm: text-xl ">
            Why choose Progrentures for Internship?
          </h1>

          <div class=" flex flex-col gap-3">
            <div class="flex flex-col md:flex-row justify-center items-center sm:px-6 gap-4 md:text-2xl pt-10">
              <div class="bg-[#34344F] text-white py-3 text-center rounded-4xl px-6 md:px-0 flex-1">
                Expert-Led Training
              </div>
              <div class="bg-[#34344F] text-white py-3 text-center rounded-4xl px-6 md:px-0 flex-1">
                Project From Zero
              </div>
            </div>

            <div class="flex flex-col md:flex-row justify-center items-center sm:px-6 gap-4 md:text-2xl pt-5">
              <div class="bg-[#34344F] text-white py-3 text-center rounded-4xl px-6 md:px-0 flex-1">
              Industrial Experience
              </div>
              <div class="bg-[#34344F] text-white py-3 text-center rounded-4xl px-6 md:px-0 flex-1">
              Flexible & Tests
              </div>
            </div>

            <div class="flex flex-col md:flex-row justify-center items-center sm:px-6 gap-4 md:text-2xl pt-5">
              <div class="bg-[#34344F] text-white py-3 text-center rounded-4xl px-6 md:px-0 flex-1">
              Offer in 24 Hours
              </div>
              <div class="bg-[#34344F] text-white py-3 text-center rounded-4xl px-6 md:px-0 flex-1">
              Certificate & Letter
              </div>
            </div>

            <div class="flex flex-col md:flex-row justify-center items-center sm:px-6 gap-4 md:text-2xl pt-5">
              <div class="bg-[#34344F] text-white py-3 text-center rounded-4xl px-6 md:px-0 flex-1">
              Free or Paid
              </div>
              <div class="bg-[#34344F] text-white py-3 text-center rounded-4xl px-6 md:px-0 flex-1">
              Tech & Job Support
              </div>
            </div>

            <div class="flex flex-col md:flex-row justify-center items-center sm:px-6 gap-4 md:text-2xl pt-5">
              <div class="bg-[#34344F] text-white py-3 text-center rounded-4xl px-6 md:px-0 flex-1">
              Resume & Skills
              </div>
              <div class="bg-[#34344F] text-white py-3 text-center rounded-4xl px-6 md:px-0 flex-1">
              Regular Sessions
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Whychooseus;
