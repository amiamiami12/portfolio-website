import React from "react";
import Image from "next/image";
import AboutImage from "../../public/assets/homepage/aboutme1.jpg";

const AboutSection = () => {
  return (
    <div className=" bg-secondary">
      <div className=" w-[70%] h-dvh flex justify-center items-center mx-auto ">
        <div>
          <hr className=" mx-auto h-[2px] my-8 bg-black opacity-50 border-0" />
          <br />
          <hr className=" mx-auto h-[2px] my-8 bg-black opacity-50 border-0" />
          <br />
          <div className="flex flex-row text-black font-semibold">
            <div className=" flex flex-col">
              <div className=" text-[48px] ">HELLO!</div>
              <div className=" text-[29.67px]">
                I AM AMIRUL AIMAN, A FREELANCE GRAPHICS DESIGNER AND WEB
                DEVELOPER BASED IN BANDAR SERI BEGAWAN, BRUNEI DARUSSALAM.
              </div>
              <button className=" text-[18.34px] mt-10 mr-96 pt-3 pb-3 bg-customColor">
                More Details
              </button>
            </div>
            <div className=" flex flex-col">
              <Image src={AboutImage} alt="Picture of the author" />{" "}
            </div>
          </div>

          <br />
          <hr className=" mx-auto h-[2px] my-8 bg-black opacity-50 border-0" />
          <br />
          <hr className=" mx-auto h-[2px] my-8 bg-black opacity-50 border-0" />
          <br />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
