import { NavigationBar } from "~/components/layout";
import type { LayoutProps } from "~/types";

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
}
