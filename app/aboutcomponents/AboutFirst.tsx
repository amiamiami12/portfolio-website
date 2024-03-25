import React from "react";
import Image from "next/image";
import AboutStars from "../../public/assets/homepage/starspics.png";
import Link from "next/link";
import amilogo from "../../public/assets/homepage/amilogoWHITE.png";

const AboutFirst = () => {
  return (
    <div className=" bg-secondary">
      <div className=" w-[70%] h-dvh flex justify-center py-5 mx-auto ">
        <div>
          <div className="pb-5">
            <div className=" space-x-20 mx-36 flex items-center justify-center bg-transparent border-[4px] text-[29.67px] text-white">
              <div>
                <Link href="/">
                  <button className="px-4 bg-transparent">Home</button>
                </Link>
              </div>
              <div>
                <Link href="/about">
                  <button className="px-4 bg-transparent">About</button>
                </Link>
              </div>

              <Image
                src={amilogo}
                width={150}
                height={145}
                alt="logo of author"
              />
              <div>
                <Link href="/projects">
                  <button className="px-4 bg-transparent">Projects</button>
                </Link>
              </div>

              <button className="px-4 bg-transparent">Contact</button>
            </div>
          </div>

          <div className="flex flex-row  font-semibold">
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
              <Image src={AboutStars} alt="Pictures of the author" />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFirst;
