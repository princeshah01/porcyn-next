export type LayoutProps = Readonly<{
  params?: Promise<Record<string, string | string[]>>;
  children: React.ReactNode;
}>;

export interface SearchParams {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}
