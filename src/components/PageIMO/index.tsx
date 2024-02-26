import React, { useContext, useEffect, useRef, useState } from "react";
import LaunchButton from "../Button/LaunchButton";
import flow from "@/assets/PageIMO/flow.svg";
import flow_W from "@/assets/PageIMO/flow_W.svg";
import M_flow from "@/assets/PageIMO/M_flow.svg";
import M_flow_W from "@/assets/PageIMO/M_flow_W.svg";
import Image from "next/image";
import { NFTContext } from "../Provider";

export default function IMO() {
  const { darkMode } = useContext(NFTContext);
  const title = `IMO`;
  const content = `Initial Model Offering:\n1. Mint Model Token from IMO\n2. Inference on-chain to Mint AI NFT\n3. Earn Revenue Share from Model Token`;
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
    <>
      <div
        id="imo"
        ref={ref}
        className="z-20 flex min-h-[100dvh] w-full flex-col items-center overflow-hidden bg-white pb-12 dark:bg-bgGrey lg:items-start lg:pl-[12%]"
        style={{ paddingTop: paddingTopValue }}
      >
        <div className="relative flex w-full items-end gap-[30px] pl-10 lg:pl-0">
          <a
            className={`text-[45px] font-bold leading-none transition-all duration-[800ms] lg:max-w-full lg:text-[60px] ${isVisible ? "opacity-100" : "translate-x-10 opacity-0"}`}
          >
            {title}
          </a>
          <LaunchButton
            classname="mb-[14px]"
            title="WHITE PAPER"
            isVisible={isVisible}
            whiteBg={true}
          />
        </div>
        <a
          className={`w-full max-w-[304px] whitespace-pre-wrap pb-[72px] pt-6 text-xs uppercase leading-[200%] transition-all duration-[800ms] lg:max-w-full lg:text-lg lg:leading-normal ${isVisible ? "opacity-100" : "translate-x-10 opacity-0"}`}
        >
          {content}
        </a>
        {darkMode ? (
          <Image
            src={flow}
            alt="flow"
            width={826}
            height={240}
            className={`hidden transition-all delay-500 duration-[800ms] lg:block ${isVisible ? "opacity-100" : "translate-x-10 opacity-0"}`}
          />
        ) : (
          <Image
            src={flow_W}
            alt="flow"
            width={826}
            height={240}
            className={`hidden transition-all delay-500 duration-[800ms] lg:block ${isVisible ? "opacity-100" : "translate-x-10 opacity-0"}`}
          />
        )}
        {darkMode ? (
          <Image
            src={M_flow}
            alt="M_flow"
            width={265}
            height={622}
            className={`block transition-all delay-500 duration-[800ms] lg:hidden ${isVisible ? "opacity-100" : "translate-x-10 opacity-0"}`}
          />
        ) : (
          <Image
            src={M_flow_W}
            alt="M_flow"
            width={265}
            height={622}
            className={`block transition-all delay-500 duration-[800ms] lg:hidden ${isVisible ? "opacity-100" : "translate-x-10 opacity-0"}`}
          />
        )}
      </div>
    </>
  );
}
