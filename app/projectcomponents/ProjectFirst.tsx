"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import amilogo from "../../public/assets/homepage/amilogoWHITE.png";
import BlueEden from "../../public/assets/homepage/blueeden.png";
import Cup from "../../public/assets/homepage/cup.png";
import { DrawerDemo } from "../components/Drawer";

const ProjectFirst = () => {
  return (
    <div className=" bg-secondary">
      <div className=" w-[70%] h-dvh flex justify-center py-5 mx-auto ">
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
          <div className="flex font-semibold justify-center">
            <div className="">
              <div className=" text-[70px] ">PROJECTS</div>
            </div>
          </div>
          <br />
          <hr className=" mx-auto h-[2px] my-8 bg-black opacity-50 border-0" />
          <br />
          <div className="flex flex-row justify-center">
            <div className=" hover:shadow-lg">
              <Link href="/BlueEden">
                <Image src={BlueEden} alt="blueeden" />
              </Link>
            </div>
            <div className=" hover:shadow-lg">
              <Link href="/rejuvenature"><Image src={Cup} alt="cup" /></Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectFirst;
