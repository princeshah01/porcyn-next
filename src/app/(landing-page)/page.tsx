import { Logo } from "~/assets/svg";

import { ThemeToggler } from "../../components/ui/toggle-theme";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="font-inter">Welcome to My Next.js App</h1>
      <p className="font-space-grotesk">
        This is a simple Next.js application.
      </p>
      <Logo className="w-32 h-32 mt-4 text-foreground" />
      <ThemeToggler />
    </div>
  );
}
