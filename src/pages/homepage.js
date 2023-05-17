import { Helmet } from "react-helmet";
import styles from "./HomePage.module.css";
// import PageAnimations from "../utils/PageAnimations";
import { AnimatePresence, motion } from "framer-motion";
const HomePage = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Helmet>
          <title>Home</title>
        </Helmet>
        <h1 className={styles.heading}>The Landing Page</h1>
      </motion.div>
    </AnimatePresence>
  );
};

export default HomePage;
