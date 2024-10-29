import React from 'react';
import { Images, OnImageClick } from '../../types';
import s from './ImageCard.module.css';

interface ImageCardProps {
  image: Images;
  onClick: OnImageClick;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => (
  <div onClick={() => onClick(image)} className={s.imgWrapper}>
    <img
      src={image.urls.small}
      alt={image.alt_description || 'Image'}
      className={s.img}
      style={{ cursor: 'pointer' }}
    />
  </div>
);

export default ImageCard;
