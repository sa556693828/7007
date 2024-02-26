import React, { useContext, useState } from "react";
import arrow from "@/assets/button_arrow.png";
import arrow_W from "@/assets/button_arrow_W.png";
import Image from "next/image";
import { NFTContext } from "../Provider";

interface Prop {
  classname?: string;
  title?: string;
  isVisible?: boolean;
  whiteBg?: boolean;
  onClick?: () => void;
}
export default function LaunchButton({
  classname,
  title,
  isVisible,
  whiteBg = false,
  onClick,
}: Prop) {
  const { darkMode } = useContext(NFTContext);
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`relative z-20 flex h-[22px] cursor-pointer items-center gap-[6px] px-2 transition-all duration-1000 ${hover ? "text-black dark:text-white" : "text-white dark:text-black"} ${isVisible ? "opacity-100" : "opacity-0"} ${classname}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      <div
        className={`absolute right-0 z-50 h-[22px] transition-all delay-200 duration-1000 ${whiteBg ? "bg-white" : "bg-bgWhite"} ${isVisible ? "w-0" : "w-64"}`}
      />
      <div
        className={`absolute right-0 h-full bg-black transition-all duration-[800ms] dark:bg-white ${hover ? "w-1" : "w-full"}`}
      />
      <a className="z-30 text-xs leading-6 lg:text-lg">{title}</a>
      {darkMode ? (
        <Image
          src={hover ? arrow_W.src : arrow.src}
          alt="title"
          width={21}
          height={21}
          className="z-30"
        />
      ) : (
        <Image
          src={hover ? arrow.src : arrow_W.src}
          alt="title"
          width={21}
          height={21}
          className="z-30"
        />
      )}
    </div>
  );
}
