import React, { useState } from "react";
import allText from "@/assets/Footer/allText.png";
import Image from "next/image";
import { footerList } from "@/constants/menuList";
import grid1 from "@/assets/Footer/grid1.svg";
import grid2 from "@/assets/Footer/grid2.svg";
import grid3 from "@/assets/Footer/grid3.svg";
import grid4 from "@/assets/Footer/grid4.svg";
import grid5 from "@/assets/Footer/grid5.svg";
import grid6 from "@/assets/Footer/grid6.svg";

interface Props {
  urlPath?: string;
}

export default function Desktop({ urlPath }: Props) {
  const imgArr = [
    { img: grid1, w: 270, h: 20 },
    { img: grid2, w: 100, h: 20 },
    { img: grid3, w: 50, h: 20 },
    { img: grid4, w: 130, h: 20 },
    { img: grid5, w: 130, h: 20 },
    { img: grid6, w: 50, h: 20 },
  ];
  return (
    <div className="hidden w-full flex-col gap-[50px] pb-[130px] pl-[90px] pt-[119px] text-black lg:flex">
      <div className="flex w-[80%] max-w-[1160px] flex-col gap-4">
        <div className="flex w-full items-center gap-4">
          <a
            className="cursor-pointer text-[2.4vw] font-normal uppercase leading-[133%]"
            href={footerList[0].link}
            target={footerList[0].link.startsWith("#") ? "" : "_blank"}
          >
            {footerList[0].name.replace(" ", "")}
          </a>
          <Image
            src={imgArr[0].img}
            alt="grid"
            width={imgArr[0].w}
            height={imgArr[0].h}
            className="flex-1"
          />
          <a
            className="cursor-pointer text-[2.5vw] font-normal uppercase leading-[133%]"
            href={footerList[1].link}
            target={footerList[1].link.startsWith("#") ? "" : "_blank"}
          >
            {footerList[1].name.replace(" ", "")}
          </a>
        </div>
        <div className="flex w-full items-center gap-4">
          <Image
            src={imgArr[1].img}
            alt="grid"
            width={imgArr[1].w}
            height={imgArr[1].h}
            className="flex-1"
          />
          <a
            className="cursor-pointer text-[2.5vw] font-normal uppercase leading-[133%]"
            href={footerList[2].link}
            target={footerList[2].link.startsWith("#") ? "" : "_blank"}
          >
            {footerList[2].name.replace(" ", "")}
          </a>
          <Image
            src={imgArr[2].img}
            alt="grid"
            width={imgArr[2].w}
            height={imgArr[2].h}
          />
          <a
            className="cursor-pointer text-[2.5vw] font-normal uppercase leading-[133%]"
            href={footerList[3].link}
            target={footerList[3].link.startsWith("#") ? "" : "_blank"}
          >
            {footerList[3].name.replace(" ", "")}
          </a>
          <Image
            src={imgArr[3].img}
            alt="grid"
            width={imgArr[3].w}
            height={imgArr[3].h}
            className="flex-1"
          />
          <a
            className="cursor-pointer text-[2.4vw] font-normal uppercase leading-[133%]"
            href={footerList[4].link}
            target={footerList[4].link.startsWith("#") ? "" : "_blank"}
          >
            {footerList[4].name.replace(" ", "")}
          </a>
        </div>
        <div className="flex w-full items-center gap-4">
          <Image
            src={imgArr[4].img}
            alt="grid"
            width={imgArr[4].w}
            height={imgArr[4].h}
            className="flex-1"
          />
          <a
            className="cursor-pointer text-[2.7vw] font-normal uppercase leading-[133%]"
            href={footerList[5].link}
            target={footerList[5].link.startsWith("#") ? "" : "_blank"}
          >
            {footerList[5].name.replace(" ", "")}
          </a>
          <Image
            src={imgArr[5].img}
            alt="grid"
            width={imgArr[5].w}
            height={imgArr[5].h}
          />
          <a
            className="cursor-pointer text-[2.5vw] font-normal uppercase leading-[133%]"
            href={footerList[6].link}
            target={footerList[6].link.startsWith("#") ? "" : "_blank"}
          >
            {footerList[6].name.replace(" ", "")}
          </a>
        </div>

        {/* {footerList.map((item, index) => (
          <>
            <a
              key={index}
              className="cursor-pointer text-[30px] font-normal uppercase leading-[133%]"
              href={item.link}
              target={item.link.startsWith("#") ? "" : "_blank"}
            >
              {item.name.replace(" ", "")}
            </a>
            {index !== footerList.length - 1 && (
              <Image
                src={imgArr[index]?.img}
                alt="grid"
                width={imgArr[index]?.w}
                height={imgArr[index]?.h}
              />
            )}
          </>
        ))} */}
      </div>
      <div className="flex flex-col gap-[18px]"></div>
      <a className="flex text-lg font-bold">Lab7007 © All rights reserved.</a>
    </div>
  );
}
