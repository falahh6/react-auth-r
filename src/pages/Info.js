import { Helmet } from "react-helmet";
// import { Formik, Form, Field } from "formik";
import styles from "./Info.module.css";
// import PageAnimations from "../utils/PageAnimations";
import { AnimatePresence, motion } from "framer-motion";
// import { addResources } from "../store/auth-slice";
// import { useDispatch, useSelector } from "react-redux";

const Info = () => {
  // const dispatch = useDispatch();
  // const CurrentUserKey = useSelector(
  //   (state) => state.auth.currentlyLoggedInUserKey
  // );
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
        {/* <Formik
          initialValues={{ aboutyou: "" }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            const message = values.aboutyou;
            const data = {
              message,
              CurrentUserKey,
            };
            setTimeout(() => {
              console.log(message);
              // dispatch(addResources(data));
              console.log(data);
              setSubmitting(false);
              resetForm();
            }, 1000);
          }}
        >
          {({ isSubmitting }) => (
            <Form className={styles.formContainer}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="aboutyou">
                  Enter something about yourself :{" "}
                </label>
                <Field
                  className={styles.formControl}
                  name="aboutyou"
                  as="textarea"
                  rows="8"
                  required
                />
                <button type="submit" className={styles.a}>
                  {" "}
                  {isSubmitting ? "Submitting.." : "Submit"}
                </button>
              </div>
            </Form>
          )}
        </Formik> */}
        {/* <Link className={styles.a} to="/">
          <button>Go back</button>
        </Link> */}
        <div></div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Info;
