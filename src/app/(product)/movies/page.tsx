import MovieCard from "@/components/common/movie/MovieCard";
import { movies } from "@/const";
import Link from "next/link";

const Page = () => {
  return (
    <div className="h-full flex-col flex ">
      <div className="flex">
        <p className="h-14 p-2 text-3xl">Top 250 movies</p>
      </div>
      <div className="h-full overflow-auto flex flex-wrap justify-between gap-5 px-2">
        {movies.map((movie) => (
          <Link
            href={`/movies/${movie.id}`}
            key={movie.id}
            className="border border-cyan-500 rounded p-1 "
          >
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
