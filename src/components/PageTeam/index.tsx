import React, { useContext, useEffect, useRef, useState } from "react";
import eth from "@/assets/PageTeam/eth.svg";
import hyper from "@/assets/PageTeam/hyper.svg";
import story from "@/assets/PageTeam/story.svg";
import stratos from "@/assets/PageTeam/stratos.svg";
import eth_W from "@/assets/PageTeam/eth_W.svg";
import hyper_W from "@/assets/PageTeam/hyper_W.svg";
import story_W from "@/assets/PageTeam/story_W.svg";
import stratos_W from "@/assets/PageTeam/stratos_W.svg";
import Image from "next/image";
import { teamMember as team } from "@/constants/menuList";
import { NFTContext } from "../Provider";
import ShowMemberM from "./ShowMemberM";
import ShowMember from "./ShowMember";
import Selector from "./Selector";
type teamMember = (typeof team)[number]["id"];

export default function Team() {
  const { darkMode } = useContext(NFTContext);
  const ref = useRef<any>();
  const [select, setSelect] = useState<teamMember>("");
  const [isVisible, setIsVisible] = useState(false);
  const title = `Team`;
  const paddingTopValue = `calc(100vh * 0.18)`;

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
      // setIsBottom(isBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div
        ref={ref}
        className="z-20 flex h-full min-h-[100dvh] w-full bg-bgWhite px-10 pb-[8%] dark:bg-black lg:gap-[5%] lg:pl-[12%]"
        style={{ paddingTop: paddingTopValue }}
      >
        <div className="flex w-full flex-col lg:w-fit lg:gap-[100px]" id="Team">
          <div className="flex flex-col gap-6 lg:gap-[45px]">
            <a
              className={`text-[45px] font-bold leading-none transition-all duration-[800ms] lg:max-w-full lg:text-[60px] ${isVisible ? "opacity-100" : "-translate-y-10 opacity-0"}`}
            >
              {title}
            </a>
            <Selector
              selected={select}
              setSelect={setSelect}
              isVisible={isVisible}
            />
          </div>
          <ShowMemberM selected={select} />
          <div className="flex flex-col gap-[28px]" id="Partner">
            <a
              className={`text-[45px] font-bold leading-none transition-all duration-[800ms] lg:max-w-full lg:text-[60px] ${isVisible ? "opacity-100" : "-translate-y-10 opacity-0"}`}
            >
              partner
            </a>
            <div className="mb-3 flex flex-col gap-10 lg:mb-0 lg:flex-row">
              {darkMode ? (
                <>
                  <Image
                    src={story}
                    alt="story"
                    width={150}
                    height={50}
                    className={`transition-all delay-700 duration-[800ms] ${isVisible ? "opacity-100" : "scale-50 opacity-0"}`}
                  />
                  <Image
                    src={eth}
                    alt="eth"
                    width={150}
                    height={50}
                    className={`transition-all delay-700 duration-[800ms] ${isVisible ? "opacity-100" : "scale-50 opacity-0"}`}
                  />
                  <Image
                    src={hyper}
                    alt="hyper"
                    width={150}
                    height={50}
                    className={`transition-all delay-700 duration-[800ms] ${isVisible ? "opacity-100" : "scale-50 opacity-0"}`}
                  />
                </>
              ) : (
                <>
                  <Image
                    src={story_W}
                    alt="story"
                    width={150}
                    height={50}
                    className={`transition-all delay-700 duration-[800ms] ${isVisible ? "opacity-100" : "scale-50 opacity-0"}`}
                  />
                  <Image
                    src={eth_W}
                    alt="eth"
                    width={150}
                    height={50}
                    className={`transition-all delay-700 duration-[800ms] ${isVisible ? "opacity-100" : "scale-50 opacity-0"}`}
                  />
                  <Image
                    src={hyper_W}
                    alt="hyper"
                    width={150}
                    height={50}
                    className={`transition-all delay-700 duration-[800ms] ${isVisible ? "opacity-100" : "scale-50 opacity-0"}`}
                  />
                </>
              )}
            </div>
            {darkMode ? (
              <Image
                src={stratos}
                alt="stratos"
                width={150}
                height={50}
                className={`transition-all delay-700 duration-[800ms] ${isVisible ? "opacity-100" : "scale-50 opacity-0"}`}
              />
            ) : (
              <Image
                src={stratos_W}
                alt="stratos"
                width={240}
                height={50}
                className={`transition-all delay-700 duration-[800ms] ${isVisible ? "opacity-100" : "scale-50 opacity-0"}`}
              />
            )}
          </div>
        </div>
        <div className="hidden flex-col pt-1 lg:flex">
          <ShowMember selected={select} isVisible={isVisible} />
        </div>
      </div>
    </>
  );
}
