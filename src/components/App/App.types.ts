// src/types/AppTypes.ts

export interface Image {
  url: string; // или другой тип, если у вас другой формат URL
  // Добавьте другие необходимые свойства, которые ожидает Image
}

export interface UnsplashImage {
  id: string;
  created_at: string;
  updated_at: string;
  // Дополнительные свойства UnsplashImage, если нужно
}

export interface UnsplashResponse {
  results: UnsplashImage[];
  total: number;
  total_pages: number;
}

export interface FetchImagesResponse {
  results: Image[]; // Здесь используется Image
  total: number;
  total_pages: number;
}
