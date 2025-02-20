import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import logo from "./logo.png";

function Footer() {
  return (
    <>
      <footer className="bg-[#34344F]">
        <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 lg:justify-between lg:grid-cols-3">
            <div>
              <div className="flex justify-center text-teal-600 sm:justify-start">
                <img class="w-70" src={logo} alt="" />
              </div>
              <form className="mt-6">
                <p className="mt-6 max-w-md ml-2 pb-3 text-center leading-relaxed text-white sm:max-w-xs sm:text-left">
                  Contact Us:
                </p>
                <div className="relative">
                  <label className="sr-only" htmlFor="email">
                    {" "}
                    Email{" "}
                  </label>

                  <input
                    className="rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                    id="email"
                    type="email"
                    placeholder="john@doe.com"
                  />

                  <button className="absolute mr-22 end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                    Submit
                  </button>
                </div>
              </form>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:col-span-2">
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">Contact Us</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                      href="#"
                    >
                      <IoIosMailOpen class="text-2xl text-white"></IoIosMailOpen>
                      <span className="flex-1 text-start text-white">john@doe.com</span>
                    </a>
                  </li>

                  <li>
                    <a
                      className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                      href="#"
                    >
                      <FaPhoneAlt class="text-xl text-white"></FaPhoneAlt>
                      <span className="flex-1 text-start text-white">+91 9322938085</span>
                    </a>
                  </li>

                  <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                    <FaLocationDot class="text-2xl text-white"></FaLocationDot>
                    <address className="-mt-0.5 flex-1 text-start text-white not-italic">
                      Sr.No. 394/2, Plot No 30A-30B Ashirwad Nagar,Alasshegaon
                      Buldhana Shegaon - 444203
                    </address>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">Follow Us</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="text-white flex gap-2 flex-row transition hover:text-white/75"
                      href="#"
                    >
                      <FaLinkedin class="text-2xl"></FaLinkedin>
                      <span>Linkedin</span>
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white  flex gap-2 flex-row transition hover:text-white/75"
                      href="#"
                    >
                      <FaSquareXTwitter class="text-2xl"></FaSquareXTwitter>
                      <span>X</span>
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white  flex gap-2 flex-row transition hover:text-white/75"
                      href="#"
                    >
                      <FaInstagramSquare class="text-2xl"></FaInstagramSquare>
                      <span>Instagram</span>
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white  flex gap-2 flex-row transition hover:text-white/75"
                      href="#"
                    >
                      <FaFacebook class="text-2xl"></FaFacebook>
                      <span>Facebook</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-100 pt-6">
            <div className="text-center sm:flex sm:justify-between sm:text-left gap-3">
              <div className="flex flex-row text-sm text-gray-500 gap-3">
                <a
                  className="inline-block text-white transition hover:text-white/75"
                  href="#"
                >
                  Terms & Conditions
                </a>
                <a
                  className="inline-block text-white transition hover:text-white/75"
                  href="#"
                >
                  Privacy Policy
                </a>
              </div>
              <p className="mt-4 text-sm text-white sm:order-first sm:mt-0">
                &copy; 2025 Progrentures. All right reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
