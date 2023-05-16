import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/auth-slice";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  const [shownPassword, setShownPassword] = useState(false);

  const toggleShowPassword = () => {
    setShownPassword((shownPassword) => !shownPassword);
  };

  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
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

          dispatch(login(userInfo))
            .unwrap()
            .then(() => {
              navigate("/");
            })
            .catch((error) => {
              console.log(error);
            });

          setTimeout(() => {
            setSubmitting(false);
            resetForm();
          }, 400);
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
              <label className={styles.labels} htmlFor="password">
                Set the Password :{" "}
              </label>
              <div className={styles.customPasswordField}>
                <Field
                  className={styles.formControl}
                  name="password"
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

      <p className={styles.statement}>
        new to hexa.co ? <NavLink to="/onboarding"> register now </NavLink>{" "}
      </p>
    </div>
  );
};

export default Login;
