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
  const { id } = useParams();

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
    expenseAmt: Yup.number()
      .required("*Expense amount is required")
      .typeError("*Must be a number"),
    attachment: Yup.string().required("*Attachment is required"),
    expensesEmpId: Yup.string().required("*Employee name is required"),
    cmpId: Yup.string().required("*Company name is required"),
    status: Yup.string().required("*Select the status"),
    // reason: Yup.string().required("*Select the reason"),
  });

  const formik = useFormik({
    initialValues: {
      expensesId: "",
      expenseDate: "",
      attachment: null,
      expenseType: "",
      expenseAmt: "",
      expensesEmpId: "",
      cmpId: "",
      approvalId: "",
      approvalName: "",
      status: "REJECTED",
      reason: "",
      subject: "",
      description: "",
      expenseDetails: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      setLoading(true);
      const formData = new FormData();
      formData.append("expensesId", id);
      formData.append("files", values.attachment);
      formData.append("expenseType", values.expenseType);
      formData.append("expenseAmt", values.expenseAmt);
      formData.append("expenseDetails", values.expenseDetails);
      formData.append("expenseDate", values.expenseDate);
      formData.append("approverStatus", values.status);
      formData.append("approverName", values.approvalName);
      formData.append("expensesEmpId", values.expensesEmpId);
      formData.append("cmpId", values.cmpId);

      try {
        const response = await api.put(`/expenses/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (response.status === 201) {
          toast.success(response.data.message);
          navigate("/expenseadmin");
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

  // const handleStatusChange = (e) => {
  //   setStatus(e.target.value);
  //   formik.setFieldValue("status", e.target.value);
  //   if (e.target.value === "Rejected") {
  //     setShowReasonSelect(true);
  //   } else {
  //     setShowReasonSelect(false);
  //     formik.setFieldValue("reason", "");
  //   }
  // };

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

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get(`/expenses/${id}`);
        formik.setValues(response.data);
      } catch (error) {
        toast.error("Error Fetching Data ", error.message);
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

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
                    formik.touched.expensesEmpId && formik.errors.expensesEmpId
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("expensesEmpId")}
                  disabled
                />
                {formik.touched.expensesEmpId && formik.errors.expensesEmpId && (
                  <div className="invalid-feedback">
                    {formik.errors.expensesEmpId}
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
                  {...formik.getFieldProps("expensesEmpId")}
                  className={`form-select  ${
                    formik.touched.expensesEmpId && formik.errors.expensesEmpId
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Default select example"
                >
                  <option selected></option>
                  {employeeData &&
                    employeeData.map((expensesEmpId) => (
                      <option key={expensesEmpId.id} value={expensesEmpId.id}>
                        {expensesEmpId.firstName} {expensesEmpId.lastName}
                      </option>
                    ))}
                </select>
                {formik.touched.expensesEmpId && formik.errors.expensesEmpId && (
                  <div className="invalid-feedback">
                    {formik.errors.expensesEmpId}
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
                <input
                  {...formik.getFieldProps("expenseType")}
                  className={`form-control    ${
                    formik.touched.expenseType && formik.errors.expenseType
                      ? "is-invalid"
                      : ""
                  }`}
                  disabled
                />
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
                    formik.touched.expenseAmt && formik.errors.expenseAmt
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("expenseAmt")}
                  disabled
                />
                {formik.touched.expenseAmt && formik.errors.expenseAmt && (
                  <div className="invalid-feedback">
                    {formik.errors.expenseAmt}
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
              >
                <option selected></option>
                <option value="REJECTED">Rejected</option>
                <option value="PENDING">Pending</option>
                <option value="APPROVED">Approved</option>
               
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
            <div className="col-md-6 col-12 mb-4">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">Remarks</lable>
                <textarea
                  id="expenseDetails"
                  name="expenseDetails"
                  style={{ height: "100px" }}
                  className="form-control"
                  {...formik.getFieldProps("expenseDetails")}
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
