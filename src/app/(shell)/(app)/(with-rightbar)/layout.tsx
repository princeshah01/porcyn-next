async function withRightBarLayout({ children }: { children: React.ReactNode }) {
  const { RightSideBar } = await import("~/shared/components/layout");
  return (
    <>
      <main className="flex w-screen flex-col items-center px-5 py-4 md:px-10 lg:w-[calc(100vw-30rem)] xl:w-[calc(100vw-34rem)] xl:px-20">
        {children}
      </main>
      <RightSideBar />
    </>
  );
}

export default withRightBarLayout;
