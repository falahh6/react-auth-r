import { Helmet } from "react-helmet";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1 className={styles.heading}>The Landing Page</h1>
    </>
  );
};

export default HomePage;
