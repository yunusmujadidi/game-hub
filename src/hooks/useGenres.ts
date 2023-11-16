
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Genre {
  _id: string;
  name: string;
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const { data } = await axios.get<Genre[]>('/api/genres');
      setGenres(data);
    };

    fetchGenres();
  }, []);

  return genres;
};

export default useGenres;
