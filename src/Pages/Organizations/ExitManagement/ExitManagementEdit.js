import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function ExitManagementEdit() {
  const validationSchema = Yup.object({
    employeeID: Yup.string().required("*Employee ID is required"),
    employeeName: Yup.string().required("*Employee name is required"),
    companyID: Yup.string().required("*Company ID is required"),
    dateOfApply: Yup.string().required("*Select the date of apply"),
    noticePeriod: Yup.string().required("*Notice period is required"),
    currentDate: Yup.string().required("*Select the current date"),
    reasonForRelieving: Yup.string().required(
      "*Reason for relieving is required"
    ),
    dateOfRelieving: Yup.string().required("*Select the date of relieving"),
    relievingApprover: Yup.string().required(
      "*Relieving approver name is required"
    ),
    relievingApproverID: Yup.string().required(
      "*Relieving approver id is required"
    ),
    approvalStatus: Yup.string().required("*Select the approval status"),
    assetsReturned: Yup.string().required("*Select the assets returned"),
  });

  const formik = useFormik({
    initialValues: {
      employeeID: "ECS78",
      employeeName: "Suriya",
      companyID: "ECS236",
      dateOfApply: "2024-01-10",
      noticePeriod: "45 Days",
      currentDate: "2024-03-14",
      reasonForRelieving: "Career Growth",
      dateOfRelieving: "2024-03-11",
      relievingApprover: "",
      relievingApproverID: "",
      approvalStatus: "",
      assetsReturned: "",
    },
    validationSchema: validationSchema, 
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <section className="ExitAdd p-3">
      <div className="container-fluid">
        <div className="container py-3">
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-12 text-end">
                <Link to="/exitmanagement">
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
              <div className="col-md-6 col-12 mb-3">
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
              <div className="col-md-6 col-12 mb-3">
                <lable className="form-lable">
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
              <div className="col-md-6 col-12 mb-3">
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
              <div className="col-md-6 col-12 mb-3">
                <lable className="form-lable">
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
              <div className="col-md-6 col-12 mb-3">
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
              <div className="col-md-6 col-12 mb-3">
                <lable className="form-lable">
                  Current Date<span className="text-danger">*</span>
                </lable>
                <input
                  type="date"
                  className={`form-control  ${
                    formik.touched.currentDate && formik.errors.currentDate
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("currentDate")}
                />
                {formik.touched.currentDate && formik.errors.currentDate && (
                  <div className="invalid-feedback">
                    {formik.errors.currentDate}
                  </div>
                )}
              </div>
              <div className="col-md-6 col-12 mb-3">
                <lable className="form-lable">
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
              <div className="col-md-6 col-12 mb-3">
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
              <div className="col-md-6 col-12 mb-3">
                <lable className="form-lable">
                  Relieving Approver ID<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.relievingApproverID &&
                    formik.errors.relievingApproverID
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("relievingApproverID")}
                />
                {formik.touched.relievingApproverID &&
                  formik.errors.relievingApproverID && (
                    <div className="invalid-feedback">
                      {formik.errors.relievingApproverID}
                    </div>
                  )}
              </div>
              <div className="col-md-6 col-12 mb-3">
                <lable className="form-lable">
                  Relieving Approver Name<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.relievingApprover &&
                    formik.errors.relievingApprover
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("relievingApprover")}
                />
                {formik.touched.relievingApprover &&
                  formik.errors.relievingApprover && (
                    <div className="invalid-feedback">
                      {formik.errors.relievingApprover}
                    </div>
                  )}
              </div>
              <div className="col-md-6 col-12 mb-3">
                <lable className="form-lable">
                  Assets Returned<span className="text-danger">*</span>
                </lable>
                <div className="mt-2">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      value="Yes"
                      name="assetsReturned"
                      type="radio"
                      onChange={formik.handleChange}
                      checked={formik.values.assetsReturned === "Yes"}
                    />
                    <label className="form-check-label">Yes</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      value="No"
                      name="assetsReturned"
                      type="radio"
                      onChange={formik.handleChange}
                      checked={formik.values.assetsReturned === "No"}
                    />
                    <label className="form-check-label">No</label>
                  </div>
                </div>
                {formik.errors.assetsReturned &&
                  formik.touched.assetsReturned && (
                    <div className="text-danger" style={{ fontSize: ".875em" }}>
                      {formik.errors.assetsReturned}
                    </div>
                  )}
              </div>
              <div className="col-md-6 col-12 mb-3">
                <lable className="form-lable">
                  Approval Status<span className="text-danger">*</span>
                </lable>
                <select
                  {...formik.getFieldProps("approvalStatus")}
                  className={`form-select  ${
                    formik.touched.approvalStatus &&
                    formik.errors.approvalStatus
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Default select example"
                >
                  <option value="Pending" selected>Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                </select>
                {formik.touched.approvalStatus &&
                  formik.errors.approvalStatus && (
                    <div className="invalid-feedback">
                      {formik.errors.approvalStatus}
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

export default ExitManagementEdit;
