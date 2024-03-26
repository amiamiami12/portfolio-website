"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import blueEden from "../../public/assets/homepage/blueeden.png";
import Link from "next/link";

const ProjectHomepage = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState<number>(0);
  const [count, setCount] = React.useState<number>(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className=" bg-secondary">
      <div className=" w-[70%] h-dvh flex justify-center items-center mx-auto ">
        <div>
          <hr className=" mx-auto h-[2px] my-8 bg-black opacity-50 border-0" />
          <br />
          <hr className=" mx-auto h-[2px] my-8 bg-black opacity-50 border-0" />
          <br />
          <div className=" text-[48px] text-center p-5 font-semibold">
            PROJECTS
          </div>
          <div className="flex flex-row  font-semibold">
            <div className=" flex flex-col m-16">
              <div className=" text-[29.67px]">
                THIS PROJECT REVOLVES AROUND CREATING A MOCK UP APP FOR BLUE
                EDEN CAFE THAT IS BASED IN BRUNEI DARUSSALAM WITH THE GOAL IN
                MIND OF MAKING IT EASIER FOR THEIR CUSTOMERS TO PLACE THEIR
                ORDERS ONLINE AND BOOKING.
              </div>
              <button className=" text-[18.34px] mt-10 mx-64 pt-3 pb-3 bg-customColor">
                <Link href="/projects">More Details</Link>
              </button>
            </div>
            <div className=" flex flex-col pr-14">
              <Carousel>
                <CarouselContent className="">
                  <CarouselItem>
                    <Image src={blueEden} width={2000} alt="blue eden logo" />
                  </CarouselItem>
                  <CarouselItem></CarouselItem>
                  <CarouselItem></CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>

          <br />
          <hr className=" mx-auto h-[2px] my-8 bg-black opacity-50 border-0" />
          <br />
          <hr className=" mx-auto h-[2px] my-8 bg-black opacity-50 border-0" />
          <br />
        </div>
      </div>
    </div>
  );
};

export default ProjectHomepage;
