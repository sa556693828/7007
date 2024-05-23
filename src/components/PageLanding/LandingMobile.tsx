import React, { useEffect, useState } from "react";
import title from "@/assets/7007_title.svg";
import title_W from "@/assets/7007_title_W.svg";
import Image from "next/image";
import LaunchButton from "../Button/LaunchButton";
import HomePageBox from "@/components/AE/p5/HomePageBox";

interface Props {
  content: string;
  darkMode: boolean;
  openLink: (link: string) => void;
}

export default function LandingMobile({ content, darkMode, openLink }: Props) {
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
    <div className="relative flex h-[100vh] flex-col items-center overflow-hidden bg-bgWhite transition-all dark:bg-black md:hidden">
      <div className="absolute top-[27%] z-20 flex w-full flex-col items-center gap-6">
        {darkMode ? (
          <div className="relative">
            <div
              className={`absolute left-0 z-50 h-[51px] bg-black transition-[width] duration-[1200ms] ${isVisible ? "w-[0px]" : "w-[236px]"}`}
            />
            <div
              className={`absolute right-0 z-50 w-[10px] bg-black transition-[height] duration-[1200ms] ${isVisible ? "h-[0px]" : "h-[51px]"}`}
            />
            <Image src={title.src} alt="title" width={246} height={51} />
          </div>
        ) : (
          <div className="relative">
            <div
              className={`absolute left-0 z-50 h-[51px] bg-bgWhite transition-[width] duration-[1200ms] ${isVisible ? "w-[0px]" : "w-[236px]"}`}
            />
            <div
              className={`absolute right-0 z-50 w-[10px] bg-bgWhite transition-[height] duration-[1200ms] ${isVisible ? "h-[0px]" : "h-[51px]"}`}
            />
            <Image src={title_W.src} alt="title" width={246} height={51} />
          </div>
        )}
        <div className="z-20 flex flex-col gap-6">
          <a
            className={`max-w-[248px] whitespace-pre text-xs font-normal leading-[150%] transition-all duration-[1200ms] ${isVisible ? "opacity-100" : "translate-x-10 opacity-0"} pointer-events-none`}
          >
            {content}
          </a>
          <LaunchButton
            title="launch app"
            classname="w-fit"
            isVisible={isVisible}
            onClick={() => openLink("https://app.7007.ai/")}
          />
        </div>
      </div>
      <HomePageBox enable={true} />
    </div>
  );
}
