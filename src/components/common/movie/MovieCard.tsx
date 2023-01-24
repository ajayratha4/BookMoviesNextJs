import { movies } from "@/const";
import Image from "next/image";
import { Rating } from "@/components/common/icons";

const MovieCard = ({ movie }: any) => {
  const { title, year, image, imDbRating } = movie;

  return (
    <div className="w-60 px-2 py-1">
      <img
        alt={title}
        className="h-full w-full"
        src={image}
        placeholder="blur"
      />
      <p className="text-center">{title}</p>
      <div className="flex items-center justify-center">
        <Rating />
        <p className="text-center">{imDbRating}</p>
        <p className="text-center ml-1">({year})</p>
      </div>
    </div>
  );
};

export default MovieCard;
