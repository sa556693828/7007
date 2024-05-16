import React, { useContext, useEffect, useRef, useState } from "react";
import LaunchButton from "../Button/LaunchButton";
import img from "@/assets/PageSign/7007img.svg";
import img_W from "@/assets/PageSign/7007img_W.svg";
import ai from "@/assets/PageSign/ai.svg";
import art from "@/assets/PageSign/art.svg";
import creat from "@/assets/PageSign/create.svg";
import idea from "@/assets/PageSign/idea.svg";
import model from "@/assets/PageSign/model.svg";
import NFT from "@/assets/PageSign/NFT.svg";
import ownership from "@/assets/PageSign/ownership.svg";
import tokens from "@/assets/PageSign/tokens.svg";
import Image from "next/image";
import { NFTContext } from "../Provider";

export default function Sign() {
  const { darkMode } = useContext(NFTContext);

  const title = `Be part\nof AI\nRevolution`;
  const content = `AI inference asset protocol on Ethereum`;
  const paddingTopValue = `calc(100vh * 0.18)`;
  const ref = useRef<any>();

  const [isBottom, setIsBottom] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const component = ref.current;
    const handleScroll = () => {
      if (!component) return;
      const componentBottom = component.offsetTop + component.clientHeight;
      const componentHalf = component.offsetTop + component.clientHeight / 2;
      const scrollPosition = window.scrollY + window.innerHeight;
      const isHalf = scrollPosition >= componentHalf;
      const isBottom = scrollPosition >= componentBottom;
      setIsVisible(isHalf);
      setIsBottom(isBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="z-20 flex h-full min-h-[100dvh] w-full flex-col items-center gap-[5%] overflow-hidden bg-white pb-[8%] dark:bg-bgGrey lg:min-h-full lg:flex-row lg:items-start lg:pl-[12%]"
      style={{ paddingTop: paddingTopValue }}
    >
      <div className="flex flex-col gap-6 whitespace-pre-wrap">
        <a
          className={`text-[35px] font-bold leading-none transition-all duration-[800ms] lg:max-w-full lg:text-[60px] ${isVisible ? "opacity-100" : "-translate-y-10 opacity-0"}`}
        >
          {title}
        </a>
        <a
          className={`text-xs uppercase leading-6 transition-all duration-[800ms] lg:text-lg ${isVisible ? "opacity-100" : "translate-x-10 opacity-0"}`}
        >
          {content}
        </a>
        <LaunchButton
          classname="mt-1 w-fit"
          title="Contact us"
          whiteBg={true}
          isVisible={isVisible}
          onClick={() => {
            window.open(
              "https://8ksjs0r1jhj.typeform.com/to/j2EGDUJC",
              "_blank",
            );
          }}
        />
      </div>
      {darkMode ? (
        <Image
          src={img}
          alt="img"
          width={546}
          height={546}
          className={`mt-[45px] px-10 transition-all delay-1000 duration-[800ms] lg:-mt-12 lg:px-0 ${isVisible ? "opacity-100" : "scale-50 opacity-0"}`}
        />
      ) : (
        <Image
          src={img}
          alt="img"
          width={546}
          height={546}
          className={`mt-[45px] px-10 transition-all delay-1000 duration-[800ms] lg:-mt-12 lg:px-0 ${isVisible ? "opacity-100" : "scale-50 opacity-0"}`}
        />
      )}
    </div>
  );
}
