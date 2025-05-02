"use client";
import { useEffect, useState } from "react";
import { PopupWidget, PopupButton, InlineWidget } from "react-calendly";
import ButtonApp from "@/components/Button";

type CalendlyProps = {
  format: "widget" | "text" | "inline";
  className?: string;
};

// styles on global.scss
const CalendarView: React.FC<CalendlyProps> = ({ format, className }) => {
  const [rootElement, setRootElement] = useState<Element | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const element = document.getElementById("calendly-modal");
      setRootElement(element);
    }
  }, []);

  const settings = {
    url: process.env.NEXT_PUBLIC_CALENDLY_URL!,
    rootElement,
    text: "MAKE AN APPOINTMENT",
    color: "#FD7959",
    className
  };

  const calendlyElement = () => {
    switch (format) {
      case "widget":
        // @ts-expect-error check later
        return <PopupWidget {...settings} />;

      case "text":
        // @ts-expect-error check later
        return <PopupButton {...settings} />;

      default:
        return <InlineWidget {...settings} />;
    }
  };

  return (
    <div className="calendar">
      {rootElement && calendlyElement()}
      <div id="calendly-modal" />
    </div>
  );
};

type ButtonProps = {
  className?: string;
};
const Button: React.FC<ButtonProps> = ({ className }) => {
  return (
    <div className={`relative block w-[220px] h-[54px] ${className}`}>
      <ButtonApp icon="ph:calendar-light" label="appointment" />
      <div className="absolute top-0 left-0">
        <CalendarView format="text" className="opacity-0 p-[1rem]" />
      </div>
    </div>
  );
};

export { CalendarView, Button };
