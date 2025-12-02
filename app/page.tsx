"use client";

import Explore from "@/components/Explore ";
import GlimpsesInto from "@/components/GlimpsesInto";
import HomeBanner from "@/components/HomeBanner";
import KhlInterior from "@/components/KhlInterior";
import Lifestyle from "@/components/Lifestyle";
import OurLatestEvent from "@/components/OurLatestEvent";

const Home = () => {
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
