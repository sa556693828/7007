import React from "react";
import Image from "next/image";
import black from "@/assets/PageAsset/black.svg";
import color from "@/assets/PageAsset/color.svg";
import LaunchButton from "../Button/LaunchButton";

interface Props {
  title?: string;
}

export default function Mobile({ title }: Props) {
  return (
    <>
      <div className="relative mb-[60px] mt-[18px] flex w-full lg:hidden">
        <Image
          src={color}
          width={283}
          height={125}
          alt="colorPart"
          className="img"
        />
        <Image
          src={black}
          width={310}
          height={72}
          alt="blackPart"
          className="absolute left-0 top-[26.32px]"
        />
      </div>
      <LaunchButton classname="lg:hidden" title="CONTACT US" isVisible={true} />
    </>
  );
}
