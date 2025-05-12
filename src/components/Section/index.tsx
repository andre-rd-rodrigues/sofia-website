import React, { ReactNode } from 'react';
import Container from '../Container';
import clsx from 'clsx';
import SectionTitle from './Title';

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
    <section className={clsx(containerClassName, 'w-full py-10')} {...props}>
      <Container className={clsx(sectionClassName, 'py-6')}>
        {children}
      </Container>
    </section>
  );
}

Section.Title = SectionTitle;

export default Section;
