import { useState, useEffect } from "react";
import { CanceledError } from "axios";
import apiClient from "../api-client";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  result: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres")
      .then((res) => {
        setGenres(res.data.result);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
