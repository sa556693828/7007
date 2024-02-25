import React, { useEffect, useRef, useState } from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import createFull from "@/assets/PageCreate/createFull.svg";
import M_createFull from "@/assets/PageCreate/M_createFull.svg";
import ai from "@/assets/PageCreate/ai.svg";
import art from "@/assets/PageCreate/art.svg";
import creat from "@/assets/PageCreate/creat.svg";
import idea from "@/assets/PageCreate/idea.svg";
import model from "@/assets/PageCreate/model.svg";
import NFT from "@/assets/PageCreate/NFT.svg";
import ownership from "@/assets/PageCreate/ownership.svg";
import tokens from "@/assets/PageCreate/tokens.svg";
import Image from "next/image";
import AnimateImg from "../AE/AnimateImg";

export default function Create() {
  const title = `creator centric`;
  const content = `ai model + aigc nft = 7007`;
  const ref = useRef<any>();
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  const imgArray = [
    {
      pic: ai,
      alt: "ai",
      before: "bottom-[40%] left-[40%] z-10 rotate-90",
      after: "bottom-[24%] left-[42%] rotate-0 z-10",
      width: 170,
    },
    {
      pic: art,
      alt: "art",
      before: "top-[40%] left-[20%] z-10 rotate-[100deg]",
      after: "top-[38%] left-[10%] z-10 rotate-0",
      width: 182,
    },
    {
      pic: creat,
      alt: "creat",
      before: "top-[30%] left-[31%] rotate-[120deg]",
      after: "top-[25%] left-[25%] rotate-0",
      width: 269,
    },
    {
      pic: idea,
      alt: "idea",
      before: "top-[32%] right-[44%] rotate-90",
      after: "top-[30%] right-[38%] rotate-0",
      width: 160,
    },
    {
      pic: model,
      alt: "model",
      before: "top-[30%] right-[20%] -rotate-[50deg]",
      after: "top-[26%] right-[8%] rotate-0",
      width: 415,
    },
    {
      pic: NFT,
      alt: "NFT",
      before: "bottom-[43%] right-[20%] rotate-[220deg]",
      after: "bottom-[35%] right-[10%] rotate-0",
      width: 174,
    },
    {
      pic: ownership,
      alt: "ownership",
      before: "bottom-[40%] left-[23%] rotate-[65deg]",
      after: "bottom-[30%] left-[15%] rotate-0",
      width: 351,
    },
    {
      pic: tokens,
      alt: "tokens",
      before: "bottom-[42%] right-[32%] -rotate-[70deg]",
      after: "bottom-[30%] right-[27%] rotate-0",
      width: 174,
    },
  ];

  useEffect(() => {
    const component = ref.current;
    const handleScroll = () => {
      if (!component) return;
      const componentBottom = component.offsetTop + component.clientHeight;
      const componentHalf = component.offsetTop + component.clientHeight - 50;
      const scrollPosition = window.scrollY + window.innerHeight;
      const isBottom = scrollPosition >= componentBottom;
      const isHalf = scrollPosition >= componentHalf;
      // console.log("isBottom", isBottom);
      // console.log("isHalf", isHalf);
      setIsScrolledToBottom(isHalf);
      if (isHalf) {
        //go to bottom
        // component.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="relative z-20 flex min-h-[100dvh] w-full flex-col items-center justify-center bg-white dark:bg-bgGrey"
    >
      <div
        className={`flex w-full flex-col items-center justify-center transition-all duration-700 ${isScrolledToBottom ? "opacity-100" : "opacity-0"}`}
      >
        <a className="max-w-xs text-center text-[45px] font-bold lg:max-w-full lg:text-[60px]">
          {title}
        </a>
        <a className="text-xs font-bold uppercase leading-[200%] lg:text-2xl lg:leading-normal">
          {content}
        </a>
      </div>
      {imgArray.map((img, index) => (
        <AnimateImg
          key={index}
          width={img.width ? img.width : 150}
          height={150}
          classname={`${isScrolledToBottom ? img.after : img.before}`}
          pic={img.pic}
          alt={img.alt}
        />
      ))}
      {/* <Image
        src={createFull}
        alt="createFull"
        width={1200}  
        height={600}
        className="absolute top-[55.5%] hidden -translate-y-[55.5%] lg:block"
      /> */}
      <Image
        src={M_createFull}
        alt="createFull"
        width={448}
        height={368}
        className="absolute top-[45%] block -translate-y-[45%] lg:hidden"
      />
    </div>
  );
}
