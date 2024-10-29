import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import { fetchImages } from '../../services/api';
import { useEffect, useState } from 'react';
import { AppImage, FetchImagesResponse } from './App.types';

const App: React.FC = () => {
  const [images, setImages] = useState<AppImage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalImages, setTotalImages] = useState<number>(0);
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<AppImage | null>(null);

  useEffect(() => {
    if (!query) return;
    fetchImagesData(query, page);
  }, [query, page]);

  const fetchImagesData = async (query: string, page: number): Promise<void> => {
    setIsLoading(true);
    setIsError(false);

    try {
      const { results, total }: FetchImagesResponse = await fetchImages(query, page);
      setImages((prev) => [...prev, ...results]);
      setTotalImages(total);
    } catch (error) {
      console.error("Error while retrieving images:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
      setHasSearched(true);
    }
  };

  const handleSetQuery = (searchValue: string) => {
    setQuery(searchValue);
    resetState();
  };

  const resetState = (): void => {
    setImages([]);
    setPage(1);
  };

  const openModal = (image: AppImage): void => {
    setSelectedImage(image);
  };

  const closeModal = (): void => {
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar setQuery={handleSetQuery} />
      <ImageGallery
        images={images}
        totalImages={totalImages}
        hasSearched={hasSearched}
        openModal={openModal}
      />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images.length !== 0 && <LoadMoreBtn setPage={setPage} />}
      <ImageModal
        image={selectedImage} 
        onClose={closeModal}  
      />
    </>
  );
};

export default App;
