import * as React from "react";
import EMailQr from "../../public/assets/homepage/emailqr.png";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import Image from "next/image";

import { Button } from "@/components/ui/button";
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

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];

export function DrawerDemo() {
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="bg-transparent px-4 text-[29.67px]">Contact</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="">
          <DrawerHeader>
            <DrawerTitle>Hit me up! Lets talk.</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
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
                        Feel free to leave a message via the form, or you can
                        get a hold of me at{" "}
                        <a
                          href="amirul2812workspace@gmail.com"
                          className=" underline"
                        >
                          amirul2812workspace@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className=" flex w-[100%] flex-col pl-64 pt-5">
                      <div className="grid w-full max-w-sm items-center gap-1.5 py-5">
                        <Label htmlFor="name">Name</Label>
                        <Input type="text" id="text" placeholder="Name" />
                      </div>
                      <div className="grid w-full max-w-sm items-center gap-1.5 py-5">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder="Email" />
                      </div>
                      <div className="grid w-full gap-1.5 py-5">
                        <Label htmlFor="message">Your message</Label>
                        <Textarea
                          placeholder="Type your message here."
                          id="message"
                        />
                      </div>
                      <div className="py-5">
                        <Button className=" bg-customColor">Submit</Button>
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
    </Drawer>
  );
}
