// src/stores/useStore.ts
import create from 'zustand';
import { fetchData, fetchImages } from '../api/endpoints';

interface StoreState {
  data: any[];
  images: any[];
  loadingData: boolean;
  loadingImages: boolean;
  errorData: string | null;
  errorImages: string | null;
  fetchData: () => Promise<void>;
  fetchImages: () => Promise<void>;
}

const useStore = create<StoreState>((set) => ({
  data: [],
  images: [],
  loadingData: false,
  loadingImages: false,
  errorData: null,
  errorImages: null,
  fetchData: async () => {
    set({ loadingData: true, errorData: null });
    try {
      const data = await fetchData();
      set({ data, loadingData: false });
    } catch (error) {
      set({ errorData: error.message, loadingData: false });
    }
  },
  fetchImages: async () => {
    set({ loadingImages: true, errorImages: null });
    try {
      const images = await fetchImages();
      set({ images, loadingImages: false });
    } catch (error) {
      set({ errorImages: error.message, loadingImages: false });
    }
  },
}));

export default useStore;
