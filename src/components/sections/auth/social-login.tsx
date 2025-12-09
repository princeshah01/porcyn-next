"use client";

import { toast } from "sonner";

import { GithubIcon, GoogleIcon } from "~/assets/svg";
import { Button } from "~/components/ui";

export function SocialLogin() {
  return (
    <div className="w-full flex justify-center items-start gap-2">
      <Button
        onClick={() => {
          toast.success("GitHub login is not implemented yet.");
        }}
        className="flex-1  rounded-xl text-xs"
      >
        <GithubIcon className="rounded-lg size-5" />
        <span className="font-semibold font-space-grotesk">
          Login with GitHub
        </span>
      </Button>
      <Button className="flex-1  rounded-xl text-xs">
        <GoogleIcon className="rounded-lg size-5" />
        <span className="font-semibold font-space-grotesk">
          Login with Google
        </span>
      </Button>
    </div>
  );
}
