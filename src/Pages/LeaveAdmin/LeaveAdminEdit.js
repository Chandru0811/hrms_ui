import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
function LeaveAdminEdit() {
  const validationSchema = Yup.object({
    employeeId: Yup.string().required("*Employee id is required"),
    employeeName: Yup.string().required("*Employee name is required"),
    departmentId: Yup.string().required("*Department id is required"),
    departmentName: Yup.string().required("*Department name is required"),
    companyId: Yup.string().required("*Company id is required"),
    companyName: Yup.string().required("*Company name is required"),
    fromDate: Yup.string().required("*From date is required"),
    toDate: Yup.string().required("*To date is required"),
    reasonForrequestedLeave: Yup.string().required(
      "*Reason for requested leave is required"
    ),
    approverId: Yup.string().required("*Approver id is required"),
    approverName: Yup.string().required("*Approver name is required"),
    status: Yup.string().required("*Status is required"),
    reason: Yup.string().required("Reason is required"),
    subject: Yup.string().required("Subject is required"),
    description: Yup.string().required("Description is required"),
  });
  const formik = useFormik({
    initialValues: {
      employeeId: "ecs01",
      employeeName: "Suriya",
      departmentId: "ecsdp01",
      departmentName: "IT department",
      companyId: "cmp01",
      companyName: "Cloud ECS Infotech",
      fromDate: "2020-02-10",
      toDate: "2020-02-15",
      reasonForrequestedLeave: "Fever",
      approverId: "",
      approverName: "",
      status: "",
      reason: "",
      subject: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  const [selectedValue, setSelectedValue] = useState("");
  const [showSecondSelect, setShowSecondSelect] = useState(false);
  const [showThirdField, setShowThirdField] = useState(false);
  const [showFourthField, setShowFourthField] = useState(false);

  const handleFirstSelectChange = (e) => {
    const selected = e.target.value;
    setSelectedValue(selected);
    formik.setFieldValue("status", e.target.value);
    if (e.target.value === "Rejected") {
      setShowSecondSelect(true);
    } else {
      setShowSecondSelect(false);
    }
  };
  const handleSecondSelectChange = (event) => {
    const selected = event.target.value;
    setShowSecondSelect(selected);
    formik.setFieldValue("reason", event.target.value);
    if (selected === "Others") {
      setShowThirdField(true);
      setShowFourthField(true);
    } else {
      setShowThirdField(false);
      setShowFourthField(false);
    }
  };
  return (
    <section className="LeaveAdminEdit p-3">
    <div className="container-fluid">
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-12 text-end">
              <Link to="/leaveadmin">
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
                <lable className="form-lable">Employee ID</lable>
                <span className="text-danger">*</span>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.employeeId && formik.errors.employeeId
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("employeeId")}
                />
                {formik.touched.employeeId && formik.errors.employeeId && (
                  <div className="invalid-feedback">
                    {formik.errors.employeeId}
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">Employee Name</lable>
                <span className="text-danger">*</span>
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
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">Department ID</lable>
                <span className="text-danger">*</span>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.departmentId && formik.errors.departmentId
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("departmentId")}
                />
                {formik.touched.departmentId && formik.errors.departmentId && (
                  <div className="invalid-feedback">
                    {formik.errors.departmentId}
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">Department Name</lable>
                <span className="text-danger">*</span>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.departmentName &&
                    formik.errors.departmentName
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("departmentName")}
                />
                {formik.touched.departmentName &&
                  formik.errors.departmentName && (
                    <div className="invalid-feedback">
                      {formik.errors.departmentName}
                    </div>
                  )}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">Company ID</lable>
                <span className="text-danger">*</span>
                <input
                  type="text"
                  className={`form-control ${
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
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">Company Name</lable>
                <span className="text-danger">*</span>
                <input
                  type="text"
                  className={`form-control ${
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
                <lable className="form-lable">From Date</lable>
                <span className="text-danger">*</span>
                <input
                  type="date"
                  className={`form-control ${
                    formik.touched.fromDate && formik.errors.fromDate
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("fromDate")}
                />
                {formik.touched.fromDate && formik.errors.fromDate && (
                  <div className="invalid-feedback">
                    {formik.errors.fromDate}
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">To Date</lable>
                <span className="text-danger">*</span>
                <input
                  type="date"
                  className={`form-control ${
                    formik.touched.toDate && formik.errors.toDate
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("toDate")}
                />
                {formik.touched.toDate && formik.errors.toDate && (
                  <div className="invalid-feedback">{formik.errors.toDate}</div>
                )}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">Reason For Requested Leave</lable>
                <span className="text-danger">*</span>
                <input
                  type="text"
                  className={`form-control ${
                    formik.touched.reasonForrequestedLeave &&
                    formik.errors.reasonForrequestedLeave
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("reasonForrequestedLeave")}
                />
                {formik.touched.reasonForrequestedLeave &&
                  formik.errors.reasonForrequestedLeave && (
                    <div className="invalid-feedback">
                      {formik.errors.reasonForrequestedLeave}
                    </div>
                  )}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">Approver ID</lable>
                <span className="text-danger">*</span>
                <input
                  type="text"
                  className={`form-control ${
                    formik.touched.approverId && formik.errors.approverId
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("approverId")}
                />
                {formik.touched.approverId && formik.errors.approverId && (
                  <div className="invalid-feedback">
                    {formik.errors.approverId}
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">Approver Name</lable>
                <span className="text-danger">*</span>
                <input
                  type="text"
                  className={`form-control ${
                    formik.touched.approverName && formik.errors.approverName
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("approverName")}
                />
                {formik.touched.approverName && formik.errors.approverName && (
                  <div className="invalid-feedback">
                    {formik.errors.approverName}
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 mt-2 mb-3">
              <lable className="form-lable" htmlFor="firstSelect">
                Status
              </lable>
              <span className="text-danger">*</span>
              <select
                className={`form-select ${
                  formik.touched.status && formik.errors.status
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("status")}
                aria-label="Default select example"
                id="firstSelect"
                value={selectedValue}
                onChange={handleFirstSelectChange}
              >
                <option value="Pending" selected>Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
              {formik.touched.status && formik.errors.status && (
                <div className="invalid-feedback">{formik.errors.status}</div>
              )}
            </div>
            {showSecondSelect && (
              <div className="col-lg-6 col-md-6 col-12">
                <div className="text-start mt-2 mb-3">
                  <lable className="form-lable" htmlFor="secondSelect">
                    Reason
                  </lable>
                  <span className="text-danger">*</span>
                  <select
                    {...formik.getFieldProps("reason")}
                    className={`form-select ${
                      formik.touched.reason && formik.errors.reason
                        ? "is-invalid"
                        : ""
                    }`}
                    aria-label="Default select example"
                    id="secondSelect"
                    value={showSecondSelect}
                    onChange={handleSecondSelectChange}
                  >
                    <option selected></option>
                    <option value="Leave Limit">Leave Limit</option>
                    <option value="Project Peak Time">Project Peak Time</option>
                    <option value="Others">Others</option>
                  </select>
                  {formik.touched.reason && formik.errors.reason && (
                    <div className="invalid-feedback">
                      {formik.errors.reason}
                    </div>
                  )}
                </div>
              </div>
            )}
            {showThirdField && (
              <div className="col-lg-6 col-md-6 col-12">
                <div className="text-start mt-2 mb-3">
                  <lable className="form-lable">Subject</lable>
                  <span className="text-danger">*</span>
                  <input
                    type="text"
                    className={`form-control ${
                      formik.touched.subject && formik.errors.subject
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("subject")}
                  />
                  {formik.touched.subject && formik.errors.subject && (
                    <div className="invalid-feedback">
                      {formik.errors.subject}
                    </div>
                  )}
                </div>
              </div>
            )}
            {showFourthField && (
              <div className="col-lg-6 col-md-6 col-12">
                <div className="text-start mt-2 mb-3">
                  <lable className="form-lable">Description</lable>
                  <span className="text-danger">*</span>
                  <textarea
                    className={`form-control ${
                      formik.touched.description && formik.errors.description
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("description")}
                  />
                  {formik.touched.description && formik.errors.description && (
                    <div className="invalid-feedback">
                      {formik.errors.description}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
    </section>
  );
}

export default LeaveAdminEdit;
