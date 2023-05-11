import { Link } from "react-router-dom";
import styles from "./Info.module.css";
import RequireAuth from "../store/RequireAuth";
const Info = () => {
  return (
    <>
      <h1 className={styles.heading}>Information</h1>
      <Link className={styles.a} to="/">
        <button>Go back</button>
      </Link>
    </>
  );
};

export default RequireAuth(Info);
