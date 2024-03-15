import React from "react";
import Image from "next/image";

interface AvatarProps {
  imageUrl: string;
  alt: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl, alt, size = 20 }) => {
  return (
    <div className={`w-${size} h-${size} relative`}>
      <Image
        src={imageUrl}
        alt={alt}
        layout="fill"
        className="rounded-full"
        objectFit="cover"
      />
    </div>
  );
};

export default Avatar;
