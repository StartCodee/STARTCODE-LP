import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Process from "../components/Process";
import Metrics from "../components/Metrics";
import CTAStrip from "../components/CTAStrip";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustedBy />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Metrics />
      <CTAStrip />
      <Footer />
    </div>
  );
};

export default LandingPage;