import React from "react";
import { SkeletonImage } from "../icons";

const MovieSkeleton = () => {
  return (
    <div className="h-full overflow-auto flex flex-wrap justify-between gap-5 p-2">
      {[...Array(12)].map((_item, index) => (
        <div key={index} className="space-y-8 animate-pulse px-2 py-3">
          <div className="flex items-center justify-center h-48 bg-gray-300 rounded w-64 dark:bg-gray-700">
            <SkeletonImage />
          </div>
          <div className="w-full space-y-4">
            <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 "></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieSkeleton;
