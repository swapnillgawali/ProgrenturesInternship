import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from "axios";

function Internshipdomain() {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    const getCourse = async () => {
      try {
        const res = await axios.get("http://localhost:4001/course");
        console.log(res.data);
        setCourse(res.data);  // ✅ fixed
      } catch (error) {
        console.log(error);
      }
    };

    getCourse();
  }, []);

  const filter_data = course.filter((data) => data.status === "active");  // ✅ fixed

  return (
    <section className="text-gray-600 body-font bg-[#EFEDF5]">
      <div className="container px-5 py-15 mx-auto">
        <div className="flex flex-row items-center justify-center w-full mb-6 lg:mb-0">
          <h1 className="text-4xl lg:text-5xl font-medium mb-10 text-gray-900">Internship Domain</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {filter_data.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Internshipdomain;
