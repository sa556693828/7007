import React, { useContext, useEffect, useRef, useState } from "react";
import black from "@/assets/PageText/black.svg";
import text from "@/assets/PageText/text.svg";
import white from "@/assets/PageText/white.svg";
import M_all from "@/assets/PageText/M_all.svg";
import M_all_W from "@/assets/PageText/M_all_W.svg";
import all from "@/assets/PageText/all.svg";
import all_W from "@/assets/PageText/all_W.svg";
import Image from "next/image";
import { NFTContext } from "../Provider";
import TextBox from "../AE/p5/TextBox";

export default function Text() {
  const { darkMode } = useContext(NFTContext);
  const [enableP5, setEnableP5] = useState(false);
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
      setEnableP5(isHalf);
      setIsVisible(isHalf);
      setIsBottom(isBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div
        ref={ref}
        className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-white text-black dark:bg-bgWhite"
      >
        {darkMode ? (
          <Image
            src={M_all}
            alt="M_all"
            width={1080}
            height={457}
            className={`z-20 w-4/5 transition-all duration-[800ms] md:w-[60%] lg:hidden ${isVisible ? "opacity-100" : "opacity-0"}`}
          />
        ) : (
          <Image
            src={M_all_W}
            alt="M_all_W"
            width={1080}
            height={457}
            className={`z-20 w-4/5 transition-all duration-[800ms] md:w-[60%] lg:hidden ${isVisible ? "opacity-100" : "opacity-0"}`}
          />
        )}

        {darkMode ? (
          <Image
            src={all.src}
            alt="all"
            width={1080}
            height={457}
            className={`pointer-events-none z-20 hidden w-[75%] transition-all duration-[800ms] md:block ${isVisible ? "opacity-100" : "opacity-0"}`}
          />
        ) : (
          <Image
            src={all_W}
            alt="all"
            width={1080}
            height={457}
            className={`pointer-events-none z-20 hidden transition-all duration-[800ms] lg:block lg:w-[65%] xl:w-[73%] ${isVisible ? "opacity-100" : "opacity-0"}`}
          />
        )}
        <TextBox enable={true} />
      </div>
    </>
  );
}
