"use client";
import React from "react";
import { useSpring, animated, useInView } from "@react-spring/web";

interface AnimatedProps {
  delay?: number;
  type?: "fade" | "slide-in-left" | "slide-in-right" | "slide";
  className?: string;
  children: React.ReactNode;
  config?: {
    config: {
      tension?: number;
      friction?: number;
    };
  };
}

const Animated = ({
  delay = 0,
  type = "fade",
  children,
  config,
  className,
}: AnimatedProps) => {
  const [ref, inView] = useInView({
    once: true,
  });

  const getTransformFrom = () => {
    switch (type) {
      case "slide-in-left":
        return "translateX(-20px)";
      case "slide-in-right":
        return "translateX(20px)";
      case "slide":
        return "translateY(-20px)";
      default:
        return "none";
    }
  };

  const getTransformTo = () => {
    switch (type) {
      case "slide-in-left":
        return "translateX(0px)";
      case "slide-in-right":
        return "translateX(0px)";
      case "slide":
        return "translateY(0px)";
      default:
        return "none";
    }
  };

  const props = useSpring({
    from: {
      opacity: 0,
      transform: getTransformFrom(),
    },
    to: async (next) => {
      if (inView) {
        await next({
          opacity: 1,
          transform: getTransformTo(),
        });
      }
    },
    config: { tension: 150, friction: 40 },
    delay,
    ...config,
  });

  return (
    <animated.div ref={ref} style={props} className={className}>
      {children}
    </animated.div>
  );
};

export default Animated;
