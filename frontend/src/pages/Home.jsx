import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HeroSection from "../components/HeroSection";
import Electronics from "../components/Electronics";
import Applicances from "../components/Applicances";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Electronics />
      <Hero />
      <Applicances />
    </div>
  );
};

export default Home;
