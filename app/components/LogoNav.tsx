"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import amilogo from "../../public/assets/homepage/amilogoWHITE.png";
import aminame from "../../public/assets/homepage/aminame1.png";
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
import EMailQr from "../../public/assets/homepage/emailqr.png";
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

              {/* <Drawer>
                <DrawerTrigger>
                  <Button className="bg-transparent px-4 text-[29.67px]">
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
                        <div className=" mx-auto flex h-dvh w-[70%] items-center justify-center ">
                          <div>
                            <div className="flex flex-row font-semibold">
                              <div className=" flex flex-col">
                                <div className=" py-5 text-[48px] ">
                                  HIT ME UP! LET’S TALK
                                </div>
                                <div className=" py-5 text-[18.34px]">
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
                              <div className=" flex w-[100%] flex-col pl-64 pt-5">
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
                        <Button>Cancel</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer> */}
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
