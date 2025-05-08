import React from 'react';

function Card({item}){
    // console.log(item)
    return <>
    <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-white p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={item.image} alt="content"/>
          {/* <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3> */}
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{item.course_name}</h2>
          <p class="leading-relaxed text-base">{item.internship_description}</p>

          <div class="mt-auto flex justify-center">
      <button class="bg-indigo-500 text-white mt-3 px-6 py-2 rounded hover:bg-indigo-600 transition">
        Apply Now
      </button>
    </div>
        </div>
    </div>
    </>
}

export default Card;