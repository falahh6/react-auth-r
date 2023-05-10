import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <NavLink to="/"> Home </NavLink>
          </li>
          <li>
            <NavLink to="info">Info</NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default MainNav;
