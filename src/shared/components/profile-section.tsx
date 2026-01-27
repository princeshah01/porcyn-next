"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

import { ROUTES } from "~/shared/constants";
import { cn, getUserEmailPrefix } from "~/shared/lib";

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
  return status === "loading" ? (
    <Spinner />
  ) : (
    <div className={cn("md:ml-8")}>
      {!session ? (
        <Link href={ROUTES.SIGN_IN}>
          <Button
            variant="default"
            className="rounded-lg text-xs md:text-sm"
            size="sm"
          >
            Join Porcyn
          </Button>
        </Link>
      ) : (
        <div className="flex items-center gap-2">
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
                    <Link
                      className=""
                      href={ROUTES.PROFILE(
                        getUserEmailPrefix(session.user?.email || ""),
                      )}
                    >
                      <span className="text-secondary-foreground text-[10px] underline-offset-2 hover:underline">
                        View Profile
                      </span>
                    </Link>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {/* <DropdownMenuItem>
              <Link href={ROUTES.SETTINGS} className="flex items-center gap-2">
              <Settings size={10} />
                <span className="text-xs">Settings</span>
              </Link>
            </DropdownMenuItem> */}
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
        </div>
      )}
    </div>
  );
}
