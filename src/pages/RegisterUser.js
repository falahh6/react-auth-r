import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./RegisterUser.module.css";
const RegisterUser = () => {
  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", password: "", passwordAgain: "" }}
        validate={(values) => {}}
        onSubmit={(values) => {}}
      >
        {({ isSubmitting }) => (
          <Form className={styles.formContainer}>
            <div className={styles.formGroup}>
              <label className={styles.labels} htmlFor="email">
                Enter your Name :{" "}
              </label>
              <Field className={styles.formControl} type="text" name="name" />
              <ErrorMessage
                className={styles.formError}
                name="name"
                component="div"
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.labels} htmlFor="email">
                Enter your e-mail :{" "}
              </label>
              <Field className={styles.formControl} type="email" name="email" />
              <ErrorMessage
                className={styles.formError}
                name="email"
                component="div"
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.labels} htmlFor="email">
                Set the Password :{" "}
              </label>
              <Field
                className={styles.formControl}
                type="password"
                name="passowrd1"
              />
              <ErrorMessage
                className={styles.formError}
                name="passowrd1"
                component="div"
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.labels} htmlFor="email">
                Confirm your Password :{" "}
              </label>
              <Field
                className={styles.formControl}
                type="password"
                name="password2"
              />
              <ErrorMessage
                className={styles.formError}
                name="passowrd2"
                component="div"
              />
            </div>
            <button
              className={styles.submitButton}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegisterUser;
