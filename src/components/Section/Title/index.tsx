"use client";
import React from "react";
import Animated from "@/components/Animated";
import clsx from "clsx";

type SectionTitleProps = {
  title: string;
  subtitle: string;
  className?: string;
  color?: string;
};

const SectionTitle = ({
  title,
  subtitle,
  className,
  color
}: SectionTitleProps) => {
  return (
    <div className={className}>
      <Animated type="slide-in-left">
        <h3
          className={clsx(
            "font-proxima-nova mb-3 text-sm uppercase tracking-widest",
            color ? color : "text-gray-400"
          )}
        >
          {subtitle}
        </h3>
      </Animated>
      <Animated type="slide-in-left" delay={100}>
        <h2
          className={clsx(
            "text-3xl sm:text-5xl",
            color ? color : "text-[var(--color-primary)]"
          )}
        >
          {title}
        </h2>
      </Animated>
    </div>
  );
};

export default SectionTitle;
