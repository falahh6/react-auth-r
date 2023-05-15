import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import styles from "./MainNav.module.css";
const MainNav = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <>
      <header>
        <ul className={styles.ul}>
          {isAuthenticated && (
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
              {!isAuthenticated ? (
                <button
                  className={styles.button}
                  // to="login-user"
                  onClick={() => loginWithRedirect()}
                >
                  Login
                </button>
              ) : (
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                  className={styles.button}
                >
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
