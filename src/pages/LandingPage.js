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
import Seo from "../components/Seo";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="Digital Solutions & IT Consultancy"
        description="StartCode Indonesia: Web & mobile development, enterprise solutions, dan produk AI untuk bisnis Anda."
      />
      <Navbar />
      {/* Penting: offset karena Navbar fixed */}
      <main className="pt-20 lg:pt-20">
        <Hero />
        <TrustedBy />
        <About />
        <Services />
        <Portfolio />
        <Process />
        {/* <Metrics /> */}
        <CTAStrip />
        <Footer />
      </main>
    </div>
  );
};

export default LandingPage;
