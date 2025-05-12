import React from "react";

interface TitleProps {
  src: string;
  title: string;
  subtitle?: string;
}

const Title: React.FC<TitleProps> = ({ src, title, subtitle }) => {
  return (
    <div
      className="relative flex h-64 w-full items-center justify-center bg-cover bg-center px-5 sm:px-28 md:justify-start"
      style={{
        background: `url(${src}) center/cover no-repeat`,
      }}
    >
      {/* Dark overlay for text contrast (optional) */}
      <div className="absolute inset-0 bg-emerald-950/45 backdrop-blur-sm" />

      {/* Text Container */}
      <div className="relative z-10 text-white">
        <h1 className="mt-5 text-4xl md:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-3 text-sm text-white/50 opacity-90 md:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default Title;
