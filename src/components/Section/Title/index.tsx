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
        <h2
          className={clsx(
            "font-proxima-nova mb-3 text-sm uppercase tracking-widest",
            color ? color : "text-gray-400"
          )}
        >
          {subtitle}
        </h2>
      </Animated>
      <Animated type="slide-in-left" delay={100}>
        <h3
          className={clsx(
            "text-4xl font-kumlien",
            color ? color : "text-[var(--color-primary)]"
          )}
        >
          {title}
        </h3>
      </Animated>
    </div>
  );
};

export default SectionTitle;
