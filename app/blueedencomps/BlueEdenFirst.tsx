"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import amilogo from "../../public/assets/homepage/amilogoWHITE.png";
import { Box } from "lucide-react";
import BlueEden from "../../public/assets/homepage/blueeden.png";
import MoodBoard from "../../public/assets/blueeden/moodboard.png";
import FirstBlue from "../../public/assets/blueeden/firstblue.png";
import SecondBlue from "../../public/assets/blueeden/secondblue.png";
import ThirdBlue from "../../public/assets/blueeden/thirdblue.png";
import FourthBlue from "../../public/assets/blueeden/fourthblue.png";
import { DrawerDemo } from "../components/Drawer";


const BlueEdenFirst = () => {
  return (
    <div className=" bg-secondary">
      <div className=" w-[70%] min-h-screen flex justify-center py-5 mx-auto ">
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

          <div className="flex flex-row font-semibold py-12">
            <div className=" flex flex-col basis-1/2 justify-center">
              <h1 className="">
                BLUE EDEN
                <br />
                CAFE APP
              </h1>

              <div className="flex flex-row basis-1/2">
                <div className="">
                  <h2>Project Type</h2>
                  <br />
                  <p>Application Mockup and Wireframe</p>
                </div>
                <br />
                <div className="">
                  <h2>Tools Used</h2>
                  <br />
                  <p>Figma & Gaomon 1060 Pro</p>
                </div>
              </div>

              <div className="flex flex-row basis-1/2">
                <div className="">
                  <h2>Role</h2>
                  <br />
                  <p>Designer & Illustrator</p>
                </div>

                <div className=" pl-28">
                  <h2>Year</h2>
                  <br />
                  <p>2022</p>
                </div>
              </div>
            </div>

            <div className=" flex flex-col basis-1/2 font-normal text-[24px]">
              The Blue Eden Café app mockup is a sleek and user-friendly <br />
              digital platform designed to enhance the customer
              <br />
              experience. With a serene blue color scheme, intuitive
              <br />
              navigation, and seamless features, it encapsulates the
              <br />
              essence of the café's tranquil ambiance and exceptional
              <br />
              service.
              <br />
              <br />
              The home screen offers quick access to menu, reservations,
              <br />
              loyalty program, and location information, while a carousel
              <br />
              showcases the café's enticing offerings. Customers can
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
          <hr className=" mx-auto h-[2px] my-8 bg-black opacity-50 border-0" />
          <br />
          <div className=" flex flex-col justify-center items-center space-y-10">
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
