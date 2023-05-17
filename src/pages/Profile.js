// import { useAuth0 } from "@auth0/auth0-react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import styles from "./Profile.module.css";
// import PageAnimations from "../utils/PageAnimations";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";

const Profile = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // const { isAuthenticated, user, loginWithRedirect } = useAuth0();

  if (isLoggedIn) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Helmet>
            <title>Profile</title>
          </Helmet>
          {/* <div>
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
            `onClick={() => loginWithRedirect()}`
          </div> */}
          <p className={styles.statement}>
            User is Succesfully Authenticated and now can Access the NULL
            resources
          </p>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      <motion.div>
        <p className={styles.statement}>
          Your are not loggedIn -{" "}
          <NavLink to="/login-user" className={styles.link}>
            Click here to login
          </NavLink>
        </p>
      </motion.div>
    </AnimatePresence>
  );
};

export default Profile;
