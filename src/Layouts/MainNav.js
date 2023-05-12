import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { authActions } from "../store/auth-slice";
import styles from "./MainNav.module.css";
const MainNav = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  console.log(isLoggedIn);

  if (location.pathname === "login-user") {
    const navname = "register";
  }

  const logoutHandler = () => {
    dispatch(authActions.logout());
    navigate("/");
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
                  to="login-user"
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
