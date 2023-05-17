// import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authActions } from "../store/auth-slice";
import Loader from "../utils/Loader";
import styles from "./MainNav.module.css";

const MainNav = () => {
  // const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const [Loading, setLoading] = useState(false);
  const logoutHandler = () => {
    setLoading(true);
    dispatch(authActions.logout());
    console.log("logged Out");
    setLoading(false);
  };

  return (
    <>
      {Loading && <Loader />}
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
          {/* <li>
            <DarkModeToggle
              onChange={setIsDarkMode}
              checked={isDarkMode}
              size={50}
            />
          </li> */}
          <div>
            {/* <li>
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
            </li> */}

            <li>
              {!isLoggedIn ? (
                <NavLink
                  to="/login-user"
                  className={({ isActive }) =>
                    isActive ? styles.active : undefined
                  }
                >
                  login
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
