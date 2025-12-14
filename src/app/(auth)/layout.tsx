import { AuthComponents } from "~/components/sections";
import { LogoWithName } from "~/components/ui";
import { LayoutProps } from "~/types";

export default async function AuthLayout({ children }: LayoutProps) {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-sm px-6 py-6 min-h-80 border border-border bg-accent rounded-xl flex flex-col items-start gap-4">
        <LogoWithName className="text-accent-foreground" />
        <div className="w-full flex flex-1">{children}</div>
        <AuthComponents.SocialLogin />
      </div>
    </main>
  );
}
