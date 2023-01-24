interface Props {
  movie: {
    id: string;
    fullTitle: string;
    image: string;
    imDbRating: string;
    stars: string;
    writers: string;
    plot: string;
    directors: string;
    genres: string;
  };
}

const MovieDetails = ({ movie }: Props) => {
  const {
    id,
    fullTitle,
    image,
    imDbRating,
    stars,
    writers,
    plot,
    directors,
    genres,
  } = movie;
  return (
    <div className="h-full w-full  ">
      <div className="w-full h-full relative flex justify-center ">
        <div className="w-full h-full ">
          <img
            className="h-full w-full object-cover opacity-60 dark:opacity-20"
            src={image}
          />
        </div>
        <div className="w-11/12 h-full absolute top-0 flex items-center gap-16 ">
          <img className="h-4/6 w-72 " src={image} />
          <div className="space-y-4">
            <p className="text-5xl font-bold">{fullTitle}</p>
            <p className="text-xl font-bold">Rating: {imDbRating}</p>
            <p className="text-xl">Genres: {genres}</p>
            <p className="text-xl">Stars: {stars}</p>
            <p className="text-xl">writers: {writers}</p>
            <p className="text-xl">Directors: {directors}</p>
            <p className="text-lg">Plot: {plot}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;