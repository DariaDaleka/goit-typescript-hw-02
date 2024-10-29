import axios from "axios";
import { FetchImagesResponse } from "../types";

const API_KEY = "BVl0NxUwJPPInPMVHcKDYmrnuigLWBm5xogkbMKutO0";

interface FetchImagesParams {
  query: string;
  page?: number;
}

export const fetchImages = async (
  query: string,
  page: number = 1
): Promise<FetchImagesResponse> => {
  try {
    const response = await axios.get<FetchImagesResponse>(
      "https://api.unsplash.com/search/photos",
      {
        params: {
          query,
          client_id: API_KEY,
          page,
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
