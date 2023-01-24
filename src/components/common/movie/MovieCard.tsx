import { movies } from "@/const";

const MovieCard = ({ movie }: any) => {
  const {
    id,
    rank,
    title,
    fullTitle,
    year,
    image,
    crew,
    imDbRating,
    imDbRatingCount,
  } = movie;
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

export default MovieCard;
