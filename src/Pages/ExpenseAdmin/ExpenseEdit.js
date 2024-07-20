import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import fetchAllEmployeeNamesWithId from "../List/EmployeeNameList";
import fetchAllCompanyNamesWithId from "../List/CompanyNameList";
import api from "../../config/URL";

function ExpensesEdit() {
  const [companyData, setCompanyData] = useState(null);
  const [employeeData, setEmployeeData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("Pending");
  const [reason, setReason] = useState("");
  const [showReasonSelect, setShowReasonSelect] = useState(false);
  const [showSubjectDescription, setShowSubjectDescription] = useState(false);
  const navigate = useNavigate();
  const {id} =useParams()


  const fetchData = async () => {
    try {
      const companyData = await fetchAllCompanyNamesWithId();
      const employeeData = await fetchAllEmployeeNamesWithId();
      setCompanyData(companyData);
      setEmployeeData(employeeData);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const validationSchema = Yup.object().shape({
    expenseDate: Yup.string().required("*Expense date is required"),
    expenseType: Yup.string().required("*Select a expense type"),
    expenseAmount: Yup.number()
      .required("*Expense amount is required")
      .typeError("*Must be a number"),
    attachment: Yup.string().required("*Attachment is required"),
    // employeeId: Yup.string().required("*Employe id is required"),
    employeeId: Yup.string().required("*Employee name is required"),
    // companyId: Yup.string().required("*Company id is required"),
    cmpId: Yup.string().required("*Company name is required"),
    approvalId: Yup.string().required("*Approver id is required"),
    approvalName: Yup.string().required("*Approver name is required"),
    status: Yup.string().required("*Select the status"),
    reason: Yup.string().required("*Select the reason"),
    subject: Yup.string().required("*Subject is required"),
    description: Yup.string().required("*Description is required"),
  });

  const formik = useFormik({
    initialValues: {
      expensesId:1,
      expenseDate: "",
      files:null,
      expenseType: "",
      expenseAmount: "",
      employeeId: "",
      cmpId: "",
      approvalId: "",
      approvalName: "",
      status: "",
      reason: "",
      subject: "",
      description: "",
      remarks: "",
    },
    validationSchema: validationSchema,
    onSubmit: async(values) => {
      console.log(values);
      setLoading(true);
      const formData = new FormData();
      formData.append("expensesId", id);
      formData.append("files", values.attachment);
      formData.append("expenseType", values.expenseType);
      formData.append("expenseAmt", values.expenseAmount);
      formData.append("expenseDetails", values.remarks);
      formData.append("expenseDate", values.expenseDate);
      formData.append("approverStatus", values.status);
      formData.append("approverName", values.approvalName);
      formData.append("expensesEmpId", values.employeeId);
      formData.append("cmpId", values.cmpId);
      
      try {
        const response = await api.post("/addExpenses", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (response.status === 201) {
          toast.success(response.data.message);
          navigate("/expenceadmin");
        }
      } catch (error) {
        toast.error(
          error.message || "An error occurred while submitting the form"
        );
      } finally {
        setLoading(false);
      }
    },
  });
 

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    formik.setFieldValue("status", e.target.value);
    if (e.target.value === "Rejected") {
      setShowReasonSelect(true);
    } else {
      setShowReasonSelect(false);
      formik.setFieldValue("reason", "");
    }
  };

  const handleReasonChange = (e) => {
    setReason(e.target.value);
    formik.setFieldValue("reason", e.target.value);
    if (e.target.value === "Others") {
      setShowSubjectDescription(true);
    } else {
      setShowSubjectDescription(false);

      formik.setFieldValue("subject", "");
      formik.setFieldValue("description", "");
    }
  };

  return (
    <div className="container-fluid">
      <form onSubmit={formik.handleSubmit}>
        <div className="container py-3">
          <div className="row">
            <div className="col-12 text-end">
              <Link to="/expenseadmin">
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
                    &nbsp;<span>Update</span>
                  </button>
            </div>
          </div>
          <div className="row mt-3">
            {/* <div className="col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">
                  Employee ID<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  placeholder="ECS01"
                  className={`form-control  ${
                    formik.touched.employeeId && formik.errors.employeeId
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("employeeId")}
                  disabled
                />
                {formik.touched.employeeId && formik.errors.employeeId && (
                  <div className="invalid-feedback">
                    {formik.errors.employeeId}
                  </div>
                )}
              </div>
            </div> */}
             <div className="col-md-6 col-12 mb-2">
              <lable className="form-lable">
                Company Name<span className="text-danger">*</span>
              </lable>
              <div className="input-group mb-3">
                <select
                  {...formik.getFieldProps("cmpId")}
                  className={`form-select  ${
                    formik.touched.cmpId && formik.errors.cmpId
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Default select example"
                >
                  <option selected></option>
                  {companyData &&
                    companyData.map((cmpId) => (
                      <option key={cmpId.id} value={cmpId.cmpId}>
                        {cmpId.cmpName}
                      </option>
                    ))}
                </select>
                {formik.touched.cmpId && formik.errors.cmpId && (
                  <div className="invalid-feedback">{formik.errors.cmpId}</div>
                )}
              </div>
            </div>
            <div className="col-md-6 col-12 mb-2">
              <lable className="form-lable">
                Employee Name<span className="text-danger">*</span>
              </lable>
              <div className="input-group mb-3">
                <select
                  {...formik.getFieldProps("employeeId")}
                  className={`form-select  ${
                    formik.touched.employeeId && formik.errors.employeeId
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Default select example"
                >
                  <option selected></option>
                  {employeeData &&
                    employeeData.map((employeeId) => (
                      <option key={employeeId.id} value={employeeId.employeeId}>
                        {employeeId.firstName} {employeeId.lastName}
                      </option>
                    ))}
                </select>
                {formik.touched.employeeId && formik.errors.employeeId && (
                  <div className="invalid-feedback">
                    {formik.errors.employeeId}
                  </div>
                )}
              </div>
            </div>
            {/* <div className="col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">
                  Company ID<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  placeholder="ECS13"
                  className={`form-control  ${
                    formik.touched.companyId && formik.errors.companyId
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("companyId")}
                  disabled
                />
                {formik.touched.companyId && formik.errors.companyId && (
                  <div className="invalid-feedback">
                    {formik.errors.companyId}
                  </div>
                )}
              </div>
            </div> */}
           
            <div className="col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">
                  Expense Date<span className="text-danger">*</span>
                </lable>
                <input
                  type="date"
                  placeholder="2024-01-01"
                  className={`form-control  ${
                    formik.touched.expenseDate && formik.errors.expenseDate
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("expenseDate")}
                  disabled
                />
                {formik.touched.expenseDate && formik.errors.expenseDate && (
                  <div className="invalid-feedback">
                    {formik.errors.expenseDate}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">
                  Expense Type<span className="text-danger">*</span>
                </lable>
                <select
                  {...formik.getFieldProps("expenseType")}
                  className={`form-select    ${
                    formik.touched.expenseType && formik.errors.expenseType
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Default select example"
                  disabled
                >
                  <option value="Office Supplies">Office Supplies</option>
                  <option value="Equipment">Equipment</option>
                  <option value="Training">Training</option>
                </select>
                {formik.touched.expenseType && formik.errors.expenseType && (
                  <div className="invalid-feedback">
                    {formik.errors.expenseType}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">
                  Expense Amount<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  placeholder="$350"
                  className={`form-control  ${
                    formik.touched.expenseAmount && formik.errors.expenseAmount
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("expenseAmount")}
                  disabled
                />
                {formik.touched.expenseAmount &&
                  formik.errors.expenseAmount && (
                    <div className="invalid-feedback">
                      {formik.errors.expenseAmount}
                    </div>
                  )}
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">
                  Attachment<span className="text-danger">*</span>
                </lable>
                <input
                  type="file"
                  name="attachment"
                  className={`form-control ${
                    formik.touched.attachment && formik.errors.attachment
                      ? "is-invalid"
                      : ""
                  }`}
                  onChange={(event) => {
                    formik.setFieldValue(
                      "attachment",
                      event.currentTarget.files[0]
                    );
                  }}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.attachment && formik.errors.attachment && (
                  <div className="invalid-feedback">
                    {formik.errors.attachment}
                  </div>
                )}
              </div>
            </div>
            {/* <div className="col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">
                  Approver ID<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.approvalId && formik.errors.approvalId
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("approvalId")}
                />
                {formik.touched.approvalId && formik.errors.approvalId && (
                  <div className="invalid-feedback">
                    {formik.errors.approvalId}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">
                  Approver Name<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.approvalName && formik.errors.approvalName
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("approvalName")}
                />
                {formik.touched.approvalName && formik.errors.approvalName && (
                  <div className="invalid-feedback">
                    {formik.errors.approvalName}
                  </div>
                )}
              </div>
            </div> */}
            <div className="col-md-6 col-12 mb-4">
              <lable className="form-lable fw-medium">Status</lable>
              <span className="text-danger ">*</span>
              <select
                {...formik.getFieldProps("status")}
                className={`form-select    ${
                  formik.touched.status && formik.errors.status
                    ? "is-invalid"
                    : ""
                }`}
                aria-label="Default select example"
                value={status}
                onChange={handleStatusChange}
              >
                <option selected></option>
                <option value="PENDING">Pending</option>
                <option value="APPROVED">Approved</option>
                <option value="REJECTED">Rejected</option>
              </select>
              {formik.touched.status && formik.errors.status && (
                <div className="invalid-feedback">{formik.errors.status}</div>
              )}
            </div>
            {showReasonSelect && (
              <div className="col-md-6 col-12 mb-4">
                <lable className="form-lable fw-medium">Reason</lable>
                <span className="text-danger ">*</span>
                <select
                  {...formik.getFieldProps("reason")}
                  className={`form-select  ${
                    formik.touched.reason && formik.errors.reason
                      ? "is-invalid"
                      : ""
                  }`}
                  value={reason}
                  onChange={handleReasonChange}
                >
                  <option selected></option>
                  <option value="Not Convincing">Not Convincing</option>
                  <option value="Need to Enquiry">Need to Enquiry</option>
                  <option value="Others">Others</option>
                </select>
                {formik.touched.reason && formik.errors.reason && (
                  <div className="invalid-feedback">{formik.errors.reason}</div>
                )}
              </div>
            )}
            {showSubjectDescription && (
              <>
                <div className="col-md-6 col-12 mb-4">
                  <lable className="form-lable fw-medium">Subject</lable>
                  <span className="text-danger ">*</span>
                  <input
                    type="text"
                    className={`form-control  ${
                      formik.touched.subject && formik.errors.subject
                        ? "is-invalid"
                        : ""
                    }`}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    {...formik.getFieldProps("subject")}
                  />
                  {formik.touched.subject && formik.errors.subject && (
                    <div className="invalid-feedback">
                      {formik.errors.subject}
                    </div>
                  )}
                </div>
                <div className="col-md-6 col-12 mb-4">
                  <lable className="form-lable fw-medium">Description</lable>
                  <span className="text-danger ">*</span>
                  <textarea
                    id="floatingTextarea2"
                    style={{ height: "100px" }}
                    className={`form-control  ${
                      formik.touched.description && formik.errors.description
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("description")}
                  ></textarea>
                  {formik.touched.description && formik.errors.description && (
                    <div className="invalid-feedback">
                      {formik.errors.description}
                    </div>
                  )}
                </div>
              </>
            )}
            <div className="col-md-6 col-12 mb-4">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">Remarks</lable>
                <textarea
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                  className="form-control"
                  {...formik.getFieldProps("remarks")}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default ExpensesEdit;
