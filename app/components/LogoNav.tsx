import Link from "next/link";
import React from "react";
import Image from "next/image";
import amilogo from "../../public/assets/homepage/amilogoWHITE.png";
import aminame from "../../public/assets/homepage/aminame1.png";

const LogoNav = () => {
  return (
    <div className="bg-homebg bg-cover">
      <div className="w-full h-dvh flex justify-center mx-auto">
        <div className="flex h-full w-full justify-center backdrop-brightness-50">
          <div className="text-[29.67px] py-5 text-white">
            <div className=" px-10 space-x-20 flex items-center justify-center bg-transparent border-[4px]">
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
            <div className=" flex justify-center items-center">
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
