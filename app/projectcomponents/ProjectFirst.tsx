"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import amilogo from "../../public/assets/homepage/amilogoWHITE.png";
import { Box } from "lucide-react";
import BlueEden from "../../public/assets/homepage/blueeden.png";
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

const ProjectFirst = () => {
  return (
    <div className=" bg-secondary">
      <div className=" w-[70%] h-[150vh] flex justify-center py-5 mx-auto ">
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
          <div className="flex font-semibold justify-center">
            <div className="">
              <div className=" text-[70px] ">PROJECTS</div>
            </div>
          </div>
          <br />
          <hr className=" mx-auto h-[2px] my-8 bg-black opacity-50 border-0" />
          <br />
          <div className="flex flex-row justify-center">
            <div className=" hover:shadow-lg">
              <Link href="/BlueEden">
                <Image src={BlueEden} alt="blueeden" />
              </Link>
            </div>
            <div className=" hover:shadow-lg">
              <Image src={BlueEden} alt="blueeden" />
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <div className="hover:shadow-lg">
              <Image src={BlueEden} alt="blueeden" />
            </div>
            <div className=" hover:shadow-lg">
              <Image src={BlueEden} alt="blueeden" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectFirst;
