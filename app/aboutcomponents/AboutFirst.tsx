"use client";
import React from "react";
import Image from "next/image";
import AboutStars from "../../public/assets/homepage/starspics.png";
import Link from "next/link";
import amilogo from "../../public/assets/homepage/amilogoWHITE.png";

import { DrawerDemo } from "../components/Drawer";

const AboutFirst = () => {
  return (
    <div className=" bg-secondary">
      <div className=" w-[70%] h-[120vh] flex justify-center py-5 mx-auto ">
        <div>
          <div className="pb-5">
            <div className=" px-10 space-x-20 flex items-center justify-center bg-transparent border-[4px] text-[29.67px] text-white">
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

              <DrawerDemo/>
            </div>
          </div>

          <div className="flex flex-row font-semibold">
            <div className=" flex flex-col basis-1/2 ">
              <div className=" text-[100px] ">HELLO!</div>
              <div className=" text-[29.67px] py-5">
                I AM AMIRUL AIMAN, A FREELANCE GRAPHICS DESIGNER AND WEB
                DEVELOPER BASED IN BANDAR SERI BEGAWAN, BRUNEI DARUSSALAM.
              </div>
              <div className="pt-10">
                <p className=" font-normal ">
                  Growing up, I’ve always been fascinated with visually stunning
                  animations and wonderful illustrations, and with my newfound
                  love for technology, I strive to bring art and technology to
                  bring forth a seamless harmony.
                </p>
              </div>
            </div>
            <div className=" flex flex-col w-[1000px] h-[1000px]">
              <Image src={AboutStars} alt="Pictures of the author" />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFirst;
