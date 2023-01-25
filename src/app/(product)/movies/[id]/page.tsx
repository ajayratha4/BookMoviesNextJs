import MovieDetails from "@/components/common/movie/MovieDetails";
import { movie } from "./const";

interface Props {
  params: { id: string };
}
const Page = ({ params }: Props) => {
  console.log(params.id);

  return (
    <div className="h-full w-full flex  flex-col">
      <div className="flex">
        <p className="h-14 p-2 text-3xl">Movie</p>
      </div>
      <div className="h-full overflow-auto flex flex-col">
        <MovieDetails movie={movie} />
      </div>
    </div>
  );
};

export default Page;
