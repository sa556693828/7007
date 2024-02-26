import React, { useEffect, useRef, useState } from "react";
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
      after: "bottom-[17%] left-[42%] rotate-0 z-10",
      width: 170,
    },
    {
      pic: art,
      alt: "art",
      before: "top-[40%] left-[20%] z-10 rotate-[100deg]",
      after: "top-[35%] left-[7%] z-10 rotate-0",
      width: 182,
    },
    {
      pic: creat,
      alt: "creat",
      before: "top-[30%] left-[31%] rotate-[120deg]",
      after: "top-[18%] left-[25%] rotate-0",
      width: 269,
    },
    {
      pic: idea,
      alt: "idea",
      before: "top-[32%] right-[44%] rotate-90",
      after: "top-[20%] right-[38%] rotate-0",
      width: 160,
    },
    {
      pic: model,
      alt: "model",
      before: "top-[30%] right-[20%] -rotate-[50deg]",
      after: "top-[18%] right-[8%] rotate-0",
      width: 415,
    },
    {
      pic: NFT,
      alt: "NFT",
      before: "bottom-[43%] right-[20%] rotate-[220deg]",
      after: "bottom-[31%] right-[10%] rotate-0",
      width: 174,
    },
    {
      pic: ownership,
      alt: "ownership",
      before: "bottom-[40%] left-[23%] rotate-[65deg]",
      after: "bottom-[21%] left-[15%] rotate-0",
      width: 351,
    },
    {
      pic: tokens,
      alt: "tokens",
      before: "bottom-[42%] right-[32%] -rotate-[70deg]",
      after: "bottom-[18%] right-[27%] rotate-0",
      width: 174,
    },
  ];
  const imgArrayM = [
    {
      pic: ai,
      alt: "ai",
      before: "top-[40%] right-[40%] z-10 rotate-90",
      after: "top-[40%] -right-[2%] rotate-0 z-10",
      width: 90,
    },
    {
      pic: art,
      alt: "art",
      before: "bottom-[42%] left-[15%] z-10 rotate-[90deg]",
      after: "bottom-[38%] -left-[4%] z-10 rotate-0",
      width: 95,
    },
    {
      pic: creat,
      alt: "creat",
      before: "top-[38%] left-[10%] rotate-[0deg]",
      after: "top-[30%] -left-[4%] rotate-0",
      width: 155,
    },
    {
      pic: idea,
      alt: "idea",
      before: "top-[34%] left-[44%] rotate-90",
      after: "top-[33%] left-[35%] rotate-0",
      width: 83,
    },
    {
      pic: model,
      alt: "model",
      before: "top-[40%] right-[10%] -rotate-[50deg]",
      after: "top-[26%] -right-[4%] rotate-0",
      width: 214,
    },
    {
      pic: NFT,
      alt: "NFT",
      before: "bottom-[43%] right-[17%] rotate-[70deg]",
      after: "bottom-[33%] right-[0%] rotate-0",
      width: 90,
    },
    {
      pic: ownership,
      alt: "ownership",
      before: "bottom-[40%] z-10 left-[17%] rotate-[200deg]",
      after: "bottom-[32%] z-10 left-[13%] rotate-0",
      width: 181,
    },
    {
      pic: tokens,
      alt: "tokens",
      before: "bottom-[42%] right-[32%] -rotate-[70deg]",
      after: "bottom-[30%] right-[24%] rotate-0",
      width: 90,
    },
  ];

  useEffect(() => {
    const component = ref.current;
    const handleScroll = () => {
      if (!component) return;
      const componentBottom = component.offsetTop + component.clientHeight;
      const componentHalf = component.offsetTop + component.clientHeight * 0.8;
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
      // if (isBottom) {
      //   window.removeEventListener("scroll", handleScroll);
      // }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="About"
      ref={ref}
      className="relative z-20 flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-white dark:bg-bgGrey"
    >
      <div
        className={`flex w-full flex-col items-center justify-center transition-all duration-[800ms] ${isScrolledToBottom ? "opacity-100" : "opacity-0"}`}
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
          classname={`hidden lg:block ${isScrolledToBottom ? img.after : img.before}`}
          pic={img.pic}
          alt={img.alt}
        />
      ))}
      {imgArrayM.map((img, index) => (
        <AnimateImg
          key={index}
          width={img.width ? img.width : 150}
          height={150}
          classname={`lg:hidden block ${isScrolledToBottom ? img.after : img.before}`}
          pic={img.pic}
          alt={img.alt}
        />
      ))}

      {/* <Image
        src={M_createFull}
        alt="createFull"
        width={448}
        height={368}
        className="absolute top-[45%] block -translate-y-[45%] lg:hidden"
      /> */}
    </div>
  );
}
