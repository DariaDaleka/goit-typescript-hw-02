import { Images } from "../../types";

export interface AppImage extends Images {
  id: string; 
  urls: {
    small: string;   
    regular: string;
  };
  alt_description?: string; 
}

export interface FetchImagesResponse {
  results: AppImage[]; 
  total: number;      
}

export interface SearchBarProps {
  setQuery: (query: string) => void; 
}

export interface ImageGalleryProps {
  images: AppImage[];        
  totalImages: number;      
  hasSearched: boolean;     
  openModal: (image: AppImage) => void;
}

export interface ImageModalProps {
  isOpen: boolean;           
  closeModal: () => void;    
  image: AppImage | null;   
}

export interface LoadMoreBtnProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
