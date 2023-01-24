import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex">
      <div className="hidden lg:flex dark:border-r w-1/6 h-full">
        <Sidebar />
      </div>
      <div className="h-full w-full lg:w-[calc(100%-16%)] flex flex-col">
        <div className="h-full">{children}</div>
      </div>
    </div>
  );
}
