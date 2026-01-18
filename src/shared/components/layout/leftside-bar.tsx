import { MobileSidebar } from "./mobile-sidebar";
import { SideBarContent } from "./nav-links";

const LeftSideBar = () => {
  return (
    <>
      <MobileSidebar>
        <SideBarContent />
      </MobileSidebar>
      <aside className="border-border/80 fixed top-14 hidden h-[calc(100vh-3.5rem)] w-56 border-r lg:block">
        <div className="size-full p-3">
          <SideBarContent />
        </div>
      </aside>
    </>
  );
};
export { LeftSideBar };
