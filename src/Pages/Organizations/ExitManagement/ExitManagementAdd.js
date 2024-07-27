import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import fetchAllCompanyNamesWithId from "../../List/CompanyNameList";
import fetchAllEmployeeNamesWithId from "../../List/EmployeeNameList";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import api from "../../../config/URL";

function ExitManagementAdd() {
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
    exitMgmtEmpId: Yup.string().required("*Emplayee Name is required"),
    exitMgmtCmpId: Yup.string().required("*Company Name is required"),
    exitMgmtDateOfApply: Yup.string().required("*Date is required"),
    exitMgmtNoticePeriod: Yup.string().required("*Notice Period is required"),
  });

  const formik = useFormik({
    initialValues: {
      exitMgmtEmpId: "",
      exitMgmtCmpId: "",
      exitMgmtEmpName: "",
      exitMgmtDateOfApply: "",
      exitMgmtNoticePeriod: "",
      reasonForRelieving: "",
      dateOfRelieving: "",
      relievingApproverName: "",
      relievingApproverStatus: "",
      assetsReturned: "",
      remarks: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      setLoading(true);
      try {
        const response = await api.post("/addExpenses", values, {
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
    <section className="ExitAdd p-3">
      <h5 class="text-start my-5">Add Exit Management</h5>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12 mb-2">
            <lable className="form-lable">
              Company Name<span className="text-danger">*</span>
            </lable>
            <div className="input-group mb-3">
              <select
                {...formik.getFieldProps("exitMgmtCmpId")}
                className={`form-select  ${
                  formik.touched.exitMgmtCmpId && formik.errors.exitMgmtCmpId
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
              {formik.touched.exitMgmtCmpId && formik.errors.exitMgmtCmpId && (
                <div className="invalid-feedback">
                  {formik.errors.exitMgmtCmpId}
                </div>
              )}
            </div>
          </div>
          <div className="col-md-6 col-12 mb-2">
            <lable className="form-lable">
              Employee Name<span className="text-danger">*</span>
            </lable>
            <div className="input-group mb-3">
              <select
                {...formik.getFieldProps("exitMgmtEmpId")}
                className={`form-select  ${
                  formik.touched.exitMgmtEmpId && formik.errors.exitMgmtEmpId
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
              {formik.touched.exitMgmtEmpId && formik.errors.exitMgmtEmpId && (
                <div className="invalid-feedback">
                  {formik.errors.exitMgmtEmpId}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div class="col-md-6 col-12 mb-2">
            <lable className="form-lable">Date of Relieving</lable>
            <div class="input-group mb-3">
              <input
                type="date"
                className={`form-control  ${
                  formik.touched.dateOfRelieving && formik.errors.dateOfRelieving
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("dateOfRelieving")}
              />
              {formik.touched.dateOfRelieving && formik.errors.dateOfRelieving && (
                <div className="invalid-feedback">
                  {formik.errors.dateOfRelieving}
                </div>
              )}
            </div>
          </div>
          <div class="col-md-6 col-12 mb-2">
            <lable class="form-lable">Date Of Apply </lable>
            <div class="input-group mb-3">
              <input
                type="date"
                className={`form-control  ${
                  formik.touched.exitMgmtDateOfApply && formik.errors.exitMgmtDateOfApply
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("exitMgmtDateOfApply")}
              />
              {formik.touched.exitMgmtDateOfApply && formik.errors.exitMgmtDateOfApply && (
                <div className="invalid-feedback">
                  {formik.errors.exitMgmtDateOfApply}
                </div>
              )}
            </div>
          </div>
        </div>
          <div class="col-md-6 col-12 mb-2">
            <lable className="form-lable">Notice Period</lable>
            <div class="input-group mb-3">
              <input
                type="text"
                className={`form-control  ${
                  formik.touched.exitMgmtNoticePeriod && formik.errors.exitMgmtNoticePeriod
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("exitMgmtNoticePeriod")}
              />
              {formik.touched.exitMgmtNoticePeriod && formik.errors.exitMgmtNoticePeriod && (
                <div className="invalid-feedback">
                  {formik.errors.exitMgmtNoticePeriod}
                </div>
              )}
            </div>
          </div>
          <div class="col-md-6 col-12 mb-2"></div>


        {/* <div class="col-md-6 col-12 mb-2">
          <lable className="form-lable">Employee ID</lable>
          <div class="input-group mb-3">
            <input
              type="text"
              className={`form-control  ${
                formik.touched.expenseAmount && formik.errors.expenseAmount
                  ? "is-invalid"
                  : ""
              }`}
              {...formik.getFieldProps("expenseAmount")}
            />
            {formik.touched.expenseAmount && formik.errors.expenseAmount && (
              <div className="invalid-feedback">
                {formik.errors.expenseAmount}
              </div>
            )}
          </div>
        </div> */}
        <div className="row">
        <div class="col-md-6 col-12 mb-2">
          <lable class="form-lable">Reason For Relieving</lable>
          <div class="input-group mb-3">
            <input
              type="text"
              className={`form-control  ${
                formik.touched.reasonForRelieving && formik.errors.reasonForRelieving
                  ? "is-invalid"
                  : ""
              }`}
              {...formik.getFieldProps("reasonForRelieving")}
            />
            {formik.touched.reasonForRelieving && formik.errors.reasonForRelieving && (
              <div className="invalid-feedback">
                {formik.errors.reasonForRelieving}
              </div>
            )}
          </div>
        </div>

        <div class="col-md-6 col-12 mb-2">
          <lable className="form-lable">Date Of Relieving</lable>
          <div class="input-group mb-3">
            <input
              type="date"
              className={`form-control  ${
                formik.touched.dateOfRelieving && formik.errors.dateOfRelieving
                  ? "is-invalid"
                  : ""
              }`}
              {...formik.getFieldProps("dateOfRelieving")}
            />
            {formik.touched.dateOfRelieving && formik.errors.dateOfRelieving && (
              <div className="invalid-feedback">
                {formik.errors.dateOfRelieving}
              </div>
            )}
          </div>
        </div>
        </div>
        <div className="row">
        <div class="col-md-6 col-12 mb-2">
          <lable class="form-lable">Relieving Approver</lable>
          <div class="input-group mb-3">
            <input
              type="text"
              className={`form-control  ${
                formik.touched.relievingApproverName && formik.errors.relievingApproverName
                  ? "is-invalid"
                  : ""
              }`}
              {...formik.getFieldProps("relievingApproverName")}
            />
            {formik.touched.relievingApproverName && formik.errors.relievingApproverName && (
              <div className="invalid-feedback">
                {formik.errors.relievingApproverName}
              </div>
            )}
          </div>
        </div>
     
        {/* <div class="col-md-6 col-12 mb-2">
          <lable className="form-lable">Relieving Approver ID</lable>
          <div class="input-group mb-3">
            <input
              type="text"
              className={`form-control  ${
                formik.touched.expenseAmount && formik.errors.expenseAmount
                  ? "is-invalid"
                  : ""
              }`}
              {...formik.getFieldProps("expenseAmount")}
            />
            {formik.touched.expenseAmount && formik.errors.expenseAmount && (
              <div className="invalid-feedback">
                {formik.errors.expenseAmount}
              </div>
            )}
          </div>
        </div> */}
        <div class="col-md-6 col-12 mb-2">
          <lable className="form-lable">Assets Returned</lable>
          <div class="input-group mb-3">
            <input
              type="text"
              className={`form-control  ${
                formik.touched.assetsReturned && formik.errors.assetsReturned
                  ? "is-invalid"
                  : ""
              }`}
              {...formik.getFieldProps("assetsReturned")}
            />
            {formik.touched.assetsReturned && formik.errors.assetsReturned && (
              <div className="invalid-feedback">
                {formik.errors.assetsReturned}
              </div>
            )}
          </div>
        </div>
        </div>
        <div class="col-md-6 col-12 mb-2">
          <lable class="form-lable">Approval Status </lable>
          <div class="input-group mb-3">
            <select
              className="form-select iconInput"
              aria-label="Default select example"
              className={`form-select  ${
                formik.touched.relievingApproverStatus && formik.errors.relievingApproverStatus
                  ? "is-invalid"
                  : ""
              }`}
              {...formik.getFieldProps("relievingApproverStatus")}
            >
              <option selected></option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
              <option value="Rejected">Pending</option>
            </select>
            {formik.touched.relievingApproverStatus && formik.errors.relievingApproverStatus && (
              <div className="invalid-feedback">
                {formik.errors.relievingApproverStatus}
              </div>
            )}
          </div>
        </div>
        {/* <div class="col-md-6 col-12 mb-2">
          <lable className="form-lable">Current Date</lable>
          <div class="input-group mb-3">
            <input
              type="date"
              className={`form-control  ${
                formik.touched.expenseAmount && formik.errors.expenseAmount
                  ? "is-invalid"
                  : ""
              }`}
              {...formik.getFieldProps("expenseAmount")}
            />
            {formik.touched.expenseAmount && formik.errors.expenseAmount && (
              <div className="invalid-feedback">
                {formik.errors.expenseAmount}
              </div>
            )}
          </div>
        </div> */}
    </div>
      <div className="my-3 d-flex justify-content-end align-items-end  mb-5">
        <Link to="/exitmanagement">
          <button type="button " className="btn btn-border btn-sm   ">
            Cancel
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
    </section>
  );
}

export default ExitManagementAdd;
