import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import api from "../../config/URL";
import { toast } from "react-toastify";
import fetchAllCompanyNamesWithId from "../List/CompanyNameList";
import fetchAllEmployeeNamesWithId from "../List/EmployeeNameList";

function ExitManagementAdmin() {
  const navigate = useNavigate();
  const [companyData, setCompanyData] = useState(null); 
  const [employeeData, setEmployeeData] = useState(null); 

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

  const validationSchema = Yup.object({
    employeeId: Yup.string().required("*Employee name is required"),
    cmpId: Yup.string().required("*Company name is required"),
    reasonForRelieving: Yup.string().required(
      "*Reason for relieving is required"
    ),
    dateOfRelieving: Yup.string().required("*Select the date of relieving"),
    exitMgmtDateOfApply: Yup.string().required("*Select the date of apply"),
    exitMgmtNoticePeriod: Yup.string().required("*Notice period is required"),
  });

  const formik = useFormik({
    initialValues: {
      employeeId: "",
      exitMgmtEmpName: "",
      cmpId: "",
      reasonForRelieving: "",
      dateOfRelieving: "",
      exitMgmtDateOfApply: "",
      exitMgmtNoticePeriod: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // console.log(values);
      // values.exitMgmtCmpId = 106;
      // values.exitMgmtEmpId = "106-01";
      // values.relievingApprovalStatus = "Pending";
      try {
        const response = await api.post("addExitManagement", values);
        // console.log(response)
        if (response.status === 201) {
          toast.success(response.data.message);
          navigate("/exitmanagement");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error("Error Submiting Data, ", error);
      }
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
              {/* <div className="col-md-6 col-12 mb-3">
                <lable className="form-lable">
                  Employee ID<span className="text-danger">*</span>
                </lable>
                <select
                  {...formik.getFieldProps("exitMgmtEmpId")}
                  className={`form-select  ${
                    formik.touched.exitMgmtEmpId && formik.errors.exitMgmtEmpId
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Default select example"
                >
                  <option></option>
                  <option value="106-01">106-01</option>
                  <option value="106-02">106-02</option>
                </select>
                {formik.touched.exitMgmtEmpId &&
                  formik.errors.exitMgmtEmpId && (
                    <div className="invalid-feedback">
                      {formik.errors.exitMgmtEmpId}
                    </div>
                  )}
              </div> */}
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
                        <option key={cmpId.id} value={cmpId.id}>
                          {cmpId.cmpName}
                        </option>
                      ))}
                  </select>
                  {formik.touched.cmpId && formik.errors.cmpId && (
                    <div className="invalid-feedback">
                      {formik.errors.cmpId}
                    </div>
                  )}
                </div>
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
                    formik.touched.exitMgmtDateOfApply &&
                    formik.errors.exitMgmtDateOfApply
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("exitMgmtDateOfApply")}
                />
                {formik.touched.exitMgmtDateOfApply &&
                  formik.errors.exitMgmtDateOfApply && (
                    <div className="invalid-feedback">
                      {formik.errors.exitMgmtDateOfApply}
                    </div>
                  )}
              </div>
              <div className="col-md-6 col-12 mb-3 ">
                <lable className="">Notice Period</lable>
                <span className="text-danger">*</span>
                <select
                  className={`form-select ${
                    formik.touched.exitMgmtNoticePeriod &&
                    formik.errors.exitMgmtNoticePeriod
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("exitMgmtNoticePeriod")}
                  aria-label="Default select example"
                >
                  <option selected></option>
                  <option value="30 days">30 days</option>
                  <option value="45 days">45 days</option>
                  <option value="60 days">60 days</option>
                  <option value="90 days">90 days</option>
                </select>
                {formik.touched.exitMgmtNoticePeriod &&
                  formik.errors.exitMgmtNoticePeriod && (
                    <div className="invalid-feedback">
                      {formik.errors.exitMgmtNoticePeriod}
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

export default ExitManagementAdmin;
