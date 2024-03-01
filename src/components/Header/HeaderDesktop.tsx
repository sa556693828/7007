import React, { useContext, useEffect, useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import logo from "@/assets/Header/7007.png";
import logo_W from "@/assets/Header/7007_W.svg";
import { menuList } from "@/constants/menuList";
import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useRouter } from "next/router";

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
  const router = useRouter();
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
        className={`fixed left-[60px] top-[60px] z-40 hidden rotate-45 transition-opacity delay-100 duration-[1200ms] md:flex ${isVisible ? "opacity-100" : "opacity-0"}`}
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
                className={`absolute bottom-0 z-50 w-[45px] bg-black transition-[height] delay-100 duration-[1200ms] ${isVisible ? "h-[0px]" : "h-[89px]"}`}
              />
              <Image
                src={logo.src}
                alt="title"
                width={45}
                height={89}
                className={`${isVisible ? "opacity-100" : "opacity-0"} z-40 transition-all delay-100 duration-[1200ms]`}
                // onClick={() => route.replace("/")}
              />
            </>
          ) : (
            <>
              <div
                className={`absolute bottom-0 z-50 w-[45px] bg-bgWhite transition-[height] delay-100 duration-[1200ms] ${isVisible ? "h-[0px]" : "h-[89px]"}`}
              />
              <Image
                src={logo_W.src}
                alt="title"
                width={45}
                height={89}
                className={`${isVisible ? "opacity-100" : "opacity-0"} cursor-pointer transition-all delay-100 duration-[1200ms]`}
                onClick={() => router.push("/")}
              />
            </>
          )}
        </div>
        <div
          className={`z-50 flex flex-col text-right transition-all delay-100 duration-[1200ms] ${isVisible ? "gap-[30px] opacity-100" : "gap-[10px] opacity-0"}`}
        >
          {menuList.map((menu) => (
            <a
              className="z-50 cursor-pointer font-bold"
              key={menu.name}
              href={menu.id}
            >
              {menu.name}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-[18px] text-right">
          <div
            className={`flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-full border pt-[2px] transition-all delay-100 duration-[1200ms] ${isVisible ? "opacity-100" : "scale-50 opacity-0"} ${hoverTG ? "border-buttonGr shadow-buttonG " : "border-white"} bg-black`}
            onMouseEnter={() => setHoverTG(true)}
            onMouseLeave={() => setHoverTG(false)}
            onClick={() => openLink(socialLink[0].link)}
          >
            <FaTelegramPlane size={23} color={hoverTG ? "#B4FF78" : "white"} />
          </div>
          <div
            className={`flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-full transition-all delay-100 duration-[1200ms] ${isVisible ? "opacity-100" : "scale-50 opacity-0"} ${hoverX ? "bg-buttonGr shadow-buttonG" : "border border-white bg-white"}`}
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
