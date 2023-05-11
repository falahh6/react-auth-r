import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./Profile.module.css";
const Profile = () => {
  const [Users, setUsers] = useState([]);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    axios
      .get("https://users-6b489-default-rtdb.firebaseio.com/users.json")
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
    <tr className={styles.userLI} key={user.id}>
      <td className={styles.td}>{user.userEmail}</td>
      <td className={styles.td}>{user.userPassword}</td>
    </tr>
  ));

  if (isLoggedIn) {
    return (
      <div>
        <p className={styles.statement}>
          User has been successfully authenticated
        </p>
        <hr />
        <p className={styles.statement}>
          Below are all the users in the DataBase
        </p>
        <table className={styles.userUL}>
          <tr>
            <th className={styles.td}>User Email</th>
            <th className={styles.td}>User Password</th>
          </tr>
          {userlist}
        </table>
      </div>
    );
  }

  return (
    <>
      <div>
        <p className={styles.statement}>
          Your are not loggedIn -{" "}
          <NavLink to="/onboarding" className={styles.link}>
            Click here to login
          </NavLink>
        </p>
      </div>
    </>
  );
};

export default Profile;
