import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Profile.module.css";
const Profile = () => {
  let { isLoading, isAuthenticated } = useAuth0();
  const [Users, setUsers] = useState([]);

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

  if (isLoading) {
    return <p className={styles.statement}>loading...</p>;
  }

  isAuthenticated = true;

  const userlist = Users.map((user) => (
    <li className={styles.userLI} key={user.id}>
      <p>E-Mail : {user.userEmail}</p>
      <p>Passowrd : {user.userPassword}</p>
    </li>
  ));

  return (
    <>
      {/* <h1>Users</h1> */}
      {isAuthenticated && (
        <p className={styles.statement}>
          User has been successfully authenticated
        </p>
      )}
      <hr />
      <p className={styles.statement}>
        Below are all the users in the DataBase
      </p>
      <ul className={styles.userUL}>{userlist}</ul>
    </>
  );
};

export default Profile;
