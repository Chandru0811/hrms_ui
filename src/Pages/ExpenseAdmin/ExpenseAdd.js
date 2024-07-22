import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import fetchAllEmployeeNamesWithId from "../List/EmployeeNameList";
import fetchAllCompanyNamesWithId from "../List/CompanyNameList";
import api from "../../config/URL";

function ExpenseAdd() {
  const [companyData, setCompanyData] = useState(null);
  const [employeeData, setEmployeeData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const navigate = useNavigate();

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
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setCurrentDate(today);
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
  });

  const formik = useFormik({
    initialValues: {
      expenseDate: "",
      expenseType: "",
      expenseAmount: "",
      attachment: "",
      // employeeId:"",
      employeeId: "",
      // companyId:"",
      cmpId: "",
      remarks: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      setLoading(true);
      const formData = new FormData();
      formData.append("files", values.attachment);
      formData.append("expenseType", values.expenseType);
      formData.append("expenseAmt", values.expenseAmount);
      formData.append("expenseDetails", values.remarks);
      formData.append("expenseDate", "2024-07-14T14:26:32.665Z");
      formData.append("expensesEmpId", 34);
      formData.append("cmpId", values.cmpId);
      
      try {
        const response = await api.post("/addExpenses", formData, {
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
                &nbsp;<span>Save</span>
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
                  className={`form-control  ${
                    formik.touched.employeeId && formik.errors.employeeId
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("employeeId")}
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
                      <option key={employeeId.id} value={employeeId.id}>
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
                  className={`form-control  ${
                    formik.touched.companyId && formik.errors.companyId
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("companyId")}
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
                  className={`form-control  ${
                    formik.touched.expenseDate && formik.errors.expenseDate
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("expenseDate")}
                  value={formik.values.expenseDate || currentDate}
                  min={currentDate}
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
                >
                  <option selected></option>
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
                  className={`form-control  ${
                    formik.touched.expenseAmount && formik.errors.expenseAmount
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("expenseAmount")}
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
                <label className="form-label">
                  Attachment<span className="text-danger">*</span>
                </label>
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

            <div className="col-md-6 col-12">
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

export default ExpenseAdd;
