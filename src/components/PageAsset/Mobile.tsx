import React from "react";
import Image from "next/image";
import black from "@/assets/PageAsset/black.svg";
import color from "@/assets/PageAsset/color.svg";
import LaunchButton from "../Button/LaunchButton";

interface Props {
  isVisible: boolean;
}

export default function Mobile({ isVisible }: Props) {
  return (
    <>
      <div className="relative mb-[60px] mt-[18px] flex w-full lg:hidden">
        <Image
          src={color}
          width={283}
          height={125}
          alt="colorPart"
          className={`img transition-all duration-[800ms] ${isVisible ? "opacity-100" : "translate-x-10 opacity-0"}`}
        />
        <Image
          src={black}
          width={310}
          height={72}
          alt="blackPart"
          className={`absolute left-0 top-[26.32px] transition-all delay-700 duration-[800ms] ${isVisible ? "opacity-100" : "translate-x-10 opacity-0"}`}
        />
      </div>
      <LaunchButton
        classname="lg:hidden"
        title="CONTACT US"
        isVisible={true}
        onClick={() => {
          window.open("https://8ksjs0r1jhj.typeform.com/to/j2EGDUJC", "_blank");
        }}
      />
    </>
  );
}
