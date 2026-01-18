import { subscribeAction } from "~/actions";
import { MailIcon } from "~/assets/svg";
import { Button, Input } from "~/shared/components/ui";
import { cn } from "~/shared/lib";

export function NewsLetterSignup() {
  return (
    <section className="border-border/80 flex min-h-[60vh] w-full flex-col items-center border-t">
      <div className="border-border/80 flex w-full flex-1 flex-col items-center justify-center border-x p-8 md:w-5/6">
        <h2 className="text-muted-foreground font-space-grotesk text-sm tracking-normal">
          No noise. Just the good tech stuff.
        </h2>
        <h1 className="mt-2 text-xl md:text-2xl">Join the Porcyn Newsletter</h1>
        <p className="mt-3 text-center text-sm opacity-70 md:max-w-lg md:text-base">
          We don&apos;t promise enlightenment but you might learn something new,
          laugh at a bug, or find your next job. Developers before you took the
          leap. Respect.
        </p>
        <form action={subscribeAction} className="mt-8">
          <div className="flex gap-2">
            <Input
              name="email"
              type="email"
              required
              placeholder="john@example.com"
              className="border-border/80 placeholder:font-space-grotesk font-space-grotesk border text-sm md:min-w-[150px]"
            />

            <Button
              type="submit"
              className={cn(
                "bg-white text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900",
                "dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white",
                "border-border/80 border p-1!",
              )}
            >
              <MailIcon className="text-foreground size-8" />
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
