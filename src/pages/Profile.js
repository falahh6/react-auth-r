import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./Profile.module.css";
const Profile = () => {
  const [Users, setUsers] = useState([]);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    axios
      .get("https://users-6b489-default-rtdb.firebaseio.com/NewUsers.json")
      .then((response) => {
        const fetchedUsers = [];
        for (let key in response.data) {
          fetchedUsers.push({
            ...response.data[key],
            id: key,
          });
        }
        setUsers(fetchedUsers);
      })
      .catch((error) => {
        console.log("error fetching users" + error);
      });
  }, []);

  const userlist = Users.map((user) => (
    <li className={styles.profileCard} key={user.userPassword}>
      <p>Name : {user.userName}</p>
      <p>Email : {user.userEmail}</p>
    </li>
  ));

  if (isLoggedIn) {
    return (
      <>
        <Helmet>
          <title>Profile</title>
        </Helmet>
        <div>
          {/* <p className={styles.statement}>
            User has been successfully authenticated
          </p>
          <hr /> */}
          <p className={styles.statement}>
            Below are all the users in the Data Base
          </p>
          <ul className={styles.profilesDoc}>{userlist}</ul>
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <p className={styles.statement}>
          Your are not loggedIn -{" "}
          <NavLink to="/login-user" className={styles.link}>
            Click here to login
          </NavLink>
        </p>
      </div>
    </>
  );
};

export default Profile;
