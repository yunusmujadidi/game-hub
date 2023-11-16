import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenres();

  if (!genres) {
    // If genres is undefined or null, you might want to handle this case
    return <p>Loading genres...</p>;
  }

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
