import React, { useEffect, useState } from "react";
import title from "@/assets/7007_title.svg";
import title_W from "@/assets/7007_title_W.svg";
import Image from "next/image";
import LaunchButton from "../Button/LaunchButton";
import HomePageBox from "@/components/AE/p5/HomePageBox";

interface Props {
  content: string;
  darkMode: boolean;
}

export default function LandingMobile({ content, darkMode }: Props) {
  return (
    <div className="relative z-20 flex h-[100dvh] flex-col items-center overflow-hidden bg-bgWhite transition-all dark:bg-black md:hidden">
      <div className="absolute top-[27%] z-20 flex w-full flex-col items-center gap-6">
        {darkMode ? (
          <Image src={title.src} alt="title" width={246} height={51} />
        ) : (
          <Image src={title_W.src} alt="title" width={246} height={51} />
        )}
        <div className="z-20 flex flex-col gap-6">
          <a className="max-w-[248px] whitespace-pre text-xs font-normal leading-[150%]">
            {content}
          </a>
          <LaunchButton title="launch app" classname="w-fit" isVisible={true} />
        </div>
      </div>
    </div>
  );
}
