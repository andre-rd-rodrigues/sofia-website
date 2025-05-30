import { Icon } from '@iconify/react';
import React from 'react';
import Avatar from '../Avatar';
import { TestimonialType } from './Testimonials';

const Testimonial: React.FC<TestimonialType> = ({
  author,
  imageUrl,
  feedback,
  role,
}) => {
  return (
    <div className="flex">
      <div>
        <Icon
          icon="icomoon-free:quotes-left"
          fontSize={30}
          className="text-cyan"
        />
      </div>
      <div className="flex flex-col px-6 text-left">
        <p className=" mb-4">{feedback}</p>
        <div className="flex items-center">
          <Avatar imageUrl={imageUrl} alt={author} />
          <div className="ml-4">
            <p className=" font-semibold">{author}</p>
            <p className="text-zinc-400">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
