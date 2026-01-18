import { NavigationBar } from "~/shared/components/layout";
import type { LayoutProps } from "~/shared/types";

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
}
