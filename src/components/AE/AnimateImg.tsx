import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Props {
  width: number;
  height: number;
  classname: string;
  pic: string;
  alt: string;
}

export default function AnimateImg({
  width,
  height,
  classname,
  pic,
  alt,
}: Props) {
  return (
    <Image
      src={pic}
      alt={alt ? alt : "animateImg"}
      width={width}
      height={height}
      className={`absolute transition-all duration-[800ms] ${classname}`}
    />
  );
}
