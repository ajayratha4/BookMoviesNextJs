import "@/app/globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  URLSearchParams;
  return (
    <div className="dark:bg dark:text-white flex flex-col h-full ">
      <div className="h-full">{children}</div>
    </div>
  );
}
