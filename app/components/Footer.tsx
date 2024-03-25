import React from "react";
import * as FaIcons from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import * as MdIcons from "react-icons/md";

const Footer = () => {
  return (
    <div className=" bg-secondary">
      <div className=" w-[70%] h-[50dvh] flex flex-col justify-center items-center mx-auto ">
        <div className=" flex flex-row">
          <FaIcons.FaInstagram className="w-8 h-8" />
          <FaXTwitter className="w-8 h-8" />
          <FaIcons.FaWhatsapp className="w-8 h-8" />
        </div>
        <div className=" text-[18px] py-2">
          @2023 AMIAMIAMI. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
