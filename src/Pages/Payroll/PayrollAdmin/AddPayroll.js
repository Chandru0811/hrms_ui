import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import api from "./../../../config/URL";
import fetchAllDepartmentNamesWithId from "../../List/DepartmentNameList";
import fetchAllEmployeeNamesWithId from "../../List/EmployeeNameList";
import fetchAllCompanyNamesWithId from "../../List/CompanyNameList";

function AddPayroll() {
  const [companyData, setCompanyData] = useState(null);
  const [employeeData, setEmployeeData] = useState(null);
  const [departmentData, setDepartmentData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentMonth, setCurrentMonth] = useState("");
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
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    setCurrentMonth(`${year}-${month}`);
  }, []);

  const validationSchema = Yup.object().shape({
    // payrollEmpId: Yup.string().required("*Employee id is required"),
    // payrollEmpId: Yup.string().required("*Employee name is required"),
    cmpId: Yup.string().required("*Company name is required"),
    // deptId: Yup.string().required("*Department name is required"),
    basicSalary: Yup.string().required("*Basic pay is required"),
    bonus: Yup.string().required("*Bonus is required"),
    deduction: Yup.string().required("*Deduction is required"),
    netPay: Yup.string().required("*Net pay is required"),
    payrollWorkingStatus: Yup.string().required("*Status is required"),
    deductionMonth: Yup.string().required("*Payroll month is required"),
  });

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      // payrollEmpId: "",
      payrollEmpId: 34,
      cmpId: "",
      // deptId: "",
      basicSalary: "",
      bonus: "",
      deduction: "",
      netPay: "",
      payrollWorkingStatus: "",
      deductionMonth: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // console.log(values);
      // values.payrollClaimsId = 10;
      setLoading(true);
      const payload = {
        ...values,
        cmpId: parseInt(values.cmpId),
        deptId: parseInt(values.deptId),
        payrollEmpId: parseInt(values.payrollEmpId),
        basicSalary: parseInt(values.basicSalary),
        bonus: parseInt(values.bonus),
        deduction: parseInt(values.deduction),
        netPay: parseInt(values.netPay),
      };
      try {
        const response = await api.post("/addPayroll", payload);
        // console.log(response)
        if (response.status === 201) {
          toast.success(response.data.message);
          navigate("/payrolladmin");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error("Error Submiting Data, ", error);
      }finally{
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
              <Link to="/payrolladmin">
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
            {/* <div className="  col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">
                  Employee ID<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.payrollEmpId && formik.errors.payrollEmpId
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("payrollEmpId")}
                />
                {formik.touched.payrollEmpId && formik.errors.payrollEmpId && (
                  <div className="invalid-feedback">
                    {formik.errors.payrollEmpId}
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
                  <div className="invalid-feedback">{formik.errors.deptId}</div>
                )}
              </div>
            </div>
            <div className="col-md-6 col-12 mb-2">
              <lable className="form-lable">
                Employee Name<span className="text-danger">*</span>
              </lable>
              <div className="input-group mb-3">
                <select
                  {...formik.getFieldProps("payrollEmpId")}
                  className={`form-select  ${
                    formik.touched.payrollEmpId && formik.errors.payrollEmpId
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Default select example"
                >
                  <option selected></option>
                  {employeeData &&
                    employeeData.map((payrollEmpId) => (
                      <option key={payrollEmpId.id} value={payrollEmpId.id}>
                        {payrollEmpId.firstName} {payrollEmpId.lastName}
                      </option>
                    ))}
                </select>
                {formik.touched.payrollEmpId && formik.errors.payrollEmpId && (
                  <div className="invalid-feedback">
                    {formik.errors.payrollEmpId}
                  </div>
                )}
              </div>
            </div>
            <div className="  col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">
                  Basic Pay<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.basicSalary && formik.errors.basicSalary
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("basicSalary")}
                />
                {formik.touched.basicSalary && formik.errors.basicSalary && (
                  <div className="invalid-feedback">
                    {formik.errors.basicSalary}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <lable className="">Payroll Month</lable>
              <span className="text-danger">*</span>
              <input
                type="month"
                className={`form-control  ${
                  formik.touched.deductionMonth && formik.errors.deductionMonth
                    ? "is-invalid"
                    : ""
                }`}
                min={currentMonth}
                {...formik.getFieldProps("deductionMonth")}
              />
              {formik.touched.deductionMonth &&
                formik.errors.deductionMonth && (
                  <div className="invalid-feedback">
                    {formik.errors.deductionMonth}
                  </div>
                )}
            </div>
            <div className="  col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">
                  Bonus<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.bonus && formik.errors.bonus
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("bonus")}
                />
                {formik.touched.bonus && formik.errors.bonus && (
                  <div className="invalid-feedback">{formik.errors.bonus}</div>
                )}
              </div>
            </div>
            <div className="  col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">
                  Deduction<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.deduction && formik.errors.deduction
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("deduction")}
                />
                {formik.touched.deduction && formik.errors.deduction && (
                  <div className="invalid-feedback">
                    {formik.errors.deduction}
                  </div>
                )}
              </div>
            </div>
            <div className="  col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">
                  Net Pay<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  className={`form-control  ${
                    formik.touched.netPay && formik.errors.netPay
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("netPay")}
                />
                {formik.touched.netPay && formik.errors.netPay && (
                  <div className="invalid-feedback">{formik.errors.netPay}</div>
                )}
              </div>
            </div>
            <div className="  col-md-6 col-12">
              <div className="text-start mt-2 mb-3">
                <lable className="form-lable">
                  Status<span className="text-danger">*</span>
                </lable>
                <select
                  {...formik.getFieldProps("payrollWorkingStatus")}
                  className={`form-select    ${
                    formik.touched.payrollWorkingStatus &&
                    formik.errors.payrollWorkingStatus
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Default select example"
                >
                  <option></option>
                  <option value="Apporved">Apporved</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Pending">Pending</option>
                </select>

                {formik.touched.payrollWorkingStatus &&
                  formik.errors.payrollWorkingStatus && (
                    <div className="invalid-feedback">
                      {formik.errors.payrollWorkingStatus}
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddPayroll;
