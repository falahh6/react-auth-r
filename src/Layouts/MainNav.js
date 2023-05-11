import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./MainNav.module.css";
const MainNav = () => {
  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <>
      <header>
        <ul className={styles.ul}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              to="/"
            >
              {" "}
              Home{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              to="info"
            >
              Info
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              to="users"
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              to="onboarding"
            >
              LogIn
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default MainNav;
