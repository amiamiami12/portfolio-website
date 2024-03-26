"use client";
import React from "react";
import Image from "next/image";
import AboutStars from "../../public/assets/homepage/starspics.png";
import Link from "next/link";
import amilogo from "../../public/assets/homepage/amilogoWHITE.png";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import EMailQr from "../../public/assets/homepage/emailqr.png";

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

              <Drawer>
                <DrawerTrigger>
                  <Button className="px-4 bg-transparent text-[29.67px]">
                    Contact
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="">
                    <DrawerHeader>
                      <DrawerTitle>Hit me up! Lets talk.</DrawerTitle>
                      <DrawerDescription>
                        Set your daily activity goal.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 pb-0">
                      <div className="flex items-center justify-center space-x-2"></div>
                      <div className=" bg-customBrown text-white">
                        <div className=" w-[70%] h-dvh flex justify-center items-center mx-auto ">
                          <div>
                            <div className="flex flex-row font-semibold">
                              <div className=" flex flex-col">
                                <div className=" text-[48px] py-5 ">
                                  HIT ME UP! LET’S TALK
                                </div>
                                <div className=" text-[18.34px] py-5">
                                  Feel free to leave a message via the form, or
                                  you can get a hold of me at{" "}
                                  <a
                                    href="amirul2812workspace@gmail.com"
                                    className=" underline"
                                  >
                                    amirul2812workspace@gmail.com
                                  </a>
                                </div>
                                <div className=" py-5">
                                  <Image
                                    src={EMailQr}
                                    width={200}
                                    height={200}
                                    alt="email qr"
                                  />
                                </div>
                              </div>
                              <div className=" flex flex-col w-[100%] pl-64 pt-5">
                                <div className="grid w-full max-w-sm items-center gap-1.5 py-5">
                                  <Label htmlFor="name">Name</Label>
                                  <Input
                                    type="text"
                                    id="text"
                                    placeholder="Name"
                                  />
                                </div>
                                <div className="grid w-full max-w-sm items-center gap-1.5 py-5">
                                  <Label htmlFor="email">Email</Label>
                                  <Input
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                  />
                                </div>
                                <div className="grid w-full gap-1.5 py-5">
                                  <Label htmlFor="message">Your message</Label>
                                  <Textarea
                                    placeholder="Type your message here."
                                    id="message"
                                  />
                                </div>
                                <div className="py-5">
                                  <Button className=" bg-customColor">
                                    Submit
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <DrawerFooter>
                      <DrawerClose>
                        <Button variant="outline">Cancel</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
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
