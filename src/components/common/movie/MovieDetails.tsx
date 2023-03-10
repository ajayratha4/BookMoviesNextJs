/* eslint-disable @next/next/no-img-element */
"use client";
import Login from "@/components/Login";
import Modal from "@/components/Modal";
import { getUser } from "@/utils/user";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
    runtimeStr: string;
  };
}

const MovieDetails = ({ movie }: Props) => {
  const router = useRouter();
  const [modal, setModal] = useState(false);
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
    runtimeStr,
  } = movie;

  const bookMovie = () => {
    const user = getUser();

    if (user) {
      router.push("/movies/555/444");
    } else {
      setModal(true);
    }
  };
  return (
    <div className="h-full w-full  ">
      <div className="w-full h-full relative flex justify-center ">
        {/* <div className="w-full h-full ">
          <img
            className="h-full w-full object-cover opacity-60 dark:opacity-20"
            src={image}
          />
        </div> */}
        <div className="w-11/12 h-full absolute top-0 flex items-center gap-16 ">
          <img className="h-4/6 w-72 " src={image} />
          <div className="space-y-4">
            <p className="text-5xl font-bold">{fullTitle}</p>
            <p className="text-xl font-bold">Rating: {imDbRating}</p>
            <p className="text-xl">Genres: {genres}</p>
            <p className="text-xl">Stars: {stars}</p>
            <p className="text-xl">writers: {writers}</p>
            <p className="text-xl">Directors: {directors}</p>
            <p className="text-lg">Runtime: {runtimeStr}</p>
            <p className="text-lg">Plot: {plot}</p>
            <div>
              <div
                onClick={bookMovie}
                className=" cursor-pointer w-60 text-white bg-gradient-to-br from-primary to-secondary hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Book Ticket
              </div>
            </div>
          </div>
        </div>
      </div>

      {modal && (
        <Login
          open={modal}
          handleonSubmit={(data) => {
            document.cookie = `username=${data.username}`;
            router.push("/movies/555/444");
          }}
          handleClose={() => setModal(false)}
        />
      )}
    </div>
  );
};

export default MovieDetails;
