"use client";

import { signIn } from "next-auth/react";
import { toast } from "sonner";

import { ROUTES } from "~/shared/constants";

import { SocialButtons } from "./socialbuttons";
import { SOCIAL_AUTH_PROVIDERS } from "../constants";

export function SocialLogin() {
  const handleSocialLogin = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        callbackUrl: `${ROUTES.HOME}?provider=${provider}`,
      });
    } catch (error) {
      console.error(error);
      toast.error(
        error instanceof Error
          ? error.message
          : "An error occurred during signin. Please try again.",
      );
    }
  };
  return (
    <div className="flex w-full items-start justify-center gap-2">
      {SOCIAL_AUTH_PROVIDERS.map((button) => (
        <SocialButtons
          onClick={() => handleSocialLogin(button.name as "github" | "google")}
          key={button.name}
          {...button}
        />
      ))}
    </div>
  );
}
