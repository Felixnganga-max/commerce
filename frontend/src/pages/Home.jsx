import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HeroSection from "../components/HeroSection";
import Electronics from "../components/Electronics";
import Applicances from "../components/Applicances";
import Clothes from "../components/Clothes";
import Gifts from "../components/Gifts";
import PersonalCare from "../components/PersonalCare";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Electronics />
      <Hero />
      <Applicances />
      <Clothes />
      <Gifts />
      <PersonalCare />
      <Footer />
    </div>
  );
};

export default Home;
