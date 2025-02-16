import React from 'react';

function Herosection(){

return <>

<section
  class="relative bg-[url('D:\Progentures_Project\frontend\src\Components\freepik__graph-background__12257.jpg')] bg-cover"
>
  <div
    class="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 class="text-3xl font-extrabold text-white sm:text-5xl">
      Be a Part of Progrentures Internship
        <strong class="block font-extrabold text-rose-500 py-3"> & Shape Your Career! </strong>
      </h1>

      <p class="mt-4 max-w-lg text-white sm:text-xl/relaxed">
      Gain real-world experience, work on live projects, and build a future-proof career with Progrenture's expert-led internships.
      </p>

      <div class="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          class="block w-full rounded-3xl bg-white px-12 py-3 text-xl font-medium text-black shadow-sm hover:bg-rose-700 hover:text-white focus:ring-3 focus:outline-hidden sm:w-auto"
        >
            PRS Internship Registration
        </a>
      </div>
    </div>
  </div>
</section>

</>
}

export default Herosection;