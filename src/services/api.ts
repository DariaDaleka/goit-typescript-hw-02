import axios, { AxiosResponse } from "axios";

const API_KEY = "BVl0NxUwJPPInPMVHcKDYmrnuigLWBm5xogkbMKutO0";

interface UnsplashImage {
  id: string;
  created_at: string;
  updated_at: string;
}

interface UnsplashResponse {
  results: UnsplashImage[];
  total: number;
  total_pages: number;
}

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

    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
