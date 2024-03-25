"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Pantai from "../../public/assets/homepage/pantai.jpg";
import Autoplay from "embla-carousel-autoplay";
import EmblaCarousel from "embla-carousel";

const PersonalLife = () => {
  return (
    <div className=" bg-customBrown text-white">
      <div className=" w-[70%] h-dvh flex justify-center items-center mx-auto ">
        <div>
          <hr className=" mx-auto h-[2px] my-8 bg-white opacity-50 border-0" />
          <br />
          <hr className=" mx-auto h-[2px] my-8 bg-white opacity-50 border-0" />
          <div className=" text-[48px] text-center p-5 font-semibold">
            PERSONAL LIFE
          </div>
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
            className=""
          >
            <CarouselContent className=" h-[400px] w-[70%]">
              <CarouselItem>
                <Image src={Pantai} className="md:basis-1/3" alt="pantai" />
              </CarouselItem>
              <CarouselItem>
                <Image src={Pantai} className="md:basis-1/3" alt="pantai" />
              </CarouselItem>
              <CarouselItem>
                <Image src={Pantai} className="md:basis-1/3" alt="pantai" />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <br />
          <hr className=" mx-auto h-[2px] my-8 bg-white opacity-50 border-0" />
          <br />
          <hr className=" mx-auto h-[2px] my-8 bg-white opacity-50 border-0" />
          <br />
        </div>
      </div>
    </div>
  );
};

export default PersonalLife;
