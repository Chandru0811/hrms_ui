import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import fetchAllDepartmentNamesWithId from "../List/DepartmentNameList";
import fetchAllEmployeeNamesWithId from "../List/EmployeeNameList";
import fetchAllCompanyNamesWithId from "../List/CompanyNameList";
import api from "../../config/URL";

function LeaveAdd() {
  const [companyData, setCompanyData] = useState(null);
  const [employeeData, setEmployeeData] = useState(null);
  const [departmentData, setDepartmentData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const companyData = await fetchAllCompanyNamesWithId();
      const employeeData = await fetchAllEmployeeNamesWithId();
      const departmentData = await fetchAllDepartmentNamesWithId();
      setCompanyData(companyData);
      setEmployeeData(employeeData);
      setDepartmentData(departmentData);
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

  const validationSchema = Yup.object({
    // employeeId: Yup.string().required('*Employee id is required'),
    employeeId: Yup.string().required("*Employee name is required"),
    // departmentId: Yup.string().required('*Department id is required'),
    deptId: Yup.string().required("*Department name is required"),
    // companyId: Yup.string().required('*Company id is required'),
    cmpId: Yup.string().required("*Company name is required"),
    fromDate: Yup.string().required("*From date is required"),
    toDate: Yup.string().required("*To date is required"),
    reasonForrequestedLeave: Yup.string().required(
      "*Reason for requested leave is required"
    ),
    leaveReqType: Yup.string().required("*Leave request type is required"),
  });
  const formik = useFormik({
    initialValues: {
      // employeeId: '',
      employeeId: "",
      // departmentId: '',
      deptId: "",
      // companyId: '',
      cmpId: "",
      fromDate: "",
      toDate: "",
      leaveReqType: "",
      reasonForrequestedLeave: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      const payload = {
        leaveReqEmpId: values.employeeId,
        leaveCmpId: values.cmpId,
        leaveDeptId: values.deptId,
        leaveReqStartDate: values.fromDate,
        leaveReqEndDate: values.toDate,
        leaveReqRemarks: values.reasonForrequestedLeave,
        leaveReqType: values.leaveReqType,
      };
      setLoading(true);
      try {
        const response = await api.post(`leave-request`, payload, {
          headers: {
            "Content-Type": "application/json",
            //Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 201) {
          toast.success("created:");
          resetForm();
          navigate("/leaveadmin");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <section className="LeaveAdd p-3">
      <div className="container-fluid">
        <div className="container">
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-12 text-end">
                <Link to="/leave">
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
              {/* <div className="col-lg-6 col-md-6 col-12">
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
                    <div className="invalid-feedback">
                      {formik.errors.cmpId}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-6 col-12 mb-2">
                <lable className="form-lable">
                  Department Name<span className="text-danger">*</span>
                </lable>
                <div className="input-group mb-3">
                  <select
                    {...formik.getFieldProps("deptId")}
                    className={`form-select  ${
                      formik.touched.deptId && formik.errors.deptId
                        ? "is-invalid"
                        : ""
                    }`}
                    aria-label="Default select example"
                  >
                    <option selected></option>
                    {departmentData &&
                      departmentData.map((deptId) => (
                        <option key={deptId.id} value={deptId.deptId}>
                          {deptId.deptName}
                        </option>
                      ))}
                  </select>
                  {formik.touched.deptId && formik.errors.deptId && (
                    <div className="invalid-feedback">
                      {formik.errors.deptId}
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
              {/* <div className="col-lg-6 col-md-6 col-12">
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
                  {formik.touched.departmentId &&
                    formik.errors.departmentId && (
                      <div className="invalid-feedback">
                        {formik.errors.departmentId}
                      </div>
                    )}
                </div>
              </div> */}

              {/* <div className="col-lg-6 col-md-6 col-12">
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
              </div> */}

              <div className="col-lg-6 col-md-6 col-12">
                <div className="text-start  mb-3">
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
                    value={formik.values.fromDate || currentDate}
                    min={currentDate}
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
                    value={formik.values.toDate || currentDate}
                    min={currentDate}
                  />
                  {formik.touched.toDate && formik.errors.toDate && (
                    <div className="invalid-feedback">
                      {formik.errors.toDate}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="text-start mt-2 mb-3">
                  <lable className="form-lable">Leave Requested Type</lable>
                  <span className="text-danger">*</span>
                  <select
                    type="text"
                    className={`form-select ${
                      formik.touched.leaveReqType && formik.errors.leaveReqType
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("leaveReqType")}
                  >
                    <option value={""}></option>
                    <option value={"Maternity leave"}>Maternity Leave</option>
                    <option value={"Sick leave"}>Sick leave</option>
                    <option value={"Casual leave"}>Casual leave</option>
                  </select>
                  {formik.touched.leaveReqType &&
                    formik.errors.leaveReqType && (
                      <div className="invalid-feedback">
                        {formik.errors.leaveReqType}
                      </div>
                    )}
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-12">
                <div className="text-start mt-2 mb-3">
                  <lable className="form-lable">
                    Reason For Requested Leave
                  </lable>
                  <span className="text-danger">*</span>
                  <textarea
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
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LeaveAdd;
