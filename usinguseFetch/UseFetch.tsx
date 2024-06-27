import { useState, useEffect, useCallback } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { RequestOptions } from './apiConfig';

interface FetchResult<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}

const useFetch = <T>(
  endpoint: string,
  requestOptions: RequestOptions,
): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const BASE_URL = 'http://20.51.188.89:5001/v1';

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const config: AxiosRequestConfig = {
        url: `${BASE_URL}${endpoint}`,
        ...requestOptions,
      };
      const response = await axios.request<T>(config);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [BASE_URL, endpoint, requestOptions]);

  useEffect(() => {
    fetchData(); // Initial fetch
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures it runs only once on mount

  const refetch = useCallback(() => {
    fetchData(); // Refetch function
  }, [fetchData]);

  return { data, isLoading, error, refetch };
};

export default useFetch;