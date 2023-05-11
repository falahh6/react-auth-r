import React from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./Login.module.css";
import { useAuth0 } from "@auth0/auth0-react";
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      {/* <h1>Login</h1> */}
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.password) {
            errors.password = "Required";
          } else if (values.password.length < 8) {
            errors.password = "Password length must be > 8";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const userInfo = {
            userEmail: values.email,
            userPassword: values.password,
          };
          axios
            .get("https://users-6b489-default-rtdb.firebaseio.com/users.json")
            .then((response) => {
              const users = response.data;

              const existingUser = Object.values(users).find(
                (user) => user.userEmail === values.email
              );
              if (existingUser) {
                console.log("user already exists!");
                setSubmitting(false);
                resetForm();
                return;
              } else {
                axios
                  .post(
                    "https://users-6b489-default-rtdb.firebaseio.com/users.json",
                    userInfo
                  )
                  .then((response) => {
                    console.log(response);
                  })
                  .catch((error) => {
                    console.log(error);
                  });

                setTimeout(() => {
                  console.log(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                  resetForm();
                  loginWithRedirect();
                }, 400);
              }
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.formContainer}>
            <div className={styles.formGroup}>
              <label className={styles.labels} htmlFor="email">
                Enter your email :{" "}
              </label>
              <Field className={styles.formControl} type="email" name="email" />
              <ErrorMessage
                className={styles.formError}
                name="email"
                component="div"
              />
            </div>
            <div className={styles.formGroup}>
              <label
                style={{ marginBottom: "8px" }}
                className={styles.labels}
                htmlFor="password"
              >
                Enter your Password :{" "}
              </label>
              <Field
                className={styles.formControl}
                type="password"
                name="password"
              />
              <ErrorMessage
                className={styles.formError}
                name="password"
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
    </div>
  );
};

export default Login;
