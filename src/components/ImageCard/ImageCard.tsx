'use client';
import Image from 'next/image';

type Props = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const ImageCard = ({ title, description, imageSrc, imageAlt }: Props) => {
  return (
    <div className="flex w-80 h-full flex-col items-center  rounded-lg  shadow-lg">
      <div className="relative w-full min-h-36">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain"
          objectFit='cover'
        />
      </div>
      <div className='p-11'>
        <h5 className="mb-4 font-proxima-nova text-xl font-medium text-center">{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ImageCard; 