"use client";
import { useEffect, useState } from "react";
import { PopupWidget, PopupButton, InlineWidget } from "react-calendly";
import ButtonApp from "@/components/Button";

type CalendlyProps = {
  format: "widget" | "text" | "inline";
};

const CalendarView: React.FC<CalendlyProps> = ({ format }) => {
  const [rootElement, setRootElement] = useState<Element | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const element = document.getElementById("calendly-modal");
      setRootElement(element);
    }
  }, []);

  const settings = {
    url: "https://calendly.com/andreptrodrigo",
    rootElement,
    text: "MAKE AN APPOINTMENT"
  };

  const calendlyElement = () => {
    switch (format) {
      case "widget":
        return <PopupWidget {...settings} />;

      case "text":
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

const Button = () => {
  return (
    <div className="relative">
      <ButtonApp label="appointment" />
      <CalendarView format="text" />
    </div>
  );
};

export { CalendarView, Button };
