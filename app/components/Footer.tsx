import React from "react";
import * as FaIcons from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import * as MdIcons from "react-icons/md";

const Footer = () => {
  return (
    <div className=" bg-secondary">
      <div className=" w-[70%] h-[50dvh]  flex flex-col justify-center items-center mx-auto ">
        <div className=" flex flex-row space-x-10">
          <a href="https://www.instagram.com/Instagram/">
            <FaIcons.FaInstagram className="w-8 h-8" />
          </a>
          <a href="https://twitter.com/XSpaces">
            <FaXTwitter className="w-8 h-8" />
          </a>
          <a href="https://www.whatsapp.com/contact/?subject=messenger#:~:text=WhatsApp%20Messenger%20Support,Settings%20>%20Help%20>%20Contact%20Us.">
            <FaIcons.FaWhatsapp className="w-8 h-8" />
          </a>
        </div>
        <div className=" text-[18px] py-5">
          @2023 AMIAMIAMI. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
