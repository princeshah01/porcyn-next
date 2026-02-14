import { ProfileSection } from "~/shared/components/profile-section";

import { LogoWithName, SearchButton } from "../ui";

const NavigationBar = () => {
  return (
    <nav className="bg-background border-border/80 fixed top-0 left-0 z-10 flex h-14 w-full items-center justify-center border-b">
      <div className="flex h-full w-full items-center justify-between px-8">
        <LogoWithName />
        <div className="mt-2 flex items-center" suppressHydrationWarning>
          <SearchButton onlyIcon />
          <ProfileSection />
        </div>
      </div>
    </nav>
  );
};
export { NavigationBar };
