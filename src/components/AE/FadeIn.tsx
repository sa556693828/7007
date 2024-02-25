import React from "react";
import { useSpring, animated } from "@react-spring/web";

const FadeIn = ({ children, className }: any) => {
  const fadeInAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.div style={fadeInAnimation} className={className}>
      {children}
    </animated.div>
  );
};

export default FadeIn;
