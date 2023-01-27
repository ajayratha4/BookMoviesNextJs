"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../Button";

interface Status {
  A: number;
  B: number;
  C: number;
  D: number;
  E: number;
  F: number;
  G: number;
}

interface SeatNo {
  id: number;
  status: Status;
}

interface Props {
  seatGroup: string[];
  seatNo: SeatNo[];
}
const Screen = ({ seatGroup, seatNo }: Props) => {
  const router = useRouter();

  const [seats, setSeats] = useState<{ id: number; group: string }[]>([]);

  const handleSeats = (isSelected: boolean, no: SeatNo, group: string) => {
    if (isSelected) {
      const index = seats.findIndex(
        (item) => item.id === no.id && item.group === group
      );
      const newArr = [...seats];
      newArr.splice(index, 1);
      setSeats(newArr);
    } else {
      setSeats((prev) => [...prev, { id: no.id, group }]);
    }
  };

  const bookMovie = () => {
    if (seats.length > 0) {
      router.push("/account/order");
    }
  };

  return (
    <div className="h-full w-full flex gap-8 justify-center items-center flex-col">
      <div className="flex flex-col gap-4">
        {seatGroup.map((row) => (
          <div className="flex gap-6" key={row}>
            <p className="w-8">{row}</p>
            <div className="flex gap-4">
              {seatNo.map((no, index) => {
                const checkIsSold = no.status[row as keyof typeof no.status];
                const checkIsSelected = Boolean(
                  seats.find((item) => item.id === no.id && item.group === row)
                );
                return (
                  <div
                    onClick={() => {
                      !checkIsSold && handleSeats(checkIsSelected, no, row);
                    }}
                    className={`border ${
                      checkIsSelected
                        ? "bg-primary"
                        : checkIsSold
                        ? "bg-gray-600"
                        : "bg-green-500"
                    }  rounded w-8 text-center`}
                    key={index + 1}
                  >
                    {no.id}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <div className="flex gap-2 items-center">
          <div className="h-4 w-4 bg-gray-600" />
          <p>Sold</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="h-4 w-4 bg-green-500" />
          <p>Available</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="h-4 w-4 bg-primary" />
          <p>Selected</p>
        </div>
        <p>Selected</p>
      </div>
      <div className="w-1/3 rounded h-5 bg-primary text-white flex items-center justify-center">
        <p>Screen</p>
      </div>

      <div
        onClick={bookMovie}
        className="cursor-pointer w-60 text-white bg-gradient-to-br from-primary to-secondary hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Book Ticket
      </div>
    </div>
  );
};

export default Screen;
