import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import EmailQr from "../../public/assets/homepage/emailqr.png";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <div className=" bg-customBrown text-white">
      <div className=" w-[70%] h-dvh flex justify-center items-center mx-auto ">
        <div>
          <div className="flex flex-row font-semibold">
            <div className=" flex flex-col">
              <div className=" text-[48px] py-5 ">HIT ME UP! LET’S TALK</div>
              <div className=" text-[18.34px] py-5">
                Feel free to leave a message via the form, or you can get a hold
                of me at{" "}
                <a href="amirul2812workspace@gmail.com" className=" underline">
                  amirul2812workspace@gmail.com
                </a>
              </div>
              <div className=" py-5">
                <Image src={EmailQr} width={200} height={200} alt="email qr" />
              </div>
            </div>
            <div className=" flex flex-col w-[100%] pl-64 pt-5">
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
                <Textarea placeholder="Type your message here." id="message" />
              </div>
              <div className="py-5">
                <Button className=" bg-customColor">Submit</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
