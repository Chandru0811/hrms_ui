import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import { useFormik } from "formik";
import * as Yup from "yup";

function Signup() {
  const validationSchema = Yup.object({
    companyId: Yup.string().required("*Company ID is required"),
    companyName: Yup.string().required("*Company Name is required"),
    designation: Yup.string().required("*Designation is required"),
    address: Yup.string().required("*Address is required"),
    city: Yup.string().required("*City is required"),
    pincode: Yup.string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .required("*Pincode is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("*Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .required("*Phone is required"),
    registrationNumber: Yup.string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .required("*Registration Number is required"),
    taxCode: Yup.string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .required("*Tax Code is required"),
    password: Yup.string().required("*Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("*Confirm Password is required"),
    agreement: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
  });

  const formik = useFormik({
    initialValues: {
      companyId: "",
      companyName: "",
      designation: "",
      address: "",
      city: "",
      pincode: "",
      email: "",
      phone: "",
      registrationNumber: "",
      taxCode: "",
      password: "",
      confirmPassword: "",
      agreement: false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("Signup Data:", values);
    },
  });

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center py-3 "
      style={{ backgroundColor: "#f7f7f7" }}
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
        className="card mx-1"
        style={{
          minWidth: "80%",
          borderRadius: "0px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="card-body">
          <h4 className="card-title text-center mb-5">Sign Up</h4>
          <form onSubmit={formik.handleSubmit}>
            <div className="container">
              <div className="row mb-4">
                <div className="col-md-6 col-12">
                  <label className="form-label fw-medium">Company ID</label>
                  <input
                    type="text"
                    className={`form-control form-control-sm ${
                      formik.touched.companyId && formik.errors.companyId
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("companyId")}
                  />
                  {formik.touched.companyId && formik.errors.companyId && (
                    <div className="invalid-feedback">
                      {formik.errors.companyId}
                    </div>
                  )}
                </div>
                <div className="col-md-6 col-12">
                  <label className="form-label fw-medium">Company Name</label>
                  <input
                    type="text"
                    className={`form-control form-control-sm ${
                      formik.touched.companyName && formik.errors.companyName
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("companyName")}
                  />
                  {formik.touched.companyName && formik.errors.companyName && (
                    <div className="invalid-feedback">
                      {formik.errors.companyName}
                    </div>
                  )}
                </div>
                <div className="col-md-6 col-12">
                  <label className="form-label fw-medium">Designation</label>
                  <input
                    type="text"
                    className={`form-control form-control-sm ${
                      formik.touched.designation && formik.errors.designation
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("designation")}
                  />
                  {formik.touched.designation && formik.errors.designation && (
                    <div className="invalid-feedback">
                      {formik.errors.designation}
                    </div>
                  )}
                </div>
                <div className="col-md-6 col-12">
                  <label className="form-label fw-medium">Address</label>
                  <input
                    type="text"
                    className={`form-control form-control-sm ${
                      formik.touched.address && formik.errors.address
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("address")}
                  />
                  {formik.touched.address && formik.errors.address && (
                    <div className="invalid-feedback">
                      {formik.errors.address}
                    </div>
                  )}
                </div>
                <div className="col-md-6 col-12">
                  <label className="form-label fw-medium">City</label>
                  <input
                    type="text"
                    className={`form-control form-control-sm ${
                      formik.touched.city && formik.errors.city
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("city")}
                  />
                  {formik.touched.city && formik.errors.city && (
                    <div className="invalid-feedback">{formik.errors.city}</div>
                  )}
                </div>
                <div className="col-md-6 col-12">
                  <label className="form-label fw-medium">Pincode</label>
                  <input
                    type="text"
                    className={`form-control form-control-sm ${
                      formik.touched.pincode && formik.errors.pincode
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("pincode")}
                  />
                  {formik.touched.pincode && formik.errors.pincode && (
                    <div className="invalid-feedback">
                      {formik.errors.pincode}
                    </div>
                  )}
                </div>
                <div className="col-md-6 col-12">
                  <label className="form-label fw-medium">Email</label>
                  <input
                    type="text"
                    className={`form-control form-control-sm ${
                      formik.touched.email && formik.errors.email
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="invalid-feedback">
                      {formik.errors.email}
                    </div>
                  )}
                </div>
                <div className="col-md-6 col-12">
                  <label className="form-label fw-medium">Phone</label>
                  <input
                    type="text"
                    className={`form-control form-control-sm ${
                      formik.touched.phone && formik.errors.phone
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("phone")}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <div className="invalid-feedback">
                      {formik.errors.phone}
                    </div>
                  )}
                </div>
                <div className="col-md-6 col-12">
                  <label className="form-label fw-medium">
                    Registration Number
                  </label>
                  <input
                    type="text"
                    className={`form-control form-control-sm ${
                      formik.touched.registrationNumber &&
                      formik.errors.registrationNumber
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("registrationNumber")}
                  />
                  {formik.touched.registrationNumber &&
                    formik.errors.registrationNumber && (
                      <div className="invalid-feedback">
                        {formik.errors.registrationNumber}
                      </div>
                    )}
                </div>
                <div className="col-md-6 col-12">
                  <label className="form-label fw-medium">Tax Code</label>
                  <input
                    type="text"
                    className={`form-control form-control-sm ${
                      formik.touched.taxCode && formik.errors.taxCode
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("taxCode")}
                  />
                  {formik.touched.taxCode && formik.errors.taxCode && (
                    <div className="invalid-feedback">
                      {formik.errors.taxCode}
                    </div>
                  )}
                </div>
                <div className="col-md-6 col-12">
                  <label className="form-label fw-medium">Password</label>
                  <input
                    type="text"
                    className={`form-control form-control-sm ${
                      formik.touched.password && formik.errors.password
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className="invalid-feedback">
                      {formik.errors.password}
                    </div>
                  )}
                </div>
                <div className="col-md-6 col-12">
                  <label className="form-label fw-medium">
                    Confirm Password
                  </label>
                  <input
                    type="text"
                    className={`form-control form-control-sm ${
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("confirmPassword")}
                  />
                  {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword && (
                      <div className="invalid-feedback">
                        {formik.errors.confirmPassword}
                      </div>
                    )}
                </div>
              </div>
            </div>

            <div className="form-check form-check-inline d-flex justify-content-center mb-4">
              <input
                type="checkbox"
                className={`form-check-input ${
                  formik.touched.agreement && formik.errors.agreement
                    ? "is-invalid"
                    : ""
                }`}
                id="agreement"
                {...formik.getFieldProps("agreement")}
              />
              <label className="form-check-label mx-2" htmlFor="agreement">
                I agree to the <Link to="/privacypolicy">Privacy Policy</Link>{" "}
                and <Link to="/terms&conditions">Terms and Conditions</Link>
              </label>
              {formik.touched.agreement && formik.errors.agreement && (
                <div className="invalid-feedback">
                  {formik.errors.agreement}
                </div>
              )}
            </div>

            <div className="d-flex justify-content-center mb-4">
              <button
                type="submit"
                className="btn btn-sm btn-button"
                style={{ width: "90px", borderRadius: "10px" }}
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="d-flex justify-content-center mb-4">
            <p className="fw-medium" style={{ fontSize: "15px" }}>
              Already have an Account? <Link to="/">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
