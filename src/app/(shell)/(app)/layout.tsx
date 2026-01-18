import { LeftSideBar, RightSideBar } from "~/components/layout";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <LeftSideBar />
      {/* Main content */}
      <main className="absolute pt-21 lg:left-56 lg:pt-16">
        <div className="flex w-screen flex-col items-center px-5 py-4 md:px-10 lg:w-[calc(100vw-30rem)] xl:w-[calc(100vw-34rem)] xl:px-20">
          {children}
        </div>
      </main>
      <RightSideBar />
    </div>
  );
}
