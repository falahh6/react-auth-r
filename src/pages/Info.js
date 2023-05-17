import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styles from "./Info.module.css";
// import PageAnimations from "../utils/PageAnimations";
import { AnimatePresence, motion } from "framer-motion";

const Info = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Helmet>
          <title>Information</title>
        </Helmet>
        <h1 className={styles.heading}>Information</h1>
        <Link className={styles.a} to="/">
          <button>Go back</button>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};

export default Info;
