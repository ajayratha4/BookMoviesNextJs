import React from "react";
import { SkeletonImage } from "../icons";

const MovieDetailsSkeleton = () => {
  return (
    <div className="h-full w-full  animate-pulse">
      <div className="w-full h-full relative flex justify-center ">
        <div className="w-11/12 h-full absolute top-0 flex items-center gap-16 ">
          <div className="flex items-center justify-center h-96 bg-gray-300 rounded w-64 dark:bg-gray-700">
            <SkeletonImage />
          </div>
          <div className="space-y-4 w-3/5">
            <div className="h-12 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsSkeleton;
