import { auth } from "~/auth";

interface ProfilePageProps {
  params: Promise<{ username: string }>;
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { username } = await params;
  const session = await auth();

  // Check if viewing own profile
  // TODO: Compare with actual username from database once set up
  const isOwnProfile = session?.user?.email === username; // Temporary check

  return (
    <div>
      <h1>Profile page: {username}</h1>
      <p>profile info</p>

      {/* Only show edit button if it's the user's own profile */}
      {isOwnProfile && session?.user && <button>Edit Profile</button>}

      {/* Show sign-in prompt for non-authenticated users on public profiles */}
      {!session?.user && (
        <p className="text-muted-foreground text-sm">
          <a href="/sign-in" className="underline">
            Sign in
          </a>{" "}
          to interact with this profile
        </p>
      )}
    </div>
  );
}
