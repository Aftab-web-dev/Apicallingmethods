// src/api/endpoints.ts
import apiClient from './apiClient';

export const fetchData = async () => {
  const response = await apiClient.get('/data');
  return response.data;
};

export const fetchImages = async () => {
  const response = await apiClient.get('/images');
  return response.data;
};

// Add more API methods as needed
