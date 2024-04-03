import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(email, password);
  const handleLoginClick = () => {
    onLogin(email, password);
  };
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
          width: "25rem",
          borderRadius: "0px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="card-body">
          <h4 className="card-title text-center mb-5">Login</h4>
          <div className="mb-2">
            <label className="form-label fw-medium">Username</label>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              className={`form-control form-control-sm`}
            />
          </div>
          {/* <div className='mb-2'>
                        <div className='d-flex justify-content-between'>
                            <label className='form-label fw-medium'>Password</label>
                            <p className='fw-medium' style={{ fontSize: "10px" }}>Forgot Password?</p>
                        </div>
                        <input
                            type="password"
                            className={`form-control form-control-sm`}
                        />
                    </div> */}

          <div className="mb-2">
            <label className="form-label fw-medium">Password</label>

            <div className={`input-group mb-3`}>
              <input
                type={showPassword ? "text" : "password"}
                // className={`form-control ${
                //   formik.touched.password && formik.errors.password
                //     ? "is-invalid"
                //     : ""
                // }`}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                style={{
                  borderRadius: "3px",
                  borderRight: "none",
                  borderTopRightRadius: "0px",
                  borderBottomRightRadius: "0px",
                }}
                name="password"
                // {...formik.getFieldProps("password")}
              />
              <span
                className={`input-group-text iconInputBackground`}
                id="basic-addon1"
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer", borderRadius: "3px" }}
              >
                {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </span>
              {/* {formik.touched.password && formik.errors.password && (
                <div className="invalid-feedback">{formik.errors.password}</div>
              )} */}
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label fw-medium">Company ID</label>
            <input type="text" className={`form-control form-control-sm`} />
          </div>
          <div className="d-flex justify-content-center mb-3">
            <button
              type="submit"
              className="btn btn-sm btn-button"
              style={{ width: "90px", borderRadius: "10px" }}
              onClick={handleLoginClick}
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
      </div>
    </div>
  );
}

export default Login;
