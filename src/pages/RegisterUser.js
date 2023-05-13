import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import styles from "./RegisterUser.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const RegisterUser = () => {
  const [shownPassword, setShownPassword] = useState(false);

  const toggleShowPassword = () => {
    setShownPassword((shownPassword) => !shownPassword);
  };

  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", password1: "", password2: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          } else if (!values.name > 4) {
            errors.name = "Enter your correct name";
          }
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.password1) {
            errors.password1 = "Required";
          } else if (values.password1.length < 8) {
            errors.password1 = "Password length must be > 8";
          }

          if (!values.password2) {
            errors.password2 = "Required";
          } else if (!(values.password2 === values.password1)) {
            errors.password2 = "Password doesn't match";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          setTimeout(() => {
            setSubmitting(false);
            resetForm();
          }, 200);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.formContainer}>
            <div className={styles.formGroup}>
              <label className={styles.labels} htmlFor="name">
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
              <label className={styles.labels} htmlFor="password1">
                Set the Password :{" "}
              </label>
              <div className={styles.customPasswordField}>
                <Field
                  className={styles.formControl}
                  name="password1"
                  type={shownPassword ? "text" : "password"}
                />
                <FontAwesomeIcon
                  className={styles.icon}
                  onClick={toggleShowPassword}
                  icon={shownPassword ? faEyeSlash : faEye}
                />
              </div>
              <ErrorMessage
                className={styles.formError}
                name="password1"
                component="div"
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.labels} htmlFor="password2">
                Confirm your Password :{" "}
              </label>
              <Field
                className={styles.formControl}
                type="password"
                name="password2"
              />
              <ErrorMessage
                className={styles.formError}
                name="password2"
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
