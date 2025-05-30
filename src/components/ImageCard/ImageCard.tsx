'use client';
import clsx from 'clsx';
import Image from 'next/image';

type Props = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
};

const ImageCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  className,
}: Props) => {
  return (
    <div
      className={clsx(
        'flex h-full w-80 flex-col items-center overflow-hidden rounded-lg shadow-lg',
        className,
      )}
    >
      <div className="relative min-h-36 w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain"
          objectFit="cover"
        />
      </div>
      <div className="p-11">
        <h5 className="mb-4 text-center font-proxima-nova text-xl font-medium">
          {title}
        </h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;
