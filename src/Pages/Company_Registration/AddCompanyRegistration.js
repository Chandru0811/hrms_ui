import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import api from "../../config/URL";
import { toast } from "react-toastify";

function AddCompanyRegistration() {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const validationSchema = Yup.object({
    cmpName: Yup.string().required("*Company name is required"),
    cmpAddr: Yup.string().required("*Company address is required"),
    cmpCity: Yup.string().required("*Company city is required"),
    cmpPincode: Yup.number()
      .required("*Company pincode is required")
      .typeError("*Must be a number"),
    cmpEmail: Yup.string().required("*Company email is required"),
    cmpPhNumber: Yup.number()
      .required("*Company phone number is required")
      .typeError("*Must be a number"),
    cmpRegNumber: Yup.number()
      .required("*Company registeration number is required")
      .typeError("*Must be a number"),
    cmpTaxCode: Yup.string().required("*Company tax code is required"),
  });

  const formik = useFormik({
    initialValues: {
      cmpName: "",
      cmpAddr: "",
      cmpCity: "",
      cmpPincode: "",
      cmpEmail: "",
      cmpPhNumber: "",
      cmpRegNumber: "",
      cmpTaxCode: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);

      try {
        const response = await api.post("addCompanyReg", values);
        // console.log(response)
        if (response.status === 201) {
          toast.success(response.data.message);
          navigate("/companyregisteration");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error("Error Submiting Data, ", error);
      }finally {
        setLoading(false);
      }
    
    },
  });

  return (
    <section className="HolidayAdd p-3">
      <div className="container-fluid">
        <div className="container">
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-12 text-end">
                <Link to="/companyregisteration">
                  <button type="button" className="btn btn-sm btn-border">
                    Back
                  </button>
                </Link>
                &nbsp;&nbsp;
                <button
                    type="submit"
                    className="btn btn-sm btn-button"
                    disabled={loading}
                  >
                    {loading ? (
                      <span
                        className="spinner-border spinner-border-sm"
                        aria-hidden="true"
                      ></span>
                    ) : (
                      <span></span>
                    )}
                    &nbsp;<span>Save</span>
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
                      formik.touched.cmpName && formik.errors.cmpName
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("cmpName")}
                  />
                  {formik.touched.cmpName && formik.errors.cmpName && (
                    <div className="invalid-feedback">
                      {formik.errors.cmpName}
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
                      formik.touched.cmpAddr &&
                      formik.errors.cmpAddr
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("cmpAddr")}
                  ></textarea>
                  {formik.touched.cmpAddr &&
                    formik.errors.cmpAddr && (
                      <div className="invalid-feedback">
                        {formik.errors.cmpAddr}
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
                      formik.touched.cmpCity && formik.errors.cmpCity
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("cmpCity")}
                  />
                  {formik.touched.cmpCity && formik.errors.cmpCity && (
                    <div className="invalid-feedback">
                      {formik.errors.cmpCity}
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
                      formik.touched.cmpPincode &&
                      formik.errors.cmpPincode
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("cmpPincode")}
                  />
                  {formik.touched.cmpPincode &&
                    formik.errors.cmpPincode && (
                      <div className="invalid-feedback">
                        {formik.errors.cmpPincode}
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
                      formik.touched.cmpEmail && formik.errors.cmpEmail
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("cmpEmail")}
                  />
                  {formik.touched.cmpEmail &&
                    formik.errors.cmpEmail && (
                      <div className="invalid-feedback">
                        {formik.errors.cmpEmail}
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
                      formik.touched.cmpPhNumber &&
                      formik.errors.cmpPhNumber
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("cmpPhNumber")}
                  />
                  {formik.touched.cmpPhNumber &&
                    formik.errors.cmpPhNumber && (
                      <div className="invalid-feedback">
                        {formik.errors.cmpPhNumber}
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
                      formik.touched.cmpRegNumber &&
                      formik.errors.cmpRegNumber
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("cmpRegNumber")}
                  />
                  {formik.touched.cmpRegNumber &&
                    formik.errors.cmpRegNumber && (
                      <div className="invalid-feedback">
                        {formik.errors.cmpRegNumber}
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
                      formik.touched.cmpTaxCode &&
                      formik.errors.cmpTaxCode
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("cmpTaxCode")}
                  />
                  {formik.touched.cmpTaxCode &&
                    formik.errors.cmpTaxCode && (
                      <div className="invalid-feedback">
                        {formik.errors.cmpTaxCode}
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

export default AddCompanyRegistration;
