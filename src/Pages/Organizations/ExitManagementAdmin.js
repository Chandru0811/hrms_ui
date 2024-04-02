import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function ExitManagementAdmin() {
  const validationSchema = Yup.object({
    employeeID: Yup.string().required("*Employee ID is required"),
    employeeName: Yup.string().required("*Employee name is required"),
    companyID: Yup.string().required("*Company ID is required"),
    reasonForRelieving: Yup.string().required(
      "*Reason for relieving is required"
    ),
    dateOfRelieving: Yup.string().required("*Select the date of relieving"),
    dateOfApply: Yup.string().required("*Select the date of apply"),
    noticePeriod: Yup.string().required("*Notice period is required"),
  });

  const formik = useFormik({
    initialValues: {
      employeeID: "",
      employeeName: "",
      companyID: "",
      reasonForRelieving: "",
      dateOfRelieving: "",
      dateOfApply: "",
      noticePeriod: "",
    },
    validationSchema: validationSchema, // Assign the validation schema
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <section className="ExitAdd p-3">
      <div className="container-fluid">
        <div className="container">
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-12 text-end">
                <button type="submit" className="btn btn-sm btn-button">
                  Save
                </button>
              </div>
            </div>
            <div className="row mt-3">
              <div class="col-md-6 col-12 mb-3">
                <lable className="form-lable">
                  Employee ID<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.employeeID && formik.errors.employeeID
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("employeeID")}
                />
                {formik.touched.employeeID && formik.errors.employeeID && (
                  <div className="invalid-feedback">
                    {formik.errors.employeeID}
                  </div>
                )}
              </div>
              <div class="col-md-6 col-12 mb-3">
                <lable class="form-lable">
                  Employee Name<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.employeeName && formik.errors.employeeName
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("employeeName")}
                />
                {formik.touched.employeeName && formik.errors.employeeName && (
                  <div className="invalid-feedback">
                    {formik.errors.employeeName}
                  </div>
                )}
              </div>
              <div class="col-md-6 col-12 mb-3">
                <lable className="form-lable">
                  Company ID<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.companyID && formik.errors.companyID
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("companyID")}
                />
                {formik.touched.companyID && formik.errors.companyID && (
                  <div className="invalid-feedback">
                    {formik.errors.companyID}
                  </div>
                )}
              </div>
              <div class="col-md-6 col-12 mb-3">
                <lable class="form-lable">
                  Reason For Relieving<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.reasonForRelieving &&
                    formik.errors.reasonForRelieving
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("reasonForRelieving")}
                />
                {formik.touched.reasonForRelieving &&
                  formik.errors.reasonForRelieving && (
                    <div className="invalid-feedback">
                      {formik.errors.reasonForRelieving}
                    </div>
                  )}
              </div>
              <div class="col-md-6 col-12 mb-3">
                <lable className="form-lable">
                  Date of Relieving<span className="text-danger">*</span>
                </lable>
                <input
                  type="date"
                  className={`form-control  ${
                    formik.touched.dateOfRelieving &&
                    formik.errors.dateOfRelieving
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("dateOfRelieving")}
                />
                {formik.touched.dateOfRelieving &&
                  formik.errors.dateOfRelieving && (
                    <div className="invalid-feedback">
                      {formik.errors.dateOfRelieving}
                    </div>
                  )}
              </div>
              <div class="col-md-6 col-12 mb-3">
                <lable class="form-lable">
                  Date Of Apply<span className="text-danger">*</span>
                </lable>
                <input
                  type="date"
                  className={`form-control  ${
                    formik.touched.dateOfApply && formik.errors.dateOfApply
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("dateOfApply")}
                />
                {formik.touched.dateOfApply && formik.errors.dateOfApply && (
                  <div className="invalid-feedback">
                    {formik.errors.dateOfApply}
                  </div>
                )}
              </div>
              <div class="col-md-6 col-12 mb-3">
                <lable className="form-lable">
                  Notice Period<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.noticePeriod && formik.errors.noticePeriod
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("noticePeriod")}
                />
                {formik.touched.noticePeriod && formik.errors.noticePeriod && (
                  <div className="invalid-feedback">
                    {formik.errors.noticePeriod}
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
