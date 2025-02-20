import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";
import testimoniallist from "../../public/testimonial_list.json";

function Testimonials() {
  const test_list = testimoniallist;
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section class="bg-gray-50 overflow-x-hidden mt-20">
        <div class="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:ps-8 lg:pe-0 xl:py-15">
          <div class="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
            <h2 class="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Read trusted reviews from our customers
            </h2>
          </div>

          <div className="slider-container">
            <Slider {...settings}>
              {test_list.map((item) => (
                <TestimonialCard item={item} key={item.id}></TestimonialCard>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
