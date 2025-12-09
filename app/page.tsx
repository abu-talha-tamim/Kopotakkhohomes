"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import GlimpsesInto from "@/components/GlimpsesInto";
import HomeBanner from "@/components/HomeBanner";
import KhlInterior from "@/components/KhlInterior";
import Lifestyle from "@/components/Lifestyle";
import OurLatestEvent from "@/components/OurLatestEvent";
import Explore from "@/components/Explore ";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: true, // run animation only once
    });
  }, []);

  return (
    <header>
      <HomeBanner />
      <Lifestyle />
      <Explore />
      <KhlInterior />
      <GlimpsesInto />
      <OurLatestEvent />
    </header>
  );
};

export default Home;
