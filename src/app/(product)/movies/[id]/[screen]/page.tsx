import Screen from "@/components/Screen";

interface Props {
  params: { screen: string };
}
const Page = ({ params }: Props) => {
  console.log(params.screen);

  const seatGroup = ["A", "B", "C", "D", "E", "F", "G"];
  const seatNo = [
    { id: 1, status: { A: 1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 1 } },
    { id: 2, status: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0 } },
    { id: 3, status: { A: 0, B: 1, C: 0, D: 1, E: 0, F: 0, G: 0 } },
    { id: 4, status: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0 } },
    { id: 5, status: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0 } },
    { id: 6, status: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0 } },
    { id: 7, status: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0 } },
    { id: 8, status: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0 } },
    { id: 9, status: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0 } },
    { id: 10, status: { A: 1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0 } },
    { id: 11, status: { A: 1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0 } },
    { id: 12, status: { A: 1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0 } },
    { id: 13, status: { A: 1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0 } },
    { id: 14, status: { A: 1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0 } },
    { id: 15, status: { A: 1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0 } },
  ];

  return (
    <div className="w-full h-full">
      <Screen seatGroup={seatGroup} seatNo={seatNo} />
    </div>
  );
};

export default Page;
