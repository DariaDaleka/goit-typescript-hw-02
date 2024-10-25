import axios, { AxiosResponse } from "axios";

// Ваш API ключ
const API_KEY = "BVl0NxUwJPPInPMVHcKDYmrnuigLWBm5xogkbMKutO0";

// Интерфейс для изображения Unsplash
interface UnsplashImage {
  id: string;
  created_at: string;
  updated_at: string;
  // Добавьте свойство urls для получения URL изображений
  urls: {
    small: string; // или другие размеры, которые вам нужны
    // Другие размеры, если необходимо
  };
}

// Интерфейс для ответа от API Unsplash
interface UnsplashResponse {
  results: UnsplashImage[];
  total: number;
  total_pages: number;
}

// Функция для получения изображений
export const fetchImages = async (
  query: string,
  page: number = 1
): Promise<UnsplashResponse> => {
  try {
    const response: AxiosResponse<UnsplashResponse> = await axios.get(
      `https://api.unsplash.com/search/photos`,
      {
        params: {
          query: query,
          client_id: API_KEY,
          page: page,
          per_page: 16,
        },
      }
    );

    return response.data; // Возвращаем данные
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
