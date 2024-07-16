import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useFormik } from "formik";
import * as Yup from "yup";

function Login({ onLogin }) {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    username: Yup.string()
      .email("*Invalid email address")
      .required("*Username is required"),
    password: Yup.string()
      .min(8, "*Password must be 8 characters")
      .required("*Password is required"),
    companyId: Yup.string().required("*Company Id is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      companyId: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      onLogin(values.username, values.password, values.companyId);
      // navigate('/hrms')
    },
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#f7f7f7" }}
    >
      <div className="d-flex">
        <img
          src={logo}
          alt="LOGO"
          className="img-fluid mb-4"
          width="50"
          height="50"
        />
        <h2 className="mx-3" style={{ color: "#08a6ff", marginTop: "5px" }}>
          HRMS
        </h2>
      </div>
      <div
        className="card"
        style={{
          width: "28rem",
          borderRadius: "0px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <div className="card-body">
            <h4 className="card-title text-center mb-5">Login</h4>
            <div className="mb-2">
              <label className="form-label fw-medium">Username</label>
              <span className="text-danger">*</span>
              <input
                type="text"
                {...formik.getFieldProps("username")}
                className={`form-control ${
                  formik.touched.username && formik.errors.username
                    ? "is-invalid"
                    : ""
                }`}
              />
              {formik.touched.username && formik.errors.username && (
                <div className="invalid-feedback">{formik.errors.username}</div>
              )}
            </div>

            <div className="mb-2"> 
              <label className="form-label fw-medium">Password</label>
              <span className="text-danger">*</span>
              <div className={`input-group mb-3`}>
                <input
                  {...formik.getFieldProps("password")}
                  type={showPassword ? "text" : "password"}
                  className={`form-control ${
                    formik.touched.password && formik.errors.password
                      ? "is-invalid"
                      : ""
                  }`}
                  name="password"
                />
                
                <span
                  className={`input-group-text iconInputBackground`}
                  id="basic-addon1"
                  onClick={togglePasswordVisibility}
                  style={{ cursor: "pointer", borderRadius: "3px" }}
                >
                  {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                </span>
                {formik.touched.password && formik.errors.password && (
                  <div className="invalid-feedback">
                    {formik.errors.password}
                  </div>
                )}
              </div>
            </div> 

            <div className="mb-4">
              <label className="form-label fw-medium">Company ID</label>
              <span className="text-danger">*</span>
              <input
                type="text"
                {...formik.getFieldProps("companyId")}
                className={`form-control ${
                  formik.touched.companyId && formik.errors.companyId
                    ? "is-invalid"
                    : ""
                }`}
              />
              {formik.touched.companyId && formik.errors.companyId && (
                <div className="invalid-feedback">
                  {formik.errors.companyId}
                </div>
              )}
            </div>
            <div className="d-flex justify-content-center mb-3">
              <button
                type="submit"
                className="btn btn-sm btn-button"
                style={{ width: "90px", borderRadius: "10px" }}
              >
                Login
              </button>
            </div>
            <div className="d-flex justify-content-center">
              <p className="fw-medium" style={{ fontSize: "15px" }}>
                Create An Account? <Link to="/signup">Sign Up</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
