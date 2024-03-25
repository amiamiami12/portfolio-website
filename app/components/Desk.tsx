import React from "react";
import Image from "next/image";
import DeskImage from "../../public/assets/homepage/amidesk.png";

const Desk = () => {
  return (
    <div>
      <div className="fixed bottom-0 left-0 right-0 pointer-events-none ">
        <Image src={DeskImage} alt="desk absolute" />{" "}
      </div>
    </div>
  );
};

export default Desk;
