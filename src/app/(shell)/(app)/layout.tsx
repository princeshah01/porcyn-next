import { LeftSideBar } from "~/shared/components/layout";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LeftSideBar />
      <div className="flex h-dvh flex-col pt-21 lg:pt-14 lg:pl-56">
        {children}
      </div>
    </>
  );
}
