import { Outlet } from "react-router";
import MainNav from "../Layouts/MainNav";

const Root = () => {
  return (
    <>
      <MainNav />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
