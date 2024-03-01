import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/assets/Header/M_logo.svg";
import M_logo_W from "@/assets/Header/M_logo_W.svg";
import { LuMenu } from "react-icons/lu";
import { RxCross2, RxDownload } from "react-icons/rx";
import { footerList } from "@/constants/menuList";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface Props {
  urlPath: string;
  darkMode: boolean;
  socialLink: any;
  openLink: (link: string) => void;
}

export default function Mobile({ darkMode, socialLink, openLink }: Props) {
  const [showMenu, setShowMenu] = useState(false);
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
      <div className="fixed z-50 w-full px-5 pt-5 md:hidden">
        <div
          className={`flex w-full items-center justify-between self-stretch`}
        >
          {darkMode ? (
            <Image
              src={logo}
              alt="7007"
              className="z-50"
              width={45}
              height={45}
            />
          ) : (
            <Image
              src={M_logo_W.src}
              alt="7007"
              className="z-50"
              width={45}
              height={45}
            />
          )}
          {showMenu ? (
            <RxCross2
              size="40px"
              onClick={() => setShowMenu(false)}
              className="z-50"
            />
          ) : (
            <LuMenu
              size="40px"
              color={darkMode ? "#FFF" : "#000"}
              onClick={() => setShowMenu(true)}
              className="z-50"
            />
          )}
          <div
            className={`fixed right-0 top-0 z-30 flex h-full w-full justify-center bg-black/70 px-10 pt-[120px] text-white transition-all duration-500 ease-linear ${
              showMenu ? "" : "-translate-y-full"
            }`}
          >
            <div className="flex h-full w-fit flex-col gap-[18px]">
              {footerList.map((item, index) => (
                <a
                  key={index}
                  className={`cursor-pointer text-2xl uppercase leading-[150%] transition-all delay-700 duration-[800ms] ${showMenu ? "opacity-100" : "-translate-y-5 opacity-0"}`}
                  href={item.link}
                  target={item.link.startsWith("#") ? "" : "_blank"}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-[50px] right-5 z-50 flex w-full justify-end md:hidden">
        <div className="z-50 flex flex-col gap-[18px] text-right">
          <div
            className={`flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-full border pt-[2px] delay-100 duration-[1200ms] ${isVisible ? "opacity-100" : "scale-50 opacity-0"} ${hoverTG ? "border-buttonGr shadow-buttonG" : "border-white"} bg-black transition-all`}
            onMouseEnter={() => setHoverTG(true)}
            onMouseLeave={() => setHoverTG(false)}
            onClick={() => openLink(socialLink[0].link)}
          >
            <FaTelegramPlane size={23} color={hoverTG ? "#B4FF78" : "white"} />
          </div>
          <div
            className={`flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-full delay-100 duration-[1200ms] ${isVisible ? "opacity-100" : "scale-50 opacity-0"} ${hoverX ? "bg-buttonGr shadow-buttonG" : "border border-white bg-white"} transition-all`}
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
