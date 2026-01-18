import { redirect } from "next/navigation";

import { auth } from "~/auth";

export default async function ProfileRedirect() {
  const session = await auth();

  // If user is not logged in, redirect to sign-in
  if (!session?.user) {
    redirect("/sign-in");
  }

  // TODO: Once you have username in session, redirect to their profile
  // For now, redirect to feed until user profile is set up
  redirect(`/profile/me`);
}
