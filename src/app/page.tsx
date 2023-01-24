import Button from "@/components/Button";
import MovieCard from "@/components/common/movie/MovieCard";
import { movies } from "@/const";
import Link from "next/link";

const Page = () => {
  return (
    <div className="h-full flex-col flex p-1">
      <div className="h-full overflow-auto flex flex-wrap justify-between gap-5">
        {movies.map((movie) => (
          <div key={movie.id} className="border">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
