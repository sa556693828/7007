import React, { useContext, useEffect, useState } from "react";
import title from "@/assets/7007_title.svg";
import title_W from "@/assets/7007_title_W.svg";
import Image from "next/image";
import LaunchButton from "../Button/LaunchButton";
import { NFTContext } from "../Provider";
import HomePageBox from "@/components/AE/p5/HomePageBox";

interface Props {
  content: string;
  darkMode: boolean;
  openLink: (link: string) => void;
}

export default function LandingDesktop({ content, darkMode, openLink }: Props) {
  const { toggleDarkMode } = useContext(NFTContext);
  const [isVisible, setIsVisible] = useState(false);
  const [enableP5, setEnableP5] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
    setTimeout(() => {
      setEnableP5(true);
    }, 1000);
  }, []);

  return (
    <div className="z-20 hidden min-h-[100vh] w-full flex-col items-center gap-[50px] bg-bgWhite pr-44 pt-[250px] dark:bg-black md:flex">
      <div className="pointer-events-none relative z-10 h-[128px] w-[576px]">
        {darkMode ? (
          <>
            <div
              className={`absolute left-0 z-50 h-[128px] bg-black transition-[width] duration-[1200ms] ${isVisible ? "w-[0px]" : "w-[536px]"}`}
            />
            <div
              className={`absolute right-0 z-50 w-[40px] bg-black transition-[height] duration-[1200ms] ${isVisible ? "h-[0px]" : "h-[128px]"}`}
            />
            <Image
              src={title.src}
              alt="title"
              width={576}
              height={128}
              priority={true}
              className={`${isVisible ? "opacity-100" : "opacity-0"}  transition-all duration-[1200ms]`}
            />
          </>
        ) : (
          <>
            <div
              className={`absolute left-0 z-50 h-[128px] bg-bgWhite transition-[width] duration-[1200ms] ${isVisible ? "w-[0px]" : "w-[576px]"}`}
            />
            <Image
              src={title_W.src}
              alt="title"
              width={576}
              height={128}
              priority={true}
              className={`${isVisible ? "opacity-100" : "opacity-0"}  transition-all duration-[1200ms]`}
            />
          </>
        )}
      </div>
      <div className="flex flex-row items-end justify-between gap-6">
        <a
          className={`max-w-lg whitespace-pre font-normal leading-6 transition-all duration-[1200ms] ${isVisible ? "opacity-100" : "translate-x-10 opacity-0"} pointer-events-none z-20`}
        >
          {content}
        </a>
        <LaunchButton
          title="launch app"
          isVisible={isVisible}
          onClick={() => openLink("https://alpha.7007.studio")}
        />
      </div>
      {/* <button
        className="z-50 rounded-full bg-gray-300 px-4 py-2 focus:outline-none dark:bg-amber-500"
        onClick={() => toggleDarkMode()}
      >
        Toggle Dark Mode
      </button> */}
      <HomePageBox enable={enableP5} />
    </div>
  );
}
