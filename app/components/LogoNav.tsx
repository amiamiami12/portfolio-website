"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import amilogo from "../../public/assets/homepage/amilogoWHITE.png";
import aminame from "../../public/assets/homepage/aminame1.png";
import { DrawerDemo } from "./Drawer";

const LogoNav = () => {
  return (
    <div className="bg-homebg bg-cover">
      <div className="mx-auto flex h-dvh w-full justify-center">
        <div className="flex h-full w-full justify-center backdrop-brightness-50">
          <div className="py-5 text-[29.67px] text-white">
            <div className=" flex items-center justify-center space-x-20 border-[4px] bg-transparent px-10 text-[29.67px]">
              <div>
                <Link href="/">
                  <button className="bg-transparent px-4">Home</button>
                </Link>
              </div>
              <div>
                <Link href="/about">
                  <button className="bg-transparent px-4">About</button>
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
                  <button className="bg-transparent px-4">Projects</button>
                </Link>
              </div>

              <DrawerDemo />
            </div>

            <div className=" flex items-center justify-center">
              <Image
                src={aminame}
                width={600}
                height={600}
                alt="name of author on screen"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoNav;
