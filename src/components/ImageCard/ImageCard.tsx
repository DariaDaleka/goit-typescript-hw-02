import React from 'react';
import s from './ImageCard.module.css';

interface ImageProps {
  image: {
    id: string;
    urls: {
      small: string;
    };
    alt_description: string;
  };
  onClick: () => void;
}

const ImageCard: React.FC<ImageProps> = ({ image, onClick }) => {
  return (
    <div onClick={onClick}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        key={image.id}
        style={{ cursor: 'pointer' }}
        className={s.img}
      />
    </div>
  );
};

export default ImageCard;
