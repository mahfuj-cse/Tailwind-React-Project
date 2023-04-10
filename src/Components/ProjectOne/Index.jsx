import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import Features from "./Features";
import CtaSection from "./CtaSection";
import HeroSection from "./HeroSection";

function Index() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Features></Features>
      <Testimonials></Testimonials>
      <CtaSection></CtaSection>
      <Footer></Footer>
    </>
  );
}

export default Index;
