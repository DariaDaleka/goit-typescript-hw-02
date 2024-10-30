import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';
import { Image, OnImageClick } from '../../types';


interface ImageGalleryProps {
  images: Image[];
  totalImages: number;
  hasSearched: boolean;
  openModal: OnImageClick;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  totalImages,
  hasSearched,
  openModal,
}) => {
  return (
    <>
      {totalImages === 0 && hasSearched && (
        <h2 className={s.warning}>Nothing found</h2>
      )}
      <ul className={s.list}>
        {images.map((image) => (
          <li key={image.id} className={s.item}>
            <ImageCard
              image={image}
              onClick={() => openModal(image)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;
