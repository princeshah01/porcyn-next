"use client";

import { Settings } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";
import { toast } from "sonner";

import { ROUTES } from "~/shared/constants";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown";
import { Spinner } from "./ui/spinner-1";

export function ProfileSection() {
  const { data: session, status } = useSession();
  const params = useSearchParams();
  const provider = params.get("provider");

  // show toast if provider exists in url
  useEffect(() => {
    if (provider) {
      toast.success(`Successfully signed in with ${provider}`);
    }
  }, [provider]);

  return status === "loading" ? (
    <Spinner />
  ) : (
    <div>
      {!session ? (
        <Link href="/sign-in">
          <Button
            variant="default"
            className="rounded-lg text-xs md:text-sm"
            size="sm"
          >
            Join Porcyn
          </Button>
        </Link>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="border-border h-9 w-9 border-3">
              <AvatarImage
                src={session.user?.image || undefined}
                alt={session.user?.name || "User Avatar"}
              />
              <AvatarFallback>
                {session.user?.name?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-4">
            <DropdownMenuLabel>
              <div className="flex items-center gap-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src={session.user?.image || undefined}
                    alt={session.user?.name || "User Avatar"}
                  />
                  <AvatarFallback>
                    {session.user?.name?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-xs">{session.user?.name}</span>
                  <Link className="" href={ROUTES.ME}>
                    <span className="text-secondary-foreground text-[10px] underline-offset-2 hover:underline">
                      View Profile
                    </span>
                  </Link>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center gap-2">
                <Settings size={10} />
                <span className="text-xs">Settings</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button
                size="sm"
                className="w-full text-xs"
                onClick={() => signOut()}
              >
                Sign Out
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}
