import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';

interface Image {
  id: string;
  urls: {
    small: string,
    full: string,
  };
  alt_description: string | null;
}

interface ImageGalleryProps {
  images: Image[];
  totalImages: number;
  hasSearched: boolean;
  openModal: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  totalImages,
  hasSearched,
  openModal,
}) => {
  const handleImageClick = (image: Image) => {
    openModal(image);
  };

  return (
    <>
      {totalImages === 0 && hasSearched && (
        <h2 className={s.warning}>Nothing found</h2>
      )}
      <ul className={s.list}>
        {images.map(image => (
          <li key={image.id} className={s.item}>
            <ImageCard image={image} onClick={() => handleImageClick(image)} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;
