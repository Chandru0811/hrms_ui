import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import fetchAllDepartmentNamesWithId from "../List/DepartmentNameList";
import fetchAllEmployeeNamesWithId from "../List/EmployeeNameList";
import fetchAllCompanyNamesWithId from "../List/CompanyNameList";

function DeductionEdit() {
  const [companyData, setCompanyData] = useState(null);
  const [employeeData, setEmployeeData] = useState(null);
  const [departmentData, setDepartmentData] = useState(null);

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

  const validationSchema = Yup.object({
    // employeeId: Yup.string().required("*Employee id is required"),
    employeeId: Yup.string().required("*Employee name is required"),
    // companyId: Yup.string().required("*Company id is required"),
    cmpId: Yup.string().required("*Company name is required"),
    // departmentId: Yup.string().required("*Department id is required"),
    deptId: Yup.string().required("*Department name is required"),
    deductionName: Yup.array().required("*Select a deduction name"),
    deductionMonth: Yup.string().required("*Deduction month is required"),
    deductionAmount: Yup.number()
      .required("*Deduction amount is required")
      .typeError("*Must be a number"),
    totalDeductiontAmount: Yup.number()
      .required("*Total deduction amount is required")
      .typeError("*Must be a number"),
  });

  const formik = useFormik({
    initialValues: {
      // employeeId: "ECS23",
      employeeId: "Surya Kumar",
      // companyId: "ECS678",
      cmpId: "AWS",
      // departmentId: "Tech234",
      deptId: "IT",
      deductionName: "CPF",
      deductionMonth: "2024-03",
      deductionAmount: "350",
      totalDeductiontAmount: "500",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container-fluid">
      <div className="container py-3">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-12 text-end">
              <Link to="/deductions">
                <button className="btn btn-sm btn-border">Back</button>
              </Link>
              &nbsp;&nbsp;
              <button className="btn btn-sm btn-button">Update</button>
            </div>
          </div>
          <div className="row mt-3">
            {/* <div className="col-md-6 col-12 mb-3 ">
              <lable className="">Employee ID</lable>
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
            {/* <div className="col-md-6 col-12 mb-3 ">
              <lable className="">Company ID</lable>
              <span className="text-danger">*</span>
              <input
                type="text"
                className={`form-control  ${
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
                      <option key={cmpId.id} value={cmpId.id}>
                        {cmpId.cmpName}
                      </option>
                    ))}
                </select>
                {formik.touched.cmpId && formik.errors.cmpId && (
                  <div className="invalid-feedback">{formik.errors.cmpId}</div>
                )}
              </div>
            </div>
            {/* `<div className="col-md-6 col-12 mb-3 ">
              <lable className="">Department ID</lable>
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
            </div>` */}
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
                      <option key={deptId.id} value={deptId.id}>
                        {deptId.deptName}
                      </option>
                    ))}
                </select>
                {formik.touched.deptId && formik.errors.deptId && (
                  <div className="invalid-feedback">{formik.errors.deptId}</div>
                )}
              </div>
            </div>
            <div className="col-md-6 col-12 mb-3">
              <label>Deduction Name</label>
              <span className="text-danger">*</span>
              <div className="mt-2 d-flex">
                <div className="checkbox-container mx-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="myCheckbox1"
                    name="deductionName"
                    value="CPF"
                    checked={
                      formik.values.deductionName &&
                      formik.values.deductionName.includes("CPF")
                    }
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label for="myCheckbox1" className="custom-checkbox">
                    <div className="inner-square"></div>
                  </label>
                  <label for="myCheckbox1" className="mx-1">
                    CPF
                  </label>
                </div>
                <div className="checkbox-container mx-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="myCheckbox2"
                    name="deductionName"
                    value="LOP"
                    checked={
                      formik.values.deductionName &&
                      formik.values.deductionName.includes("LOP")
                    }
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label for="myCheckbox2" className="custom-checkbox">
                    <div className="inner-square"></div>
                  </label>
                  <label for="myCheckbox2" className="mx-1">
                    LOP
                  </label>
                </div>
                <div className="checkbox-container mx-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="myCheckbox3"
                    name="deductionName"
                    value="Loan Interest"
                    checked={
                      formik.values.deductionName &&
                      formik.values.deductionName.includes("Loan Interest")
                    }
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label for="myCheckbox3" className="custom-checkbox">
                    <div className="inner-square"></div>
                  </label>
                  <label for="myCheckbox3" className="mx-1">
                    Loan Interest
                  </label>
                </div>
              </div>
              {formik.touched.deductionName && formik.errors.deductionName && (
                <div className="error text-danger ">
                  <small>{formik.errors.deductionName}</small>
                </div>
              )}
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <lable className="">Deduction Month</lable>
              <span className="text-danger">*</span>
              <input
                type="month"
                className={`form-control  ${
                  formik.touched.deductionMonth && formik.errors.deductionMonth
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("deductionMonth")}
              />
              {formik.touched.deductionMonth &&
                formik.errors.deductionMonth && (
                  <div className="invalid-feedback">
                    {formik.errors.deductionMonth}
                  </div>
                )}
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <lable className="">Deduction Amount</lable>
              <span className="text-danger">*</span>
              <input
                type="text"
                className={`form-control  ${
                  formik.touched.deductionAmount &&
                  formik.errors.deductionAmount
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("deductionAmount")}
              />
              {formik.touched.deductionAmount &&
                formik.errors.deductionAmount && (
                  <div className="invalid-feedback">
                    {formik.errors.deductionAmount}
                  </div>
                )}
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <lable className="">Total Deduction Amount</lable>
              <span className="text-danger">*</span>
              <input
                type="text"
                className={`form-control  ${
                  formik.touched.totalDeductiontAmount &&
                  formik.errors.totalDeductiontAmount
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("totalDeductiontAmount")}
              />
              {formik.touched.totalDeductiontAmount &&
                formik.errors.totalDeductiontAmount && (
                  <div className="invalid-feedback">
                    {formik.errors.totalDeductiontAmount}
                  </div>
                )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DeductionEdit;
