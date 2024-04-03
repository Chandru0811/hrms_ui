import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function EditCompanyRegistration() {
  const validationSchema = Yup.object({
    companyName: Yup.string().required("*Company name is required"),
    companyRoleId: Yup.string().required("*Company role id is required"),
    companyAddress: Yup.string().required("*Company address is required"),
    companyCity: Yup.string().required("*Company city is required"),
    companyPincode: Yup.number()
      .required("*Company pincode is required")
      .typeError("*Must be a number"),
    companyEmail: Yup.string().required("*Company email is required"),
    companyPhoneNumber: Yup.number()
      .required("*Company phone number is required")
      .typeError("*Must be a number"),
    companyRegistrationNumber: Yup.number()
      .required("*Company registeration number is required")
      .typeError("*Must be a number"),
    companyTaxCode: Yup.string().required("*Company tax code is required"),
  });

  const formik = useFormik({
    initialValues: {
      companyName: "ECS Cloud",
      companyRoleId: "Test",
      companyAddress: "Sakthi Tower",
      companyCity: "Chennai",
      companyPincode: "600001",
      companyEmail: "ecscloud@gmail.com",
      companyPhoneNumber: "8089736551",
      companyRegistrationNumber: "ECSCloud9606",
      companyTaxCode: "TMHSY89W97J920",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <section className="HolidayAdd p-3">
      <div className="container-fluid">
        <div className="container">
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-12 text-end">
                <Link to="/compantregisteration">
                  <button type="button" className="btn btn-sm btn-border">
                    Back
                  </button>
                </Link>
                &nbsp;&nbsp;
                <button type="submit" className="btn btn-sm btn-button">
                  Save
                </button>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="text-start mt-2 mb-3">
                  <lable className="form-lable">
                    Company Name<span className="text-danger">*</span>
                  </lable>
                  <input
                    type="text"
                    className={`form-control  ${
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
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="text-start mt-2 mb-3">
                  <lable className="form-lable">
                    Company Role ID<span className="text-danger">*</span>
                  </lable>
                  <input
                    type="text"
                    className={`form-control  ${
                      formik.touched.companyRoleId &&
                      formik.errors.companyRoleId
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("companyRoleId")}
                  />
                  {formik.touched.companyRoleId &&
                    formik.errors.companyRoleId && (
                      <div className="invalid-feedback">
                        {formik.errors.companyRoleId}
                      </div>
                    )}
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="text-start mt-2">
                  <lable className="form-lable">Company Address</lable>
                  <span className="text-danger">*</span>
                  <textarea
                    id="floatingTextarea2"
                    style={{ height: "100px" }}
                    className={`form-control  ${
                      formik.touched.companyAddress &&
                      formik.errors.companyAddress
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("companyAddress")}
                  ></textarea>
                  {formik.touched.companyAddress &&
                    formik.errors.companyAddress && (
                      <div className="invalid-feedback">
                        {formik.errors.companyAddress}
                      </div>
                    )}
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="text-start mt-2 mb-3">
                  <lable className="form-lable">
                    Company City<span className="text-danger">*</span>
                  </lable>
                  <input
                    type="text"
                    className={`form-control  ${
                      formik.touched.companyCity && formik.errors.companyCity
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("companyCity")}
                  />
                  {formik.touched.companyCity && formik.errors.companyCity && (
                    <div className="invalid-feedback">
                      {formik.errors.companyCity}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="text-start mt-2 mb-3">
                  <lable className="form-lable">
                    Company Pincode<span className="text-danger">*</span>
                  </lable>
                  <input
                    type="text"
                    className={`form-control  ${
                      formik.touched.companyPincode &&
                      formik.errors.companyPincode
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("companyPincode")}
                  />
                  {formik.touched.companyPincode &&
                    formik.errors.companyPincode && (
                      <div className="invalid-feedback">
                        {formik.errors.companyPincode}
                      </div>
                    )}
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="text-start mt-2 mb-3">
                  <lable className="form-lable">
                    Company Email<span className="text-danger">*</span>
                  </lable>
                  <input
                    type="email"
                    className={`form-control  ${
                      formik.touched.companyEmail && formik.errors.companyEmail
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("companyEmail")}
                  />
                  {formik.touched.companyEmail &&
                    formik.errors.companyEmail && (
                      <div className="invalid-feedback">
                        {formik.errors.companyEmail}
                      </div>
                    )}
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="text-start mt-2 mb-3">
                  <lable className="form-lable">
                    Company Phone Number<span className="text-danger">*</span>
                  </lable>
                  <input
                    type="text"
                    className={`form-control  ${
                      formik.touched.companyPhoneNumber &&
                      formik.errors.companyPhoneNumber
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("companyPhoneNumber")}
                  />
                  {formik.touched.companyPhoneNumber &&
                    formik.errors.companyPhoneNumber && (
                      <div className="invalid-feedback">
                        {formik.errors.companyPhoneNumber}
                      </div>
                    )}
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="text-start mt-2 mb-3">
                  <lable className="form-lable">
                    Company Registration Number
                    <span className="text-danger">*</span>
                  </lable>
                  <input
                    type="text"
                    className={`form-control  ${
                      formik.touched.companyRegistrationNumber &&
                      formik.errors.companyRegistrationNumber
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("companyRegistrationNumber")}
                  />
                  {formik.touched.companyRegistrationNumber &&
                    formik.errors.companyRegistrationNumber && (
                      <div className="invalid-feedback">
                        {formik.errors.companyRegistrationNumber}
                      </div>
                    )}
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="text-start mt-2 mb-3">
                  <lable className="form-lable">
                    Company Tax Code<span className="text-danger">*</span>
                  </lable>
                  <input
                    type="text"
                    className={`form-control  ${
                      formik.touched.companyTaxCode &&
                      formik.errors.companyTaxCode
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("companyTaxCode")}
                  />
                  {formik.touched.companyTaxCode &&
                    formik.errors.companyTaxCode && (
                      <div className="invalid-feedback">
                        {formik.errors.companyTaxCode}
                      </div>
                    )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default EditCompanyRegistration;
