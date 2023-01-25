import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  URLSearchParams;
  return (
    <html lang="en" className="dark">
      <head />
      <body>
        <div className="dark:bg dark:text-white flex flex-col h-full ">
          <div className="h-16 dark:border-b">
            <Header />
          </div>
          <div className="h-[calc(100%-64px)] flex">
            <div className="hidden lg:flex dark:border-r w-1/6 h-full">
              <Sidebar />
            </div>
            <div className="h-full w-full lg:w-[calc(100%-16%)] flex flex-col">
              <div className="h-full">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
