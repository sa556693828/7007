import React from "react";
import M_small from "@/assets/PageGrid/M_small.svg";
import small from "@/assets/PageGrid/small.svg";
import ETH from "@/assets/PageGrid/ETH.svg";
import full from "@/assets/PageGrid/full.svg";
import top from "@/assets/PageGrid/top.svg";
import bottom from "@/assets/PageGrid/bottom.svg";
import r1 from "@/assets/PageGrid/r1.svg";
import r2 from "@/assets/PageGrid/r2.svg";
import r3 from "@/assets/PageGrid/r3.svg";
import r4 from "@/assets/PageGrid/r4.svg";
import Image from "next/image";

interface Props {
  isVisible: boolean;
  animation: string;
}

export default function Desktop({ isVisible, animation }: Props) {
  return (
    <div className="z-20 hidden min-h-fit w-full lg:block">
      <div className="grid h-[50vh] w-full grid-cols-4">
        <div className="relative size-full bg-bgBlue font-bold text-white">
          <a
            className={`absolute left-[13.2%] top-[31%] text-[4.5vw] ${animation} ${isVisible ? "opacity-100" : "translate-x-12 opacity-0"}`}
          >
            E
          </a>
          <a
            className={`absolute left-[28.4%] top-[47%] text-[4.5vw] ${animation} ${isVisible ? "opacity-100" : "-translate-x-12 opacity-0"}`}
          >
            a
          </a>
          <a
            className={`absolute left-[53.8%] top-[62.9%] text-[4.5vw] ${animation} ${isVisible ? "opacity-100" : "translate-x-12 opacity-0"}`}
          >
            r
          </a>
          <a
            className={`absolute left-[70.1%] top-[78.9%] text-[4.5vw] ${animation} ${isVisible ? "opacity-100" : "-translate-x-12 opacity-0"}`}
          >
            n
          </a>
          <div
            className={`absolute bottom-8 left-8 rounded-full ring-[12px] ring-white ${animation} ${isVisible ? "h-[4.5vw] w-[4.5vw] opacity-100" : "h-[1vw] w-[1vw] opacity-0"}`}
          />
          <div
            className={`absolute left-[65.1%] top-[31%] bg-white ${animation} ${isVisible ? "h-[5vw] w-[5vw] rotate-90 opacity-100" : "h-[1vw] w-[1vw] opacity-0"}`}
          />
        </div>
        <div className="flex size-full items-end overflow-hidden bg-white">
          <Image
            src={ETH}
            alt="small"
            width={360}
            height={360}
            className={`h-auto w-full object-contain ${animation} ${isVisible ? "opacity-100" : "translate-x-full rotate-180 opacity-0"}`}
          />
        </div>
        <div className="relative flex size-full items-end justify-center bg-bgBlue">
          <div
            className={`absolute bottom-[34%] left-[14.4%] w-[9.9%] bg-white ${animation} ${isVisible ? "h-[34%] opacity-100" : "h-[0%] opacity-0"}`}
          ></div>
          <div
            className={`absolute bottom-[34%] left-[31.3%] w-[9.9%] border-[6px] border-white ${animation} ${isVisible ? "h-[34%] opacity-100" : "h-[0%] opacity-0"}`}
          ></div>
          <div
            className={`absolute bottom-[34%] right-[34%] w-[9.9%] rotate-[30deg] bg-white ${animation} ${isVisible ? "h-[34%] opacity-100" : "h-[0%] opacity-0"}`}
          ></div>
          <div
            className={`absolute bottom-[34%] right-[13.4%] w-[9.9%] bg-white ${animation} ${isVisible ? "h-[34%] opacity-100" : "h-[0%] opacity-0"}`}
          ></div>
          <a
            className={`text-[50px] font-bold text-white ${animation} ${isVisible ? "opacity-100" : "-translate-y-10 opacity-0"}`}
          >
            WHEN
          </a>
        </div>
        <div className="relative size-full h-full overflow-x-clip bg-bgBlue">
          <div className="h-[10vh] bg-white"></div>
          <div
            className={`triangle -z-1 absolute bottom-0 ${animation} ${isVisible ? "opacity-100" : "-translate-x-full opacity-20"}`}
          />
          <div
            className={`absolute bottom-0 z-10 h-[25vh] w-[25vh] rounded-full border-[6vh] border-white bg-black ${animation} ${isVisible ? "opacity-100" : "-translate-x-full opacity-20"}`}
          />
          <a
            className={`absolute right-[9.9%] top-[29.1%] whitespace-pre-wrap text-[50px] font-bold leading-none text-white ${animation} ${isVisible ? "opacity-100" : "-translate-y-12 opacity-0"}`}
          >{`yo\nur`}</a>
        </div>
      </div>
      <div className="grid h-[50vh] w-full grid-cols-4">
        <div className="relative size-full overflow-x-hidden bg-black">
          <div
            className={`absolute -right-20 -top-20 rounded-full border-[12px] border-white ${animation} ${isVisible ? "h-[15vw] w-[15vw] opacity-100" : "h-[1vw] w-[1vw] opacity-0"}`}
          />
          <Image
            src={full}
            alt="oo"
            width={309}
            height={290}
            className={`absolute right-0 top-[6%] z-10 size-[90%] object-contain ${animation} ${isVisible ? "opacity-100" : "-translate-y-full opacity-0"}`}
          />
        </div>
        <div className="relative flex size-full overflow-hidden bg-bgBlue text-[50px] font-bold text-white">
          <div className="flex w-full flex-col items-center gap-12 pt-[14%] text-left">
            <div
              className={`flex h-[14%] items-start bg-black pt-1 ${animation} ${isVisible ? "w-4/5" : "w-[0%]"}`}
            >
              <a
                className={`leading-none ${animation} ${isVisible ? "opacity-100" : " -translate-x-10 opacity-0"}`}
              >
                Been
              </a>
            </div>
            <div
              className={`flex h-[14%] items-start bg-black pt-1 ${animation} ${isVisible ? "w-4/5" : "w-[0%]"}`}
            >
              <a
                className={`leading-none ${animation} ${isVisible ? "opacity-100" : " -translate-x-10 opacity-0"}`}
              >
                used
              </a>
            </div>
            <div className="flex h-[14%] w-full justify-center">
              <div
                className={`flex items-start bg-black pt-1 ${animation} ${isVisible ? "w-2/5" : "w-[0%]"}`}
              >
                <a
                  className={`leading-none ${animation} ${isVisible ? "opacity-100" : " -translate-x-10 opacity-0"}`}
                >
                  to
                </a>
              </div>
              <div
                className={`h-full bg-white ${animation} ${isVisible ? "w-2/5" : "w-[0%]"}`}
              ></div>
            </div>
          </div>
        </div>
        <div className="size-full bg-white pb-[20%]">
          <div className="relative size-full overflow-hidden bg-black">
            <Image
              src={top}
              alt="top"
              width={309}
              height={290}
              className={`absolute w-full object-contain ${animation} ${isVisible ? "opacity-100" : "-translate-y-full opacity-0"}`}
            />
            <Image
              src={bottom}
              alt="bottom"
              width={309}
              height={290}
              className={`absolute -bottom-4 w-full object-contain ${animation} ${isVisible ? "opacity-100" : "translate-y-full opacity-0"}`}
            />
          </div>
        </div>
        <div className="flex size-full justify-end bg-bgBlue pr-12 pt-14">
          <div
            className={`relative flex w-full items-start justify-end overflow-hidden`}
          >
            <Image
              src={r1}
              alt="r1"
              width={45}
              height={45}
              className={`absolute object-contain ${animation} ${isVisible ? "right-[0%] opacity-100" : "right-[0%] opacity-0"}`}
            />
            <Image
              src={r2}
              alt="r2"
              width={45}
              height={45}
              className={`absolute object-contain ${animation} ${isVisible ? "right-[25%] opacity-100" : "right-[0%] opacity-0"}`}
            />
            <Image
              src={r3}
              alt="r3"
              width={45}
              height={45}
              className={`absolute object-contain ${animation} ${isVisible ? "right-[50%] opacity-100" : "right-[0%] opacity-0"}`}
            />
            <Image
              src={r4}
              alt="r4"
              width={45}
              height={45}
              className={`absolute object-contain ${animation} ${isVisible ? "right-[75%] opacity-100" : "right-[0%] opacity-0"}`}
            />
            <a
              className={`absolute bottom-[30%] right-0 text-right text-[50px] font-bold leading-tight text-white ${animation} ${isVisible ? "opacity-100" : "-translate-x-full opacity-0"}`}
            >{`content`}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
