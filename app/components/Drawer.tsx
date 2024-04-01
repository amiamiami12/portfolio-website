"use client";
import * as React from "react";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
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

export function DrawerDemo() {
  const { toast } = useToast();

  async function handleSubmit(e: any) {
    console.log(process.env.NEXT_PUBLIC_API);
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_API,
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    } else console.log("failed to submit form");
  }

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
                  <div className="flex flex-row space-x-40 font-semibold">
                    <div className=" flex flex-col">
                      <div className=" py-5 text-[48px] ">
                        HIT ME UP!
                        <br /> LETS TALK
                      </div>
                      <div className=" py-5 text-[18.34px]">
                        Feel free to leave a message via the form,
                        <br /> or you can get a hold of me at <br />
                        <a
                          href="amirul2812workspace@gmail.com"
                          className=" underline"
                        >
                          amirul2812workspace@gmail.com
                        </a>
                      </div>
                    </div>
                    <form className="w-[100%]" onSubmit={handleSubmit}>
                      <div className=" flex  flex-col px-5 pt-5 text-black">
                        <div className="grid w-full max-w-sm items-center gap-1.5 py-5">
                          <Label htmlFor="name">Name</Label>
                          <Input
                            type="text"
                            name="name"
                            id="text"
                            placeholder="Name"
                          />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5 py-5">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                          />
                        </div>
                        <div className="grid w-full gap-1.5 py-5">
                          <Label htmlFor="message">Your message</Label>
                          <Textarea
                            name="message"
                            placeholder="Type your message here."
                            id="message"
                          />
                        </div>
                        <div className="py-5">
                          <Button
                            onClick={() => {
                              toast({
                                description: "Your message has been sent.",
                              });
                            }}
                            className=" bg-customColor"
                            type="submit"
                          >
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

          <DrawerFooter className=" bg-secondary">
            <div className="flex justify-center py-5">
              <DrawerClose>
                <Button>Cancel</Button>
              </DrawerClose>
            </div>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
