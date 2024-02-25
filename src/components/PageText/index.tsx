import React, { useContext, useState } from "react";
import black from "@/assets/PageText/black.svg";
import text from "@/assets/PageText/text.svg";
import white from "@/assets/PageText/white.svg";
import M_all from "@/assets/PageText/M_all.svg";
import all from "@/assets/PageText/all.svg";
import all_W from "@/assets/PageText/all_W.svg";
import Image from "next/image";
import { NFTContext } from "../Provider";
import TextBox from "../AE/p5/TextBox";

export default function Text() {
  const { darkMode } = useContext(NFTContext);
  const [enableP5, setEnableP5] = useState(false);

  return (
    <>
      <div className="relative z-20 flex min-h-[100dvh] w-full flex-col items-center justify-center bg-white text-black dark:bg-bgWhite">
        <Image
          src={M_all}
          alt="M_all"
          width={1080}
          height={457}
          className="w-4/5 lg:hidden"
        />
        {darkMode ? (
          <Image
            src={all.src}
            alt="all"
            width={1080}
            height={457}
            className="z-20 hidden w-[75%] lg:block"
          />
        ) : (
          <Image
            src={all_W}
            alt="all"
            width={1080}
            height={457}
            className="z-20 hidden w-[75%] lg:block"
          />
        )}
        {/* <TextBox enable={true} /> */}
      </div>
    </>
  );
}
