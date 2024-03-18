import React, { ReactNode } from "react";
import Container from "./Container";

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  containerClassName?: string;
  sectionClassName?: string;
}

function Section({
  children,
  containerClassName,
  sectionClassName,
  ...props
}: Props) {
  return (
    <section className={`${containerClassName} py-10 w-full`} {...props}>
      <Container className={`${sectionClassName} py-6`}>{children}</Container>
    </section>
  );
}

export default Section;
