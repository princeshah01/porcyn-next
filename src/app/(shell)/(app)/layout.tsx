import { LeftSideBar, RightSideBar } from "~/components/layout";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <LeftSideBar />
      <RightSideBar />
      {/* Main content */}
      <main className="absolute flex justify-center pt-21 lg:left-63.5 lg:pt-14">
        <div className="w-full max-w-5xl px-4">{children}</div>
      </main>
    </div>
  );
}
