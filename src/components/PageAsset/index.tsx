import React, { useEffect, useRef, useState } from "react";
import Mobile from "./Mobile";
import Image from "next/image";
import LaunchButton from "../Button/LaunchButton";
import black from "@/assets/PageAsset/black.svg";
import color from "@/assets/PageAsset/color.svg";
// import color from "@/assets/PageAsset/color.png";

export default function Asset() {
  const ref = useRef<any>();
  const title = `Inference asset`;
  const titleList = [
    `New asset\nclass : AI Models`,
    `New asset\nclass :\nAIGC NFT`,
    `New asset\nclass :\nEIP-7007`,
    // Add more titles as needed
  ];
  const mobileTitle = `Inference asset`;
  const paddingTopValue = `calc(100vh * 0.18)`;

  const [isBottom, setIsBottom] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [scrollToNextComponent, setScrollToNextComponent] = useState(false);
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

  useEffect(() => {
    if (scrollToNextComponent) {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titleList.length);
      setScrollToNextComponent(false);
    }
  }, [scrollToNextComponent]);

  // useEffect(() => {
  //   if (isBottom && !isFixed) {
  //     //我要固定在id為asset的div上
  //     ref.current.scrollIntoView({ behavior: "smooth", block: "start" });

  //     setIsFixed(true);
  //     document.body.style.overflow = "hidden";
  //   } else if (!isBottom && isFixed) {
  //     setIsFixed(false);
  //     document.body.style.overflow = "";
  //   }
  // }, [isBottom, isFixed]);

  // useEffect(() => {
  //   if (isFixed) {
  //     const handleTitleChange = () => {
  //       if (scrollToNextComponent) {
  //         setCurrentTitleIndex(
  //           (prevIndex) => (prevIndex + 1) % titleList.length,
  //         );
  //         setScrollToNextComponent(false);
  //       }
  //     };

  //     window.addEventListener("scroll", handleTitleChange);

  //     return () => window.removeEventListener("scroll", handleTitleChange);
  //   }
  // }, [isFixed, scrollToNextComponent, titleList.length]);

  return (
    <>
      <div
        ref={ref}
        id="Products"
        className="z-20 flex h-fit min-h-[100dvh] w-full flex-col items-start overflow-hidden bg-bgWhite pl-10 dark:bg-black lg:pl-[12%]"
        style={{ paddingTop: paddingTopValue }}
      >
        <div className="relative flex max-w-[791px] items-start whitespace-pre-wrap">
          <a
            className={`hidden text-[60px] font-bold leading-none transition-all duration-[800ms] lg:block ${isVisible ? "opacity-100" : "translate-x-10 opacity-0"}`}
          >
            {title}
          </a>
          <a
            className={`text-[36px] font-bold leading-none transition-all duration-[800ms] lg:hidden ${isVisible ? "opacity-100" : "translate-x-10 opacity-0"}`}
          >
            {mobileTitle}
          </a>
          <LaunchButton
            classname="hidden lg:flex min-w-[185px] ml-10"
            title="CONTACT US"
            isVisible={isVisible}
            onClick={() => {
              window.open(
                "https://8ksjs0r1jhj.typeform.com/to/j2EGDUJC",
                "_blank",
              );
            }}
          />
        </div>
        <Mobile isVisible={isVisible} />
        <div className="relative mt-[50px] hidden w-full lg:flex">
          <Image
            src={color}
            width={647}
            height={285}
            alt="colorPart"
            className={`absolute left-0 top-0 object-contain transition-all duration-[800ms] ${isVisible ? "opacity-100" : "translate-x-10 opacity-0"}`}
          />
          <Image
            src={black}
            width={707}
            height={165}
            alt="blackPart"
            className={`absolute left-0 top-[61px] transition-all delay-700 duration-[800ms] ${isVisible ? "opacity-100" : "translate-x-10 opacity-0"}`}
          />
        </div>
      </div>
    </>
  );
}
