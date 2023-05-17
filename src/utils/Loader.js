import styles from "./Loader.module.css";
import ReactDOM from "react-dom";
const LoaderBlock = () => {
  return (
    <>
      <div className={styles.loader}>
        <div>
          <div class={styles.spinner}>
            <div className={styles["double-bounce1"]}></div>
            <div className={styles["double-bounce2"]}></div>
          </div>
        </div>
      </div>
    </>
  );
};

const Loader = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <LoaderBlock />,
        document.getElementById("loader-div")
      )}
    </>
  );
};

export default Loader;
