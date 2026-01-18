export default async function ProfilePage({
  params,
}: {
  params: { username: string };
}) {
  const { username } = params;

  return (
    <div>
      <h1>Profile page: {username}</h1>
      <p>profile info</p>

      <button>Edit Profile</button>
    </div>
  );
}
