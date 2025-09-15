"use client";

import React, { useEffect } from "react";
import FullWidthCarousel from "./carousel";
import LifeAtKoye from "../lifeat/page";
import JoinWithUs from "./join-with-us";

const OurPeoplePage = () => {

  return (
    <div>
        <FullWidthCarousel/>
        <LifeAtKoye/>
        <JoinWithUs/>
    </div>
  );
};

export default OurPeoplePage;
