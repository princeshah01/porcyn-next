export default function NoRightBarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="min-h-0 w-full">{children}</main>;
}
