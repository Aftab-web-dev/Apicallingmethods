import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useState, useEffect, useCallback, useRef } from "react";
interface UseAxiosResult<T> {
  response: AxiosResponse<T> | null;
  error: any;
  loading: boolean;
  fetchData: (config: AxiosRequestConfig) => Promise<void>;
}

const useAxios = <T = any,>(): UseAxiosResult<T> => {
  const [response, setResponse] = useState<AxiosResponse<T> | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchData = useCallback(async (config: AxiosRequestConfig) => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();
    setLoading(true);

    try {
      const result = await axios({
        ...config,
        signal: abortControllerRef.current.signal, // pass the abort signal to axios
      });
      setResponse(result);
      setError(null);
    } catch (err) {
      if (axios.isCancel(err)) {
      } else {
        setError(err);
        setResponse(null); // only set to null if the error wasn't a cancellation
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(
    () => () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort(); // Cleanup to abort any residual requests.
      }
    },
    [],
  );

  return { response, error, loading, fetchData };
};

// mocks/useAxios.js
export const useAxiosMock = () => ({
  response: {
    data: {
      itinerary: {
        days: [],
      },
    },
  },
  error: null,
  fetchData: jest.fn(),
  loading: false, // Ensure all hook properties are represented
});

export default useAxios;