"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import SMLK from "../../public/assets/homepage/smlk.jpg";
import LETSJP from "../../public/assets/homepage/letsjp.jpg";

const AboutEduExp = () => {
  return (
    <div className=" bg-secondary">
      <div className=" w-[70%] h-[50vh] flex justify-center mx-auto ">
        <div className="flex flex-row text-black font-semibold py-16">
          <div className=" flex flex-col px-16">
            <div className=" text-[77px] text-center ">EDUCATION</div>
            <div className=" font-normal text-[24px]">
              <div className=" py-5">
                Lambak Kiri Secondary School 2016 - 2021
              </div>
              <div className="py-5">Politeknik Brunei 2021 - Present</div>
            </div>
            {/* <div className=" py-24 flex justify-center">
              {" "}
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                  dragFree: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 2000,
                  }),
                ]}
                orientation="vertical"
                className="w-full max-w-xs"
              >
                <CarouselContent>
                  <CarouselItem>
                    <Image src={SMLK} alt="smlk class" />
                  </CarouselItem>
                  <CarouselItem>
                    <Image src={LETSJP} alt="letsjp session" />
                  </CarouselItem>
                  <CarouselItem>
                    <Image src={SMLK} alt="smlk class" />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div> */}
          </div>
          <div className=" flex flex-col px-16">
            <div className=" text-[77px] text-center ">EXPERIENCE</div>
            <div className=" font-normal text-[24px]">
              <div className=" py-5">
                Lambak Kiri Secondary School 2016 - 2021
              </div>
              <div className="py-5">Politeknik Brunei 2021 - Present</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEduExp;
