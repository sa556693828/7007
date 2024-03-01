import React, { useEffect, useRef, useState } from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

export default function Grid() {
  const ref = useRef<any>();
  const animation = "transition-all ease-grid duration-[800ms]";
  const [isBottom, setIsBottom] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const component = ref.current;
    const handleScroll = () => {
      if (!component) return;
      const componentBottom = component.offsetTop + component.clientHeight;
      const componentHalf = component.offsetTop + component.clientHeight / 1.1;
      const scrollPosition = window.scrollY + window.innerHeight;
      const isHalf = scrollPosition >= componentHalf;
      setIsVisible(isHalf);
      // setIsBottom(componentHalfMobile);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div ref={ref}>
      <Desktop isVisible={isVisible} animation={animation} />
      <Mobile isVisible={isVisible} animation={animation} />
    </div>
  );
}
