import Link from "next/link";

const Page = () => {
  return (
    <div className="bg-primary h-full text-white">
      <Link href={"/test"}>page</Link>
    </div>
  );
};

export default Page;
