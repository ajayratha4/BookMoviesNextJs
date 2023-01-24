import Button from "@/components/Button";
import Link from "next/link";

const Page = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div>
        <Button>
          <Link href={"/test"}>page</Link>
        </Button>
      </div>
    </div>
  );
};

export default Page;
