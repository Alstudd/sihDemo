import React from "react";
import Hero from "../components/Home/Hero";
import WhatWeDo from "../components/Home/WhatWeDo";
import ManageProducts from "../components/Home/ManageProducts";
import StartYourJourney from "../components/Home/StartYourJourney";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <div className="xl:mt-0 md:mt-[36rem] mt-0">
        <ManageProducts />
        <StartYourJourney />
      </div>
    </div>
  );
}
