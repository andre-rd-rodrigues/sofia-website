import React from 'react';
import Image from 'next/image';

interface AvatarProps {
  imageUrl: string;
  alt: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl, alt, size = 90 }) => {
  return (
    <div
      className="relative"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <Image
        src={imageUrl}
        alt={alt}
        className="rounded-full"
        fill
        objectFit="cover"
      />
    </div>
  );
};

export default Avatar;
