import React, { ReactNode } from "react";
import Container from "./Container";

interface Props {
  children: ReactNode;
  containerClassName?: string;
  sectionClassName?: string;
}

function Section({ children, containerClassName, sectionClassName }: Props) {
  return (
    <section className={`${containerClassName} py-10 w-full`}>
      <Container className={`${sectionClassName} py-6`}>{children}</Container>
    </section>
  );
}

export default Section;
