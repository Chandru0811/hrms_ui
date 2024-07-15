import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import fetchAllDepartmentNamesWithId from "../List/DepartmentNameList";
import fetchAllCompanyNamesWithId from "../List/CompanyNameList";

function EmployeeAdminEdit() {
  const [companyData, setCompanyData] = useState(null); 
  const [departmentData, setDepartmentData] = useState(null);
  const [selectedIdType, setSelectedIdType] = useState("nric");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const companyData = await fetchAllCompanyNamesWithId();
      const departmentData = await fetchAllDepartmentNamesWithId();
      setCompanyData(companyData);
      setDepartmentData(departmentData);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const validationSchema = Yup.object({
    firstName: Yup.string().required("*First name is required"),
    lastName: Yup.string().required("*Last name is required"),
    primaryPhoneNumber: Yup.number()
      .required("*Primary phone number is required")
      .typeError("*Must be a number"),
    primaryEmailID: Yup.string()
      .email("*Enter valid email")
      .required("*Primary email id is required"),
    primaryEmailPassword: Yup.string().required(
      "*Primary email password is required"
    ),
    companyID: Yup.string().required("*Company id is required"),
    employeeID: Yup.string().required("*Employee id is required"),
    departmentID: Yup.string().required("*Select a department id"),
    employeedesignation: Yup.string().required(
      "*Employee designation is required"
    ),
    employeeDateOfJoining: Yup.string().required(
      "*Employee date of joining is required"
    ),
    employeeType: Yup.string().required("*Employee type is required"),
    noticePeriod: Yup.string().required("*Notice period is required"),
    reportingManagerName: Yup.string().required(
      "*Reporting manager name is required"
    ),
    reportingManagerID: Yup.string().required(
      "*Reporting manager id is required"
    ),
    ...(selectedIdType === "nric" && {
      nricFin: Yup.string().required("*NRIC fin is required"),
      nricType: Yup.string().required("*Select a NRIC type"),
    }),
    ...(selectedIdType === "aadhar" && {
      aadharNumber: Yup.string().required("*Aadhar number is required"),
    }),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "Suriya",
      lastName: "Suresh",
      primaryPhoneNumber: "9876543210",
      address: "Singapore",
      primaryEmailID: "suriya00@gmail.com",
      primaryEmailPassword: "12345678",
      nricFin: "5678",
      nricType: "Singapore PR",
      cmpId: "AWS",
      employeeReferalID: "ECS845",
      employeeID: "ECS54",
      deptId: "Marketing",
      employeedesignation: "Developer",
      employeeDateOfJoining: "2024-03-13",
      employeeType: "Full Time",
      noticePeriod: "45 Days",
      reportingManagerName: "Manoj",
      reportingManagerID: "ECS17",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      setLoading(true);
    },
  });

  const handleIdTypeChange = (event) => {
    setSelectedIdType(event.target.value);
  };

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container-fluid">
      <form onSubmit={formik.handleSubmit}>
        <div className="container py-3">
          <div className="row">
            <div className="col-12 text-end">
              <Link to="/employeeadmin">
                <button className="btn btn-sm btn-border">Back</button>
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
            <div className="col-md-6 col-12 mb-3">
              <div className="mb-2">
                <lable for="exampleFormControlInput1" className="form-label">
                  First Name<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  name="firstName"
                  className={`form-control  ${
                    formik.touched.firstName && formik.errors.firstName
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("firstName")}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <div className="invalid-feedback">
                    {formik.errors.firstName}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <div className="mb-2">
                <lable for="exampleFormControlInput1" className="form-label">
                  Last Name<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  name="lastName"
                  className={`form-control  ${
                    formik.touched.lastName && formik.errors.lastName
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("lastName")}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <div className="invalid-feedback">
                    {formik.errors.lastName}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <div className="mb-2">
                <lable for="exampleFormControlInput1" className="form-label">
                  Primary Email ID<span className="text-danger">*</span>
                </lable>
                <input
                  type="email"
                  name="primaryEmailID"
                  className={`form-control  ${
                    formik.touched.primaryEmailID &&
                    formik.errors.primaryEmailID
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("primaryEmailID")}
                />
                {formik.touched.primaryEmailID &&
                  formik.errors.primaryEmailID && (
                    <div className="invalid-feedback">
                      {formik.errors.primaryEmailID}
                    </div>
                  )}
              </div>
            </div>
            <div className="col-md-6 col-12 mb-3">
              <div className="mb-2">
                <lable for="exampleFormControlInput1" className="form-label">
                  Primary Email Password<span className="text-danger">*</span>
                </lable>
                <div className={`input-group mb-3`}>
                  <input
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`form-control  ${
                      formik.touched.primaryEmailPassword &&
                      formik.errors.primaryEmailPassword
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("primaryEmailPassword")}
                    style={{
                      borderRight: "none",
                      borderTopRightRadius: "0px",
                      borderBottomRightRadius: "0px",
                    }}
                    name="primaryEmailPassword"
                  />
                  <span
                    className={`input-group-text bg-white`}
                    id="basic-addon1"
                    onClick={togglePasswordVisibility}
                    style={{
                      cursor: "pointer",
                      borderRadius: "5px",
                      borderLeft: "none",
                      borderTopLeftRadius: "0px",
                      borderBottomLeftRadius: "0px",
                    }}
                  >
                    {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                  </span>
                  {formik.touched.primaryEmailPassword &&
                    formik.errors.primaryEmailPassword && (
                      <div className="invalid-feedback">
                        {formik.errors.primaryEmailPassword}
                      </div>
                    )}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <div className="mb-2">
                <lable for="exampleFormControlInput1" className="form-label">
                  Primary Phone Number<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  name="primaryPhoneNumber"
                  className={`form-control  ${
                    formik.touched.primaryPhoneNumber &&
                    formik.errors.primaryPhoneNumber
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("primaryPhoneNumber")}
                />
                {formik.touched.primaryPhoneNumber &&
                  formik.errors.primaryPhoneNumber && (
                    <div className="invalid-feedback">
                      {formik.errors.primaryPhoneNumber}
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
                    <div className="invalid-feedback">
                      {formik.errors.deptId}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-6 col-12 mb-3 ">
              <div className="mb-2">
                <lable for="exampleFormControlInput1" className="form-label">
                  Employee Designation<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  name="employeedesignation"
                  className={`form-control  ${
                    formik.touched.employeedesignation &&
                    formik.errors.employeedesignation
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("employeedesignation")}
                />
                {formik.touched.employeedesignation &&
                  formik.errors.employeedesignation && (
                    <div className="invalid-feedback">
                      {formik.errors.employeedesignation}
                    </div>
                  )}
              </div>
            </div>
            <div>
              <div className="mb-3">
                <div className="form-check form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="idType"
                    id="nricRadio"
                    value="nric"
                    checked={selectedIdType === "nric"}
                    onChange={handleIdTypeChange}
                  />
                  <lable className="form-check-label" htmlFor="nricRadio">
                    NRIC
                  </lable>
                </div>
                <div className="form-check form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="idType"
                    id="aadharRadio"
                    value="aadhar"
                    checked={selectedIdType === "aadhar"}
                    onChange={handleIdTypeChange}
                  />
                  <lable className="form-check-label" htmlFor="aadharRadio">
                    Aadhar
                  </lable>
                </div>
              </div>
              {selectedIdType === "nric" && (
                <div className="row">
                  <div className="col-md-6 col-12 mb-3 ">
                    <div className="mb-2">
                      <lable
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        NRIC Fin<span className="text-danger">*</span>
                      </lable>
                      <input
                        type="text"
                        name="nricFin"
                        className={`form-control  ${
                          formik.touched.nricFin && formik.errors.nricFin
                            ? "is-invalid"
                            : ""
                        }`}
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        {...formik.getFieldProps("nricFin")}
                      />
                      {formik.touched.nricFin && formik.errors.nricFin && (
                        <div className="invalid-feedback">
                          {formik.errors.nricFin}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 col-12 mb-3 ">
                    <div className="mb-2">
                      <lable
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        NRIC Type<span className="text-danger">*</span>
                      </lable>
                      <select
                        className={`form-select  ${
                          formik.touched.nricType && formik.errors.nricType
                            ? "is-invalid"
                            : ""
                        }`}
                        {...formik.getFieldProps("nricType")}
                      >
                        <option selected></option>
                        <option value="Singapore Citizen">
                          Singapore Citizen
                        </option>
                        <option value="Singapore PR">Singapore PR</option>
                        <option value="Employment Pass">Employment Pass</option>
                        <option value="Dependant Pass">Dependant Pass</option>
                        <option value="S-Pass">S-Pass</option>
                        <option value="Work Permit">Work Permit</option>
                      </select>
                      {formik.touched.nricType && formik.errors.nricType && (
                        <div className="invalid-feedback">
                          {formik.errors.nricType}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              {selectedIdType === "aadhar" && (
                <div className="col-md-6 col-12 mb-3 ">
                  <div className="mb-2">
                    <lable
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Aadhar Number<span className="text-danger">*</span>
                    </lable>
                    <input
                      type="text"
                      name="aadharNumber"
                      className={`form-control  ${
                        formik.touched.aadharNumber &&
                        formik.errors.aadharNumber
                          ? "is-invalid"
                          : ""
                      }`}
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      {...formik.getFieldProps("aadharNumber")}
                    />
                    {formik.touched.aadharNumber &&
                      formik.errors.aadharNumber && (
                        <div className="invalid-feedback">
                          {formik.errors.aadharNumber}
                        </div>
                      )}
                  </div>
                </div>
              )}
            </div>
            
            <div className="col-md-6 col-12 mb-3 ">
              <div className="mb-2">
                <lable for="exampleFormControlInput1" className="form-label">
                  Employee Date Of Joining<span className="text-danger">*</span>
                </lable>
                <input
                  type="date"
                  name="employeeDateOfJoining"
                  className={`form-control  ${
                    formik.touched.employeeDateOfJoining &&
                    formik.errors.employeeDateOfJoining
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("employeeDateOfJoining")}
                />
                {formik.touched.employeeDateOfJoining &&
                  formik.errors.employeeDateOfJoining && (
                    <div className="invalid-feedback">
                      {formik.errors.employeeDateOfJoining}
                    </div>
                  )}
              </div>
            </div>
            <div className="col-md-6 col-12 mb-4">
              <lable className="">Employee Type</lable>
              <span className="text-danger">*</span>
              <select
                {...formik.getFieldProps("employeeType")}
                className={`form-select    ${
                  formik.touched.employeeType && formik.errors.employeeType
                    ? "is-invalid"
                    : ""
                }`}
                aria-label="Default select example"
              >
                <option selected></option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Hourly Basis">Hourly Basis</option>
              </select>
              {formik.touched.employeeType && formik.errors.employeeType && (
                <div className="invalid-feedback">
                  {formik.errors.employeeType}
                </div>
              )}
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <div className="mb-2">
                <lable for="exampleFormControlInput1" className="form-label">
                  Notice Period<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  name="noticePeriod"
                  className={`form-control  ${
                    formik.touched.noticePeriod && formik.errors.noticePeriod
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("noticePeriod")}
                />
                {formik.touched.noticePeriod && formik.errors.noticePeriod && (
                  <div className="invalid-feedback">
                    {formik.errors.noticePeriod}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <div className="mb-2">
                <lable for="exampleFormControlInput1" className="form-label">
                  Reporting Manager Name<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  name="reportingManagerName"
                  className={`form-control  ${
                    formik.touched.reportingManagerName &&
                    formik.errors.reportingManagerName
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("reportingManagerName")}
                />
                {formik.touched.reportingManagerName &&
                  formik.errors.reportingManagerName && (
                    <div className="invalid-feedback">
                      {formik.errors.reportingManagerName}
                    </div>
                  )}
              </div>
            </div>
            <div className="col-md-6 col-12 mb-3 ">
              <div className="mb-2">
                <lable for="exampleFormControlInput1" className="form-label">
                  Reporting Manager ID<span className="text-danger">*</span>
                </lable>
                <input
                  type="text"
                  name="reportingManagerID"
                  className={`form-control  ${
                    formik.touched.reportingManagerID &&
                    formik.errors.reportingManagerID
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...formik.getFieldProps("reportingManagerID")}
                />
                {formik.touched.reportingManagerID &&
                  formik.errors.reportingManagerID && (
                    <div className="invalid-feedback">
                      {formik.errors.reportingManagerID}
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

export default EmployeeAdminEdit;
