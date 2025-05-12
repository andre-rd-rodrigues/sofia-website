import { FC } from 'react';
import Container from '../Container';
import styles from './herosection.module.scss';

interface Props {
  imageSrc: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  overlayClassName?: string;
}

const HeroSection: FC<Props> = ({
  imageSrc,
  children,
  className,
  style,
  overlayClassName,
}: Props) => {
  const containerStyle = {
    background: imageSrc ? `url(${imageSrc}) no-repeat center center` : '',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    ...style,
  };

  return (
    <div className={`${styles.container} ${className}`} style={containerStyle}>
      <div
        className={`absolute inset-0 bg-black/90 opacity-30 ${overlayClassName}`}
      />
      <Container className={styles.content}>{children}</Container>
    </div>
  );
};

export default HeroSection;
