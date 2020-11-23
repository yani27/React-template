import React from "react";
import Aboutus from "./AboutUs";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Page from "./Page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Page child={<HeroSection />} />
      <Page
        child={
          <Aboutus
            fullName="Youcefi Mohammed Yassine"
            desc="software dev backend django frontend react and machine learning"
            pathFigure="/images/img1.jpg"
          />
        }
      />
    </div>
  );
}
