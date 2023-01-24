import MovieCard from "@/components/common/movie/MovieCard";
import { movies } from "@/const";

const Page = () => {
  return (
    <div className="h-full flex-col flex ">
      <div className="h-full overflow-auto flex flex-wrap justify-between gap-5 p-2">
        {movies.map((movie) => (
          <div key={movie.id} className="border border-cyan-500 rounded p-1 ">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
