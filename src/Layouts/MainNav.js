import { NavLink } from "react-router-dom";
import styles from "./MainNav.module.css";
const MainNav = () => {
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
        </ul>
      </header>
    </>
  );
};

export default MainNav;
