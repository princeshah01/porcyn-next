import { MobileSidebar, NavLinks } from "~/components/layout";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full">
      <MobileSidebar>
        <NavLinks />
      </MobileSidebar>
      <div className="flex min-h-screen pt-[84px] lg:pt-14">
        <aside className="border-border/80 hidden w-48 shrink-0 border-r lg:block">
          <div className="p-3">
            <NavLinks />
          </div>
        </aside>
        <main className="flex min-w-0 flex-1 justify-center">
          <div className="w-full max-w-5xl p-4">{children}</div>
        </main>
        <aside className="border-border/80 hidden w-64 shrink-0 border-l lg:block">
          <div className="text-muted-foreground p-4 text-sm">Right sidebar</div>
        </aside>
      </div>
    </div>
  );
}
