import { SocialLogin } from "~/features/auth";
import { LogoWithName } from "~/shared/components/ui";
import { LayoutProps } from "~/shared/types";

export default async function AuthLayout({ children }: LayoutProps) {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="border-border bg-background flex min-h-80 w-full max-w-sm flex-col items-start gap-6 rounded-xl border px-6 py-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <LogoWithName className="text-accent-foreground" />
        <div className="flex w-full flex-1">{children}</div>
        <SocialLogin />
      </div>
    </main>
  );
}
