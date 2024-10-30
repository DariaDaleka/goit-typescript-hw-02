export interface Image {
  id: string;
  urls: {
    small: string; 
    regular: string; 
  };
  user: {
    name: string;    
  };
  likes?: number;           
  created_at?: string;      
  alt_description?: string; 
}


export interface FetchImagesResponse {
  results: Image[];      
  total: number;         
  total_pages: number;   
}


export type OnImageClick = (image: Image) => void;



export interface SearchBarProps {
  setQuery: (query: string) => void;
}

export interface ImageGalleryProps {
  images: Image[];                  
  totalImages: number;             
  hasSearched: boolean;           
  openModal: (image: Image) => void; 
}

export interface ImageModalProps {
  image: Image | null;              
  onClose: () => void;              
}

export interface LoadMoreBtnProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
