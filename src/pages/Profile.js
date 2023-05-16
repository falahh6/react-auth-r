import { useAuth0 } from "@auth0/auth0-react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import styles from "./Profile.module.css";
const Profile = () => {
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();

  if (isAuthenticated) {
    return (
      <>
        <Helmet>
          <title>Profile</title>
        </Helmet>
        <div>
          <p className={styles.statement}>
            Below are all the users in the Data Base
          </p>
          <ul className={styles.profilesDoc}>
            <div>
              <img src={user.picture} alt={user.name} />
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          </ul>
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <p className={styles.statement}>
          Your are not loggedIn -{" "}
          <NavLink onClick={() => loginWithRedirect()} className={styles.link}>
            Click here to login
          </NavLink>
        </p>
      </div>
    </>
  );
};

export default Profile;
