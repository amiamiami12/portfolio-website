"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import amilogo from "../../public/assets/homepage/amilogoWHITE.png";
import MoodBoard from "../../public/assets/blueeden/moodboard.png";
import FirstBlue from "../../public/assets/blueeden/firstblue.png";
import SecondBlue from "../../public/assets/blueeden/secondblue.png";
import ThirdBlue from "../../public/assets/blueeden/thirdblue.png";
import FourthBlue from "../../public/assets/blueeden/fourthblue.png";
import { DrawerDemo } from "../components/Drawer";

const BlueEdenFirst = () => {
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
                BLUE EDEN
                <br />
                CAFE APP
              </h1>

              <div className="flex basis-1/2 flex-row">
                <div className="">
                  <h3>Project Type</h3>
                  <br />
                  <p>Application Mockup and Wireframe</p>
                </div>
                <br />
                <div className="">
                  <h3>Tools Used</h3>
                  <br />
                  <p>Figma & Gaomon 1060 Pro</p>
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
              The Blue Eden Café app mockup is a sleek and user-friendly <br />
              digital platform designed to enhance the customer
              <br />
              experience. With a serene blue color scheme, intuitive
              <br />
              navigation, and seamless features, it encapsulates the
              <br />
              essence of the café&aposs tranquil ambiance and exceptional
              <br />
              service.
              <br />
              <br />
              The home screen offers quick access to menu, reservations,
              <br />
              loyalty program, and location information, while a carousel
              <br />
              showcases the café&aposs enticing offerings. Customers can
              <br />
              easily browse the menu, make reservations, track loyalty
              <br />
              points, and find nearby locations. Overall, the Blue Eden
              <br />
              Café app mockup simplifies the dining experience,
              <br />
              fostering engagement and delight among patrons.
            </div>
          </div>
          <br />
          <hr className=" mx-auto my-8 h-[2px] border-0 bg-black opacity-50" />
          <br />
          <div className=" flex flex-col items-center justify-center space-y-10">
            <Image src={MoodBoard} alt="moodboard" />
            <Image src={FirstBlue} alt="first panel" />
            <Image src={SecondBlue} alt="second panel" />
            <Image src={ThirdBlue} alt="third panel" />
            <Image src={FourthBlue} alt="fourth panel" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlueEdenFirst;
