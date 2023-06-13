import useGenre from "./hooks/useGenre";

const Genres = () => {
  const { genres } = useGenre();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default Genres;
