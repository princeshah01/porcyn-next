export type LayoutProps = Readonly<{
  params?: Promise<Record<string, string | string[]>>;
  children: React.ReactNode;
}>;
