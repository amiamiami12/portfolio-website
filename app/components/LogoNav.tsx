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
import { Label } from "@radix-ui/react-label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import EMailQr from "../../public/assets/homepage/emailqr.png";

const LogoNav = () => {
  return (
    <div className="bg-homebg bg-cover">
      <div className="w-full h-dvh flex justify-center mx-auto">
        <div className="flex h-full w-full justify-center backdrop-brightness-50">
          <div className="text-[29.67px] py-5 text-white">
            <div className=" px-10 space-x-20 flex items-center justify-center bg-transparent border-[4px] text-[29.67px]">
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
                              <form>
                                <div className=" flex flex-col w-[100%] pl-64 pt-5">
                                  <div className="grid w-full max-w-sm items-center gap-1.5 py-5">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                      type="text"
                                      id="text"
                                      name="name"
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
                                    <Label htmlFor="message">
                                      Your message
                                    </Label>
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
                              </form>
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
              </Drawer>
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
