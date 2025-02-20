import React from "react";
import Navbar from "./Navbar";
import Herosection from "./herosection";
import Whychooseus from "./Whychooseus";
import Prepareforsuccess from "./Prepareforsuccess";
import Internshipdomain from "./Internshipdomain";
import Cta from "./Cta";
import Faqs from "./Faqs";
import Testimonials from "./Testimonials";
import FooterBanner from "./FooterBanner";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      <Navbar></Navbar>
      <Herosection></Herosection>
      <Whychooseus></Whychooseus>
      <Prepareforsuccess></Prepareforsuccess>
      <Internshipdomain></Internshipdomain>
      <Cta></Cta>
      <Faqs></Faqs>
      <Testimonials></Testimonials>
      <FooterBanner></FooterBanner>
      <Footer></Footer>
    </>
  );
}

export default HomePage;
