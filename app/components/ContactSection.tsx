"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast()

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            access_key: "431fcbea-8d82-4b0f-b7b6-18b4ddd6c228",
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        }),
    });
    const result = await response.json();
    if (result.success) {
        console.log(result);
    }
}

  return (
    <div className=" bg-customBrown text-white">
              <div className=" mx-auto flex h-dvh w-[70%] items-center justify-center ">
                <div>
                  <div className="flex flex-row font-semibold space-x-40">
                    <div className=" flex flex-col">
                      <div className=" py-5 text-[48px] ">
                        HIT ME UP!<br/> LETS TALK
                      </div>
                      <div className=" py-5 text-[18.34px]">
                        Feel free to leave a message via the form,<br/> or you can
                        get a hold of me at{" "}<br/>
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
                        <Input type="text" name="name" id="text" placeholder="Name" />
                      </div>
                      <div className="grid w-full max-w-sm items-center gap-1.5 py-5">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Email" />
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
                        <Button onClick={() => {
        toast({
          description: "Your message has been sent.",
        })
      }} className=" bg-customColor" type="submit" >Submit</Button>
                      </div>
                    </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
  );
};

export default ContactSection;
