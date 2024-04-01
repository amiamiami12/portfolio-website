"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DrawerDemo } from "../components/Drawer";
import amilogo from "../../public/assets/homepage/amilogoWHITE.png";
import RejuvLogo from "../../public/assets/homepage/cup.png";
import FiftyCups from "../../public/assets/homepage/rowscups.png";

const RejuvFirst = () => {
  return (
    <div className=" bg-secondary">
      <div className=" mx-auto flex min-h-screen w-[70%] justify-center py-5 ">
        <div>
          <div className="pb-5">
            <div className=" flex items-center justify-center space-x-20 border-[4px] bg-transparent px-10 text-[29.67px] text-white">
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
          </div>

          <div className="flex flex-row py-12 font-semibold">
            <div className=" flex basis-1/2 flex-col justify-center">
              <h1 className="">
                Rejuvenature
                <br />
                Cup
              </h1>

              <div className="flex basis-1/2 flex-row space-x-5">
                <div className="">
                  <h3>Project Type</h3>
                  <br />
                  <p>Ideation and Showcase</p>
                </div>
                <br />
                <div className="">
                  <h3>Tools Used</h3>
                  <br />
                  <p>
                    Clip Studio Paint <br />& Gaomon 1060 Pro
                  </p>
                </div>
              </div>

              <div className="flex basis-1/2 flex-row">
                <div className="">
                  <h3>Role</h3>
                  <br />
                  <p>Designer & Illustrator</p>
                </div>

                <div className=" pl-28">
                  <h3>Year</h3>
                  <br />
                  <p>2022</p>
                </div>
              </div>
            </div>

            <div className=" flex basis-1/2 flex-col text-[24px] font-normal">
              The Rejuvenature Cup is an innovative idea that strives <br />
              to counter the problems faced with littering and waste
              <br />
              pollution by instead of avoiding the problem completely,
              <br />
              the cup is designed to be decomposable when thrown away,
              <br />
              with seeds and needed nutrients hidden within the cup to
              <br />
              promote the growth of plants.
              <br />
              <br />
              The projects involves creating a video for the product as
              <br />
              well as promoting it to appeal target audiences such as
              <br />
              cafes, restaurants and even personal use. The cups are
              <br />
              priced affordably at $5.50 per 50 cups and it also comes
              <br />
              in different sizes as well as fully customizable to fit
              <br />
              the businesses&apos needs.
            </div>
          </div>
          <br />
          <hr className=" mx-auto my-8 h-[2px] border-0 bg-black opacity-50" />
          <br />
          <div className=" flex flex-col items-center justify-center space-y-10">
            <Image src={RejuvLogo} alt="rejuv cup" />
            <Image src={FiftyCups} alt="fifty cups" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RejuvFirst;
