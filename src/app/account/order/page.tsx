import MovieCard from "@/components/common/movie/MovieCard";
import MovieDetailsSkeleton from "@/components/common/skeletons/MovieDetailsSkeleton";
import { movies } from "@/const";
import Link from "next/link";

const Page = () => {
  return (
    <div className="h-full w-full ">
      <MovieDetailsSkeleton />
    </div>
  );
};

export default Page;
