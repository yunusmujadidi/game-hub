import { useState, useEffect } from "react";

function useGenres() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    // Your code to fetch genres goes here
    // For example:
    const fetchGenres = async () => {
      const response = await fetch("/api/genres");
      const data = await response.json();
      setGenres(data);
    };

    fetchGenres();
  }, []);

  return genres;
}

function GenreList() {
  const genres = useGenres();

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
}
