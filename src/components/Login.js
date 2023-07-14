import React from "react";
import { Formik, useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import "./login.css";
import { useNavigate } from "react-router-dom";

const secretkey = "1234567890";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "*Min character should be 2")
        .max(56, "*Max character should be 56")
        .required("*Please enter firstName"),

      lastName: Yup.string()
        .min(2, "*Min character should be 2")
        .max(56, "*Max character should be 56")
        .required("*Please enter lastName"),

      email: Yup.string()
        .trim()
        .email("*Please enter a valid email address")
        .required("*Please enter email address"),

      password: Yup.string().trim().required("*Please enter password"),
    }),
    onSubmit: (values) => {
      console.log(values);
      let payload = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      };
      dispatch.User.loginUser(payload);
      navigate("/task");
    },
  });

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit} className="login">
        <h2>Welcome, User!</h2>
        <p>Please log in</p>
        <p>{secretkey}</p>
        <div className="ui form">
          <div className="field">
            <label htmlFor="firstName">First Name</label>
            <input
              data-testid="firstName-input"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
          </div>
          <p className="error-msg">{formik.errors.firstName}</p>
          <div className="field">
            <label htmlFor="lastName">Last Name</label>
            <input
              data-testid="lastName-input"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
          </div>
          <p className="error-msg">{formik.errors.lastName}</p>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              data-testid="email-input"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <p className="error-msg" data-testid="email-error">
            {formik.errors.email}
          </p>

          <div className="field">
            <label htmlFor="email">Password</label>
            <input
              data-testid="password-input"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <p className="error-msg">{formik.errors.password}</p>
        </div>
        <button type="submit" className="btn" data-testid="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Login;
