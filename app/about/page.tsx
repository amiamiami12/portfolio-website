import React from "react";
import AboutFirst from "../aboutcomponents/AboutFirst";
import AboutPersonalLife from "../aboutcomponents/AboutPersonalLife";
import AboutEduExp from "../aboutcomponents/AboutEduExp";
import Footer from "../components/Footer";
import Desk from "../components/Desk";

const page = () => {
  return (
    <div>
      <AboutFirst />
      <AboutPersonalLife />
      <AboutEduExp />
      <Footer />
      <Desk />
    </div>
  );
};

export default page;
