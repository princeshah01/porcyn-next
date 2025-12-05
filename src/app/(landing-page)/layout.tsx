import { LandingLayout } from "~/components/layouts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LandingLayout>{children}</LandingLayout>;
}
