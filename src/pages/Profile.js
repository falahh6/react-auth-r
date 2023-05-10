import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  let { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <p>loading...</p>;
  }
  isAuthenticated = true;
  return (
    <>
      <h1>Users</h1>
      {isAuthenticated && <p>User has been successfully authenticated</p>}
    </>
  );
};

export default Profile;
