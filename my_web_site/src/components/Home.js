import React, { useEffect, useRef } from "react";
import Aboutus from "./AboutUs";
import { homeObjOne, homeObjthree, homeObjtwo } from "./Data";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Page from "./Page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Page id="homepage" child={<HeroSection />} />
      <Page
        id="page1"
        child={<Aboutus {...homeObjOne} pathFigure="/images/img2.jpg" />}
      />
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
      <Footer />
    </div>
  );
}
