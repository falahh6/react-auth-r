import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authActions } from "../store/auth-slice";
import styles from "./MainNav.module.css";
const MainNav = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  console.log(isLoggedIn);

  const logoutHandler = () => {
    dispatch(authActions.logout());
    console.log("ok");
  };

  return (
    <>
      <header>
        <ul className={styles.ul}>
          {isLoggedIn && (
            <div className={styles.navGroup}>
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
            </div>
          )}
          <div>
            <li>
              {!isLoggedIn ? (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.active : undefined
                  }
                  disabled={isLoggedIn}
                  to="onboarding"
                >
                  Login
                </NavLink>
              ) : (
                <button onClick={logoutHandler} className={styles.button}>
                  Logout
                </button>
              )}
            </li>
          </div>
        </ul>
      </header>
    </>
  );
};

export default MainNav;
