import React, { useContext, useEffect, useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import logo from "@/assets/Header/7007.png";
import logo_W from "@/assets/Header/7007_W.svg";
import { menuList } from "@/constants/menuList";
import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface Props {
  urlPath: string;
  darkMode: boolean;
  socialLink: any;
  openLink: (link: string) => void;
}

export default function Desktop({
  urlPath,
  darkMode,
  socialLink,
  openLink,
}: Props) {
  const [hoverTG, setHoverTG] = useState(false);
  const [hoverX, setHoverX] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 2000);
  }, []);

  return (
    <>
      <BsChevronLeft
        size="22px"
        className={`fixed left-[60px] top-[60px] z-40 hidden rotate-45 transition-opacity duration-1000 md:flex ${isVisible ? "opacity-100" : "opacity-0"}`}
        color={darkMode ? "white" : "black"}
      />
      <div
        className="fixed right-[60px] top-[60px] z-50 hidden flex-col items-end justify-between md:flex"
        style={{
          height: "calc(100% - 160px)",
        }}
      >
        <div className="relative">
          {darkMode ? (
            <>
              <div
                className={`absolute bottom-0 z-50 w-[45px] bg-black transition-[height] duration-1000 ${isVisible ? "h-[0px]" : "h-[89px]"}`}
              />
              <Image
                src={logo.src}
                alt="title"
                width={45}
                height={89}
                className={`${isVisible ? "opacity-100" : "opacity-0"} transition-all duration-1000`}
              />
            </>
          ) : (
            <>
              <div
                className={`absolute bottom-0 z-50 w-[45px] bg-bgWhite transition-[height] duration-1000 ${isVisible ? "h-[0px]" : "h-[89px]"}`}
              />
              <Image
                src={logo_W.src}
                alt="title"
                width={45}
                height={89}
                className={`${isVisible ? "opacity-100" : "opacity-0"} transition-all duration-1000`}
              />
            </>
          )}
        </div>
        <div
          className={`flex flex-col text-right transition-all duration-1000 ${isVisible ? "gap-[30px] opacity-100" : "gap-[10px] opacity-0"}`}
        >
          {menuList.map((menu) => (
            <a className="font-bold" key={menu.name}>
              {menu.name}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-[18px] text-right">
          <div
            className={`flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-full border pt-[2px] transition-all duration-1000 ${isVisible ? "opacity-100" : "scale-50 opacity-0"} ${hoverTG ? "border-buttonGr shadow-buttonG " : "border-white"} bg-black transition-all`}
            onMouseEnter={() => setHoverTG(true)}
            onMouseLeave={() => setHoverTG(false)}
            onClick={() => openLink(socialLink[0].link)}
          >
            <FaTelegramPlane size={23} color={hoverTG ? "#B4FF78" : "white"} />
          </div>
          <div
            className={`flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-full transition-all duration-1000 ${isVisible ? "opacity-100" : "scale-50 opacity-0"} ${hoverX ? "bg-buttonGr shadow-buttonG" : "border border-white bg-white"} transition-all`}
            onMouseEnter={() => setHoverX(true)}
            onMouseLeave={() => setHoverX(false)}
            onClick={() => openLink(socialLink[1].link)}
          >
            <FaXTwitter size={25} color="black" />
          </div>
        </div>
      </div>
    </>
  );
}
