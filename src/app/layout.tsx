import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head />
      <body>
        <div className="dark:bg dark:text-white flex flex-col h-full ">
          <div className="h-16 dark:border-b">
            <Header />
          </div>
          <div className="h-[calc(100%-64px)] flex ">
            <div className="flex sm:hidden md:hidden lg:flex dark:border-r w-1/6 h-full">
              <Sidebar />
            </div>
            <div className="h-full w-full">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
