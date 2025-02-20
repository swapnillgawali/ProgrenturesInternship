import React from "react";

function TestimonialCard({item}) {
    console.log(item)
  return (
    <>
      <div class="flex flex-col overflow-hidden shadow-xl my-10 mx-3">
        <div class="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
          <div class="flex-1">
            <div class="flex items-center">
              <svg
                class="w-5 h-5 text-[#FDB241]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>

            <blockquote class="flex-1 mt-8">
              <p class="text-lg leading-relaxed text-gray-900 font-pj">{item.description}</p>
            </blockquote>
          </div>

          <div class="flex items-center mt-8">
            <img
              class="flex-shrink-0 object-cover rounded-full w-11 h-11"
              src={item.image}
              alt=""
            />
            <div class="ml-4">
              <p class="text-base font-bold text-gray-900 font-pj">
                {item.name}
              </p>
              <p class="mt-0.5 text-sm font-pj text-gray-600">
                Digital Marketer
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialCard;
