import React from 'react';
import Card from './Card';
import list from "../../public/list.json";

function Internshipdomain(){

  const filter_data = list.filter((data)=>data.status==="active");
    return<>
  <section class="text-gray-600 body-font bg-[#EFEDF5]">
  <div class="container px-5 py-20 mx-auto">
      <div class="flex flex-row items-center justify-center lg: w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl lg:text-5xl font-medium mb-10 text-gray-900">Internship Domain</h1>
      </div>
    <div class="flex flex-wrap -m-4">
      {filter_data.map((item)=>(<Card item={item} key={item.id} ></Card>))}
    </div>
  </div>
</section>
    </>
}

export default Internshipdomain;