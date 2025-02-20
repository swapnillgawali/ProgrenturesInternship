import React from "react";

function FooterBanner() {
  return (
    <>
      <section className="overflow-hidden bg-[url('D:\Progentures_Project\ProgrenturesInternship\frontend\src\Components\bannerimage.jpg')] bg-cover bg-top bg-no-repeat">
        <div className="bg-black/75 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="flex flex-col items-center text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            Join Our WhatsApp Community for Updates!!
            </h2>
            <div className="mt-4 sm:mt-8">
              <a
                href="#"
                className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FooterBanner;
