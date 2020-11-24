import React from "react";
import Aboutus from "./AboutUs";
import { homeObjOne, homeObjthree, homeObjtwo } from "./Data";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Page from "./Page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Page child={<HeroSection />} />
      <Page child={<Aboutus {...homeObjOne} pathFigure="/images/img2.jpg" />} />
      <Page
        child={
          <Aboutus
            {...homeObjtwo}
            pathFigure="/images/img1.jpg"
            first="1"
            second="0"
            white="true"
          />
        }
      />
      <Page
        child={<Aboutus {...homeObjthree} pathFigure="/images/749.jpg" />}
      />
    </div>
  );
}
